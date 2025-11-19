import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <HomePage />
      </div>
    </div>
  )
}

export default App;