import { useState } from 'react'
import Navbar from './components/Navbar'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import Filters from './components/Filters'
import type { Filter } from './types'

function App() {
  const [selectedTag, setSelectedTag] = useState<Filter>('Alla')

  const filteredProjects =
    selectedTag === 'Alla'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag))

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
              {' '}
              Välj en teknik för att filtrera.
            </span>
          </p>
          <Filters selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          <p className="mb-6 px-4 text-base md:text-lg font-sans text-ink-soft">
            Visar {filteredProjects.length} projekt av {projects.length}
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
