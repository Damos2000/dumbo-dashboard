import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import AllRequests from './pages/AllRequests'
import DocumentCheck from './pages/DocumentCheck'
import CreditReview from './pages/CreditReview'
import Settings from './pages/Settings'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const pages = {
    dashboard: <Dashboard />,
    requests: <AllRequests />,
    documents: <DocumentCheck />,
    review: <CreditReview />,
    settings: <Settings />,
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 overflow-y-auto">
        {pages[activePage]}
      </main>
    </div>
  )
}
