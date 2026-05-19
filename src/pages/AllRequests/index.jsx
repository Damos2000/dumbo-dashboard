import { useState } from 'react'
import LoanTable from '../../components/ui/LoanTable'

export default function AllRequests() {
  const [activeTab, setActiveTab] = useState('ทั้งหมด')
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">คำขอทั้งหมด</h1>
        <p className="text-sm text-gray-500 mt-0.5">รายการคำขอสินเชื่อทั้งหมดในระบบ</p>
      </div>
      <LoanTable activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
