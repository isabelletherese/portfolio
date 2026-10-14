export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl: string
  demoUrl: string | null
}

export type Filter =
  | 'Alla'
  | 'JavaScript'
  | 'HTML'
  | 'SCSS'
  | 'TypeScript'
  | 'Node.js'
  | 'MySQL'
  | 'MongoDB'
  | 'React'
