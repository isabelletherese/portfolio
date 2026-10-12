import Navbar from './components/Navbar'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">Hem</section>
        <section id="about">Om mig</section>
        <section id="projects">
          <h2>Projekt</h2>
          <p>
            Ett urval av skol- och egna projekt. Välj en teknik för att
            filtrera.
          </p>
          {projects.map((project) => (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
              <p>{project.tags.join(', ')}</p>
              <p>
                Repo:{' '}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              {project.demoUrl && (
                <p>
                  Demo:{' '}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    Visa
                  </a>
                </p>
              )}
            </div>
          ))}
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
