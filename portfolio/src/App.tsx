import Navbar from './components/Navbar'
import Projects from './components/Projects'
import portofolioPic from './assets/portfolio_pic.webp'

const buttonBase =
  'inline-flex min-h-12 items-center justify-center rounded-full border-2 border-forest px-8 text-sm font-bold transition duration-200 hover:-translate-y-0.75 md:text-base lg:text-lg'
const buttonPrimary = 'bg-forest text-surface hover:bg-forest-dark'
const buttonSecondary = 'bg-cream text-forest hover:bg-sand'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <div className="grid gap-5 p-5 md:grid-cols-[18rem_1fr] md:items-center md:gap-10 md:p-10 lg:grid-cols-[22rem_1fr] lg:gap-16 lg:p-16 xl:grid-cols-[26rem_1fr]">
            <div className="mx-auto w-full max-w-sm rounded-3xl bg-forest p-4 md:mx-0 md:max-w-none md:p-3 lg:p-4">
              <img
                src={portofolioPic}
                alt="Profilbild på Isabelle Reynolds"
                className="aspect-square w-full rounded-2xl object-cover object-top"
              />
            </div>
            <div className="md:p-0 p-4">
              <p className="text-sm font-bold text-terracotta uppercase mb-1">
                Hej, jag heter Isabelle
              </p>
              <h1 className="mb-4 text-3xl font-semibold font-display text-forest lg:text-4xl xl:text-5xl">
                Frontend Developer Student på Medieinstitutet.
              </h1>
              <p className="mb-6 max-w-2xl text-base text-ink md:text-lg lg:text-xl">
                Jag studerar frontend på Medieinstitutet. Före det arbetade jag
                med inköp och ekonomi. Jag gillar ordning, tydlighet och att få
                detaljerna rätt.
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
                <a
                  className={`${buttonBase} ${buttonPrimary}`}
                  href="#projects">
                  Se projekt
                </a>
                <a
                  className={`${buttonBase} ${buttonSecondary}`}
                  href="#contact">
                  Kontakta mig
                </a>
              </div>
            </div>
          </div>
        </section>
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
