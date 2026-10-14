const h3Base = 'uppercase font-bold'

const frameBase =
  'rounded-3xl border border-sand px-4 py-2 font-bold md:px-8 lg:py-3'

const About = () => {
  return (
    <section id="about" className="section-padding bg-forest text-surface">
      <div className="container-page grid gap-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-x-24">
        <div>
          <h2 className="text-surface">Om mig</h2>
          <p className="mb-2 text-surface">
            Det roligaste med utveckling är att få kombinera problemlösning med
            kreativitet samt se hur en idé växer fram till en färdig produkt.
            Jag är nyfiken på hur design och teknik samspelar och hur små
            detaljer kan påverka användarupplevelsen. Med erfarenhet av att ta
            ansvar, planera och hitta lösningar när saker inte går som tänkt ser
            jag nu fram emot att fortsätta utvecklas inom webbutveckling och
            lära mig nya saker.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 md:max-w-md lg:max-w-lg lg:justify-self-end">
          <div className={frameBase}>
            <h3 className={h3Base + ' text-peach'}>Utbildning</h3>
            <p className="md:text-base lg:text-lg">
              Front End Developer, Medieinstitutet
            </p>
          </div>
          <div className={frameBase}>
            <h3 className={h3Base + ' text-peach'}>Bakgrund</h3>
            <p className="md:text-base lg:text-lg">
              Inköp, ekonomi och administration
            </p>
          </div>
          <div className={frameBase + ' bg-sand'}>
            <h3 className={h3Base + ' text-terracotta'}>Söker</h3>
            <p className="md:text-base lg:text-lg text-forest">
              LIA-plats inom frontend-utveckling
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
