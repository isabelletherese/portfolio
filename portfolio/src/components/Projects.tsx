import type { Filter } from '../types'
import { projects } from '../data/projects'
import { useState } from 'react'
import Filters from './Filters'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<Filter>('Alla')

  const filteredProjects =
    selectedTag === 'Alla'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag))

  return (
    <section id="projects" className="section-padding">
      <div className="container-page">
        <h2 className="text-forest">Projekt</h2>
        <p className="text-ink-soft">
          Ett urval av skolprojekt.
          <span className="block md:inline">
            {' '}
            Välj en teknik för att filtrera.
          </span>
        </p>
        <Filters selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <p className="text-ink-soft">
          Visar {filteredProjects.length} projekt av {projects.length}
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
