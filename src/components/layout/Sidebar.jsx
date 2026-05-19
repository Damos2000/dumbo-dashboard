import { LayoutDashboard, FileText, FileSearch, CheckSquare, Settings } from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'ภาพรวม', icon: LayoutDashboard },
  { id: 'requests', label: 'คำขอทั้งหมด', icon: FileText },
  { id: 'documents', label: 'ตรวจสอบเอกสาร', icon: FileSearch },
  { id: 'review', label: 'พิจารณาสินเชื่อ', icon: CheckSquare },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="w-64 bg-[#16102a] text-white flex flex-col shrink-0">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
            DP
          </div>
          <div>
            <div className="font-semibold text-sm leading-tight">Dumbo Portal</div>
            <div className="text-xs text-gray-400">Officer Portal</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest px-3 mb-3">Main Menu</p>
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
              activePage === id
                ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}

        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest px-3 mt-8 mb-3 pt-6 border-t border-white/5">System</p>
        <button
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
            activePage === 'settings'
              ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Settings size={18} />
          ตั้งค่า
        </button>
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-xs font-bold">
            LO
          </div>
          <div>
            <div className="text-sm font-medium leading-tight">Officer 01</div>
            <div className="text-xs text-gray-400">Loan Officer</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
