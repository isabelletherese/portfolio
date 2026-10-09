import { useState } from 'react'

const navLinks = [
  { label: 'Hem', href: '#home' },
  { label: 'Om mig', href: '#about' },
  { label: 'Projekt', href: '#projects', highlight: true },
  { label: 'Kontakt', href: '#contact' },
]

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-sand text-ink">
        <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-16">

          <a href="/" className="font-display text-forest hover:text-forest-dark font-bold text-2xl lg:text-3xl">Isabelle Reynolds</a>

          <nav className="hidden md:flex gap-4 lg:gap-8 font-sans font-medium">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex size-8 items-center justify-center text-forest">            
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-forest px-5 py-4 md:hidden">

          <button
            type="button"
            aria-label="Stäng meny"
            onClick={() => setIsOpen(false)}
            className="flex size-12 items-center justify-center self-end rounded-full bg-cream text-forest"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <nav className="flex flex-col gap-5 pt-8 font-display font-semibold text-3xl">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`flex min-h-16 items-center rounded-2xl border border-cream px-5 ${link.highlight ? 'bg-cream text-forest' : 'text-surface'}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header >

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
