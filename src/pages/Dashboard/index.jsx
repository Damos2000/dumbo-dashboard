import { useState, useEffect } from 'react'
import LoanTable from '../../components/ui/LoanTable'
import StatCard from '../../components/ui/StatCard'
import { loans } from '../../data/loans'

export default function Dashboard() {
  const [countdown, setCountdown] = useState(30)
  const [activeTab, setActiveTab] = useState('ทั้งหมด')

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 30 : c - 1))
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const total     = loans.length
  const pending   = loans.filter((l) => ['product_inquire', 'doc_review'].includes(l.phase)).length
  const reviewing = loans.filter((l) => ['pre_approve', 'offer'].includes(l.phase)).length
  const approved  = loans.filter((l) => l.decision === 'approved').length

  return (
    <div className="space-y-6" style={{ padding: '2rem 2.5rem' }}>
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">ภาพรวมคำขอสินเชื่อ</h1>
          <p className="text-sm text-gray-500 mt-0.5">LINE Smart Credit Mortgage — Real-time Monitor</p>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          รีเฟรชใน {countdown}s
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard value={total} label="คำขอทั้งหมด" color="text-gray-900" />
        <StatCard value={pending} label="รอดำเนินการ" color="text-orange-500" />
        <StatCard value={reviewing} label="กำลังพิจารณา" color="text-purple-600" />
        <StatCard
          value={approved}
          label="อนุมัติแล้ว"
          color="text-purple-600"
          bg="border-purple-200 bg-purple-50"
        />
      </div>

      {/* Loan table */}
      <LoanTable activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
