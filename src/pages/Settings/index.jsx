export default function Settings() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">ตั้งค่า</h1>
        <p className="text-sm text-gray-500 mt-0.5">การตั้งค่าระบบ</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div>
            <div className="font-medium text-gray-900">การแจ้งเตือน</div>
            <div className="text-xs text-gray-400">รับการแจ้งเตือนเมื่อมีคำขอใหม่</div>
          </div>
          <div className="w-11 h-6 rounded-full bg-green-500 relative cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-white absolute right-0.5 top-0.5 shadow" />
          </div>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div>
            <div className="font-medium text-gray-900">รีเฟรชอัตโนมัติ</div>
            <div className="text-xs text-gray-400">อัปเดตข้อมูลทุก 30 วินาที</div>
          </div>
          <div className="w-11 h-6 rounded-full bg-green-500 relative cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-white absolute right-0.5 top-0.5 shadow" />
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <div>
            <div className="font-medium text-gray-900">โหมดมืด</div>
            <div className="text-xs text-gray-400">เปลี่ยนธีมเป็นสีเข้ม</div>
          </div>
          <div className="w-11 h-6 rounded-full bg-gray-200 relative cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-white absolute left-0.5 top-0.5 shadow" />
          </div>
        </div>
      </div>
    </div>
  )
}
