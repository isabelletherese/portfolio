import { useState } from 'react'

const navLinks = [
  { label: 'Hem', href: '#home' },
  { label: 'Om mig', href: '#about' },
  { label: 'Projekt', href: '#projects', highlight: true },
  { label: 'Kontakt', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-sand text-ink px-5 py-4 md:px-10 lg:px-16">
      <div className="container-page flex items-center justify-between">
        <a
          href="/"
          className="font-display text-forest hover:text-forest-dark font-bold text-2xl lg:text-3xl">
          Isabelle Reynolds
        </a>
        <nav className="hidden md:flex gap-4 lg:gap-8 font-sans text-forest font-bold md:text-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition duration-200 hover:-translate-y-0.75 hover:text-terracotta hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex size-12 cursor-pointer items-center justify-center text-forest">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-10">
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
            className="flex size-12 items-center cursor-pointer justify-center self-end rounded-full bg-sand text-forest">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <nav className="flex flex-col gap-5 pt-8 font-display font-semibold text-3xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex min-h-16 items-center rounded-2xl border border-sand px-5 ${link.highlight ? 'bg-sand text-forest' : 'text-sand'}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
