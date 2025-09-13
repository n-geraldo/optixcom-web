export const onRequestPost: PagesFunction<{
  TO_EMAIL: string,
  FROM_EMAIL: string
}> = async (context) => {
  const { request, env } = context;
  const origin = new URL(request.url).origin;

  // Basic JSON body parse & validation
  let data: any;
  try { data = await request.json(); }
  catch { return new Response('Invalid JSON', { status: 400 }); }

  const name = (data?.name || '').toString().trim();
  const email = (data?.email || '').toString().trim();
  const company = (data?.company || '').toString().trim();
  const message = (data?.message || '').toString().trim();

  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 });
  }
  // naive email check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response('Invalid email', { status: 400 });
  }

  // Compose email via MailChannels
  const payload = {
    personalizations: [{ to: [{ email: env.TO_EMAIL }] }],
    from: { email: env.FROM_EMAIL, name: "Optixcom Website" },
    reply_to: { email, name },
    subject: `New inquiry from ${name} — Optixcom`,
    content: [{
      type: "text/plain",
      value:
`A new message arrived via ${origin}:

Name: ${name}
Email: ${email}
Company: ${company || '-'}
Message:
${message}

IP: ${request.headers.get('cf-connecting-ip') || 'n/a'}
UA: ${request.headers.get('user-agent') || 'n/a'}`
    }]
  };

  const resp = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const text = await resp.text();
    return new Response(`Mail send failed: ${text}`, { status: 502 });
  }

  // simple success
  return new Response('OK', { status: 200, headers: { "content-type": "text/plain" } });
};
