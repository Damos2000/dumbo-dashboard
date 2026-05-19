import { FileSearch } from 'lucide-react'
import { loans } from '../../data/loans'

export default function DocumentCheck() {
  const incomplete = loans.filter((l) => l.docsSubmitted < l.docsTotal)

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">ตรวจสอบเอกสาร</h1>
        <p className="text-sm text-gray-500 mt-0.5">รายการที่ยังส่งเอกสารไม่ครบ</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {incomplete.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-gray-400 gap-2">
            <FileSearch size={32} />
            <span>ไม่มีรายการที่รอเอกสาร</span>
          </div>
        ) : (
          incomplete.map((loan) => (
            <div key={loan.id} className="flex items-center justify-between px-5 py-4">
              <div>
                <div className="font-medium text-gray-900">{loan.applicant}</div>
                <div className="text-xs text-gray-400">{loan.id}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700">เอกสาร {loan.docsSubmitted}/{loan.docsTotal}</div>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-500 text-xs font-medium">
                  รอเอกสาร
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
