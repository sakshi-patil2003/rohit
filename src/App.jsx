import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="bg-ink text-paper font-body min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
