export const api = {
  async getDashboard(token) {
    const res = await fetch('/api/dashboard', { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error('Failed to load dashboard');
    return res.json();
  },
};
