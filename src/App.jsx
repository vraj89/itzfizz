import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import ProjectFormModal from './components/ProjectFormModal.jsx'

export default function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-void text-ice">
      <Navbar onStartProject={() => setFormOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <About />
      </main>
      <Footer />
      <ProjectFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}
