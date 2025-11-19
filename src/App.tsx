import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <HomePage />
    </div>
  )
}

export default App