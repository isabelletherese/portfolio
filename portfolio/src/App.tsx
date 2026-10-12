import Navbar from './components/Navbar'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">Hem</section>
        <section id="about">Om mig</section>
        <section id="projects" className="p-5 md:p-10 lg:p-16">
          <h2 className=" font-semibold font-display text-forest-dark mb-4 px-4 text-2xl md:text-3xl lg:text-4xl">
            Projekt
          </h2>
          <p className="mb-6 px-4 text-base md:text-lg font-sans text-ink-soft">
            Ett urval av skolprojekt.
            <span className="block md:inline">
              Välj en teknik för att filtrera.
            </span>
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-3xl border border-line bg-surface p-4 flex flex-col gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto aspect-16/10 w-full rounded-2xl object-cover"
                />
                <h3 className="text-xl font-semibold font-display text-forest-dark">
                  {project.title}
                </h3>
                <p className="flex-1 text-base md:text-lg font-sans text-ink-soft">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-forest-dark px-3 py-1 text-sm font-semibold text-surface">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-5">
                  <p>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-terracotta hover:underline">
                      Repo
                    </a>
                  </p>
                  {project.demoUrl && (
                    <p>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-terracotta hover:underline">
                        Live-demo
                      </a>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact">Kontakt</section>
      </main>

      <footer>
        <p>© 2026 Isabelle Reynolds</p>
      </footer>
    </>
  )
}

export default App
