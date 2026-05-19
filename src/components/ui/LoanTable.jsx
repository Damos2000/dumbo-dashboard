import { formatDate, formatAmount } from '../../utils/formatters'
import { TAB_FILTERS } from '../../constants'
import { loans, stageColors, getTrustColor, getTrustBg } from '../../data/loans'

const cellPad = { padding: '1.1rem 2rem' }
const headPad = { padding: '0.85rem 2rem' }

export default function LoanTable({ activeTab, onTabChange }) {
  const tabs = Object.keys(TAB_FILTERS)
  const filtered = loans.filter(TAB_FILTERS[activeTab] ?? (() => true))

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header bar */}
      <div
        className="flex items-center justify-between border-b border-gray-100"
        style={{ padding: '1.5rem 2rem' }}
      >
        <h2 className="font-semibold text-gray-800">รายการคำขอสินเชื่อ</h2>
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100">
              <th className="text-left whitespace-nowrap" style={headPad}>ผู้ยื่นคำขอ</th>
              <th className="text-left whitespace-nowrap" style={headPad}>ขั้นตอน</th>
              <th className="text-left whitespace-nowrap" style={headPad}>Trust Level</th>
              <th className="text-left whitespace-nowrap" style={headPad}>เอกสาร</th>
              <th className="text-left whitespace-nowrap" style={headPad}>ผลพิจารณา</th>
              <th className="text-left whitespace-nowrap" style={headPad}>อัปเดตล่าสุด</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-gray-400" style={{ padding: '4rem 2rem' }}>
                  ไม่มีรายการ
                </td>
              </tr>
            ) : (
              filtered.map((loan) => (
                <tr key={loan.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td style={cellPad}>
                    <div className="font-medium text-gray-900 whitespace-nowrap">{loan.applicant}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{loan.id}</div>
                    <div className="text-xs text-gray-400">{formatAmount(loan.amount)}</div>
                  </td>
                  <td className="whitespace-nowrap" style={cellPad}>
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[loan.stage] ?? 'text-gray-600 bg-gray-100'}`}>
                      {loan.stage}
                    </span>
                  </td>
                  <td className="whitespace-nowrap" style={cellPad}>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getTrustBg(loan.trustLevel)}`}
                          style={{ width: `${loan.trustLevel}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getTrustColor(loan.trustLevel)}`}>
                        {loan.trustLevel}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap" style={cellPad}>
                    <span className="text-gray-700">{loan.docsSubmitted}/{loan.docsTotal}</span>
                    {loan.docsSubmitted < loan.docsTotal && (
                      <span className="ml-1 text-xs text-orange-500">ไม่ครบ</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap" style={cellPad}>
                    {loan.result ? (
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[loan.result] ?? ''}`}>
                        {loan.result}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                  <td className="text-xs text-gray-500 whitespace-nowrap" style={cellPad}>
                    {formatDate(loan.updatedAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
