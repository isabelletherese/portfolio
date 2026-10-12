import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">Hem</section>
        <section id="about">Om mig</section>
        <section id="projects">Projekt</section>
        <section id="contact">Kontakt</section>
      </main>

      <footer>
        <p>© 2026 Isabelle Reynolds</p>
      </footer>
    </>
  )
}

export default App
