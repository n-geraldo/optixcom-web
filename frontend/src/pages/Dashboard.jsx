import React from 'react';

export default function Dashboard({ stats }) {
  const cards = [
    ['Total Clients', stats.total_clients],
    ['Active Clients', stats.active_clients],
    ['Expired Clients', stats.expired_clients],
    ['Disabled Clients', stats.disabled_clients],
    ['Online PPPoE Users', stats.online_users],
    ['Monthly Renewals', stats.monthly_renewals],
    ['Monthly Income', `ALL ${stats.monthly_income}`],
    ['Routers/NAS Count', stats.nas_count],
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map(([label, value]) => (
        <div key={label} className="rounded-2xl shadow bg-white p-4">
          <p className="text-sm text-gray-500">{label}</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
        </div>
      ))}
    </div>
  );
}
