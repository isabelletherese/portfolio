const linkBase =
  'inline-block break-words py-1 text-lg font-bold underline-offset-4 transition duration-200 hover:text-peach hover:underline'

const Contact = () => {
  return (
    <section id="contact" className="section-padding pt-0">
      <div className="container-page">
        <div className="rounded-3xl bg-forest text-surface p-6 md:p-10 lg:p-12">
          <h2>Kontakt</h2>
          <p>Söker ni en LIA-student eller vill bara säga hej? Hör av er.</p>

          <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <li>
              <h3 className="font-bold uppercase text-peach">E-post</h3>
              <a
                href="mailto:isabellereynolds@hotmail.com"
                className={linkBase}>
                isabellereynolds@hotmail.com
              </a>
            </li>
            <li>
              <h3 className="font-bold uppercase text-peach">GitHub</h3>
              <a
                href="https://github.com/isabelletherese"
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}>
                isabelletherese
              </a>
            </li>
            <li>
              <h3 className="font-bold uppercase text-peach">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/isabelle-therese-reynolds"
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}>
                Isabelle Reynolds
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
