import { useState } from 'react'
import {
  loans, TAB_FILTERS,
  phaseColors, phaseDotColors,
  trustColors, decisionColors,
  DOC_LABELS, PHASES_ORDER, PHASES_LABEL,
} from '../../data/loans'

/* ─── Stepper ─────────────────────────────────────────────────────── */
function Stepper({ phase }) {
  const current = PHASES_ORDER.indexOf(phase)
  return (
    <div className="flex items-start">
      {PHASES_ORDER.map((p, i) => {
        const done   = i < current
        const active = i === current
        return (
          <div key={p} className="flex-1 flex flex-col items-center relative">
            {i < PHASES_ORDER.length - 1 && (
              <div
                className="absolute top-3.5 left-1/2 w-full h-0.5"
                style={{ background: done ? '#059669' : '#E2E8F0', zIndex: 0 }}
              />
            )}
            <div
              className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all"
              style={
                done   ? { background: '#059669', borderColor: '#059669', color: '#fff' }
              : active ? { background: '#fff', borderColor: '#7C3AED', color: '#7C3AED', boxShadow: '0 0 0 3px rgba(124,58,237,0.15)' }
              :           { background: '#fff', borderColor: '#E2E8F0', color: '#94A3B8' }
              }
            >
              {done ? '✓' : i + 1}
            </div>
            <div
              className="mt-1.5 text-center leading-tight whitespace-pre-line"
              style={{
                fontSize: '0.65rem',
                color: done ? '#059669' : active ? '#7C3AED' : '#94A3B8',
                fontWeight: active ? 600 : 400,
              }}
            >
              {PHASES_LABEL[i]}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─── Doc list ────────────────────────────────────────────────────── */
function DocList({ docObj }) {
  if (!docObj) return <p className="text-center text-xs text-slate-400 py-3">ยังไม่มีเอกสาร</p>
  return (
    <div className="flex flex-col gap-1.5">
      {Object.entries(docObj).map(([key, val]) => (
        <div key={key} className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-slate-50">
          <span className="text-sm text-slate-700">{DOC_LABELS[key]}</span>
          {val === true  && <span className="text-xs font-semibold text-emerald-600">✓ ผ่าน</span>}
          {val === false && <span className="text-xs font-semibold text-red-500">✗ ไม่ผ่าน</span>}
          {val === null  && <span className="text-xs text-slate-400">— ไม่ต้องการ</span>}
        </div>
      ))}
    </div>
  )
}

/* ─── Detail panel ────────────────────────────────────────────────── */
function DetailPanel({ loan, docTab, onTabChange }) {
  const hasJoint = !!loan.docJoint
  return (
    <div className="p-5 bg-slate-50 border-t border-slate-200">
      <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>

        {/* Stepper full-width */}
        <div className="col-span-3 bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">ขั้นตอนการดำเนินการ</p>
          <Stepper phase={loan.phase} />
        </div>

        {/* Documents */}
        <div className="col-span-2 bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            เอกสาร {hasJoint && <span className="text-blue-500 normal-case font-medium">(กู้ร่วม)</span>}
          </p>
          {hasJoint && (
            <div className="flex mb-3 border border-slate-200 rounded-md overflow-hidden bg-slate-50">
              {['main', 'joint'].map((t) => (
                <button
                  key={t}
                  onClick={(e) => { e.stopPropagation(); onTabChange(t) }}
                  className="flex-1 py-1.5 text-xs font-medium transition-colors"
                  style={docTab === t ? { background: '#0D1B2A', color: '#fff' } : { color: '#64748B' }}
                >
                  {t === 'main' ? 'ผู้กู้หลัก' : 'ผู้กู้ร่วม'}
                </button>
              ))}
            </div>
          )}
          <DocList docObj={docTab === 'main' ? loan.docMain : loan.docJoint} />
        </div>

        {/* Decision */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">ผลพิจารณา</p>
          {loan.decision === 'pending' ? (
            <>
              <p className="text-base font-semibold text-slate-400">ยังไม่มีผล</p>
              <p className="text-xs text-slate-400 mt-1.5">รอเอกสารครบถ้วน</p>
            </>
          ) : (
            <>
              <p className="font-extrabold text-2xl" style={{
                color: loan.decision === 'approved' ? '#059669' : loan.decision === 'conditional' ? '#D97706' : '#E11D48'
              }}>
                {loan.decisionLabel}
              </p>
              {loan.amount && <p className="text-sm font-semibold text-slate-800 mt-2">วงเงิน ฿{loan.amount}</p>}
              {loan.rate   && <p className="text-xs text-slate-500 mt-1">อัตราดอกเบี้ย {loan.rate} ต่อปี</p>}
              {loan.conditions.length > 0 && (
                <div className="mt-3 flex flex-col gap-1.5">
                  {loan.conditions.map((c, i) => (
                    <div key={i} className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded border-l-2 border-amber-500">{c}</div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}

/* ─── Doc summary helper ──────────────────────────────────────────── */
function DocSummary({ docMain, docJoint }) {
  if (!docMain) return <span className="text-xs text-slate-400">ยังไม่มีเอกสาร</span>
  const hasFail = (obj) => obj && Object.values(obj).some(v => v === false)
  if (hasFail(docMain) || hasFail(docJoint))
    return <span className="text-xs font-semibold text-red-500">✗ ไม่ครบ</span>
  return <span className="text-xs font-semibold text-emerald-600">✓ ครบถ้วน</span>
}

/* ─── LoanTable ───────────────────────────────────────────────────── */
export default function LoanTable({ activeTab, onTabChange }) {
  const [expandedId, setExpandedId] = useState(null)
  const [docTabs, setDocTabs]       = useState({})

  const tabs     = Object.keys(TAB_FILTERS)
  const filtered = loans.filter(TAB_FILTERS[activeTab] ?? (() => true))
  const toggle   = (id) => setExpandedId(prev => prev === id ? null : id)
  const setDocTab = (id, tab) => setDocTabs(prev => ({ ...prev, [id]: tab }))

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100" style={{ padding: '1rem 1.5rem' }}>
        <h2 className="font-bold text-slate-800 text-sm">รายการคำขอสินเชื่อ</h2>
        <div className="flex gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className="px-3 py-1 rounded-full text-xs font-medium border transition-colors"
              style={activeTab === tab
                ? { background: '#0D1B2A', color: '#fff', borderColor: '#0D1B2A' }
                : { background: '#F8FAFC', color: '#64748B', borderColor: '#E2E8F0' }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'collapse' }}>
          <thead style={{ background: '#F8FAFC' }}>
            <tr>
              {['ผู้ยื่นคำขอ', 'ขั้นตอน', 'Trust Level', 'เอกสาร', 'ผลพิจารณา', 'อัปเดตล่าสุด', ''].map((h, i) => (
                <th key={i} className="text-left text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200" style={{ padding: '0.65rem 1rem' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="text-center text-slate-400 text-sm" style={{ padding: '3rem' }}>ไม่มีรายการ</td></tr>
            ) : filtered.map((loan) => {
              const isOpen = expandedId === loan.id
              const docTab = docTabs[loan.id] ?? 'main'
              return (
                <>
                  <tr
                    key={loan.id}
                    onClick={() => toggle(loan.id)}
                    className="cursor-pointer border-b border-slate-100 transition-colors hover:bg-slate-50"
                    style={{ background: isOpen ? '#F0FDF4' : undefined }}
                  >
                    {/* Applicant */}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: '#1E3A5F', color: '#93C5FD' }}>
                          {loan.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{loan.lineId}</div>
                          <div className="text-xs text-slate-400">{loan.applicant}</div>
                        </div>
                      </div>
                    </td>
                    {/* Phase */}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${phaseColors[loan.phase]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${phaseDotColors[loan.phase]}`} />
                        {loan.phaseLabel}
                      </span>
                    </td>
                    {/* Trust */}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${trustColors[loan.trust]}`}>
                        {loan.trust}
                      </span>
                    </td>
                    {/* Docs */}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <DocSummary docMain={loan.docMain} docJoint={loan.docJoint} />
                    </td>
                    {/* Decision */}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${decisionColors[loan.decision]}`}>
                        {loan.decisionLabel}
                      </span>
                    </td>
                    {/* Date */}
                    <td className="text-xs text-slate-500 whitespace-nowrap" style={{ padding: '0.875rem 1rem' }}>
                      {loan.updatedAt}
                    </td>
                    {/* Chevron */}
                    <td className="text-right" style={{ padding: '0.875rem 1rem' }}>
                      <span
                        className="text-xl font-light inline-block transition-transform duration-200"
                        style={{ color: isOpen ? '#059669' : '#94A3B8', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                      >
                        ›
                      </span>
                    </td>
                  </tr>

                  {isOpen && (
                    <tr key={`${loan.id}-detail`}>
                      <td colSpan={7} style={{ padding: 0 }}>
                        <DetailPanel loan={loan} docTab={docTab} onTabChange={(tab) => setDocTab(loan.id, tab)} />
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
