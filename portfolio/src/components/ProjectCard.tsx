import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-3xl border border-line bg-surface p-4 flex flex-col gap-4">
      <img
        src={project.image}
        alt={project.title}
        className="h-auto aspect-16/10 w-full rounded-2xl object-cover"
      />
      <h3 className="text-xl font-semibold font-display text-forest-dark">
        {project.title}
      </h3>
      <p className="text-base md:text-lg text-ink-soft">
        {project.description}
      </p>
      <div className="mt-auto flex flex-col gap-4">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-forest px-3 py-1 text-sm font-semibold text-surface">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-terracotta hover:underline">
            Repo
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-terracotta hover:underline">
              Live-demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
