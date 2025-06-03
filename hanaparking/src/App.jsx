import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
