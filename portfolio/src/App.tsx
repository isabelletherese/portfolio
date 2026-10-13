import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <section id="contact">Kontakt</section>
      </main>

      <footer>
        <p>© 2026 Isabelle Reynolds</p>
      </footer>
    </>
  )
}

export default App
