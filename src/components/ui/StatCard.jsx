export default function StatCard({ value, label, color, bg }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border ${bg ? bg : 'border-gray-100'}`}
      style={{ padding: '2rem 2.5rem' }}
    >
      <div className={`text-4xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-gray-500 mt-3">{label}</div>
    </div>
  )
}
