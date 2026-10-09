import './App.css'

function App() {

  return (
    <>
      <header className="bg-sand text-ink">
        <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-16">

          <a href="/" className="font-display text-forest hover:text-forest-dark font-bold text-xl md:text-2xl lg:text-3xl">Isabelle Reynolds</a>
          <button type="button" aria-label="Öppna meny" className="md:hidden text-forest"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          </button>

          <nav className="hidden md:flex gap-4 lg:gap-8 font-sans font-medium">
            <a href="#home">Hem</a>
            <a href="#about">Om mig</a>
            <a href="#projects">Projekt</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

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
