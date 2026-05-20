import { loans, trustColors, TAB_FILTERS } from '../../data/loans'

export default function CreditReview() {
  const pending = loans.filter(TAB_FILTERS['พิจารณา'])

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">พิจารณาสินเชื่อ</h1>
        <p className="text-sm text-gray-500 mt-0.5">คำขอที่อยู่ระหว่างการพิจารณา</p>
      </div>
      <div className="grid gap-4">
        {pending.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 py-16 text-center text-gray-400">
            ไม่มีคำขอรอพิจารณา
          </div>
        ) : (
          pending.map((loan) => (
            <div key={loan.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{loan.applicant}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{loan.id}{loan.amount ? ` · ${loan.amount} บาท` : ''}</div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trustColors[loan.trust]}`}>{loan.trust}</span>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                  อนุมัติ
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-50 text-red-500 border border-red-200 text-sm font-medium hover:bg-red-100 transition-colors">
                  ปฏิเสธ
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors">
                  ขอข้อมูลเพิ่ม
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
