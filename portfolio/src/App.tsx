import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const h3Base = 'uppercase font-bold text-sm mb-1 md:text-base lg:text-lg'

const frameBase =
  'rounded-4xl border-2 border-sand px-6 py-3 font-bold md:px-8 md:py-4 lg:px-10 lg:py-5'
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <section
          id="about"
          className="bg-forest text-surface p-5 md:p-10 lg:p-16 ">
          <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold font-display text-surface mb-6 ml-4">
                Om mig
              </h2>
              <p className="mb-2 ml-4 text-base md:text-lg font-sans text-surface">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget
                aliquam nisl nunc eu nunc. Sed euismod, nunc ut laoreet
                tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc eu
                nunc.
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <div className={frameBase}>
                <h3 className={h3Base + ' text-peach'}>Utbildning</h3>
                <p>Front End Developer, Medieinstitutet</p>
              </div>
              <div className={frameBase}>
                <h3 className={h3Base + ' text-peach'}>Bakgrund</h3>
                <p>Inköp, ekonomi och administration</p>
              </div>
              <div className={frameBase + ' bg-sand'}>
                <h3 className={h3Base + ' text-terracotta'}>Söker</h3>
                <p className="text-forest">
                  LIA-plats inom frontend-utveckling
                </p>
              </div>
            </div>
          </div>
        </section>
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
