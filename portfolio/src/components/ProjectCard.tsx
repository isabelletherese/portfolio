import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
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
  )
}

export default ProjectCard
