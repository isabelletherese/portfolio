import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Isabelle Reynolds</p>
      </footer>
    </>
  )
}

export default App
