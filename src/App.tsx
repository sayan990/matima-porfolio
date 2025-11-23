import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Commissions from './pages/Commissions';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState('home');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigateTo = (pageName: string) => {
    setPage(pageName);
  }

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} navigateTo={navigateTo} />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header toggleSidebar={toggleSidebar} />
        {page === 'home' && <HomePage />}
        {page === 'gallery' && <Gallery />}
        {page === 'commissions' && <Commissions />}
      </div>
    </div>
  )
}

export default App;