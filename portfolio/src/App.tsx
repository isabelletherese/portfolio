import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">Hem</section>
        <section id="about">Om mig</section>
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
