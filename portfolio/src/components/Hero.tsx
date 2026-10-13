import portofolioPic from '../assets/portfolio_pic.webp'

const buttonBase =
  'inline-flex min-h-12 items-center justify-center rounded-full border-2 border-forest px-8 text-sm font-bold transition duration-200 hover:-translate-y-0.75 md:text-base lg:text-lg'
const buttonPrimary = 'bg-forest text-surface hover:bg-forest-dark'
const buttonSecondary = 'bg-cream text-forest hover:bg-sand'

const Hero = () => {
  return (
    <section id="home" className="section-padding">
      <div className="container-page flex flex-col gap-5 md:flex-row md:items-center md:gap-10 lg:gap-16">
        <div className="mx-auto w-full max-w-sm rounded-3xl bg-forest p-4 md:mx-0 md:w-72 md:shrink-0 md:p-3 lg:w-80 lg:p-4 xl:w-96">
          <img
            src={portofolioPic}
            alt="Profilbild på Isabelle Reynolds"
            className="aspect-square w-full rounded-2xl object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <p className="font-bold text-terracotta uppercase mb-1">
            Hej, jag heter Isabelle
          </p>
          <h1 className="mb-4 font-semibold font-display text-forest text-4xl xl:text-5xl">
            Frontend Developer Student på Medieinstitutet.
          </h1>
          <p className="text-ink">
            Jag studerar frontend på Medieinstitutet. Före det arbetade jag med
            inköp och ekonomi. Jag gillar ordning, tydlighet och att få
            detaljerna rätt.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
            <a className={`${buttonBase} ${buttonPrimary}`} href="#projects">
              Se projekt
            </a>
            <a className={`${buttonBase} ${buttonSecondary}`} href="#contact">
              Kontakta mig
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
