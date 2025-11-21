import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Header from './components/Header';

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
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar isOpen={sidebarOpen} navigateTo={navigateTo} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        {page === 'home' && <HomePage />}
        {page === 'gallery' && <Gallery />}
      </div>
    </div>
  )
}

export default App;