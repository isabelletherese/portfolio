export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl: string
  demoUrl: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Webbshop',
    description:
      'Responsiv webbshop där man kan utforska, filtrera och sortera produkter. Hanterar en varukorg med rabattkod och slutför en beställning med validerade formulär.',
    image: '',
    tags: ['JavaScript', 'HTML', 'SCSS'],
    repoUrl: 'https://github.com/isabelletherese/fed25d-inl-webbshop',
    demoUrl: 'https://isabelletherese.github.io/fed25d-inl-webbshop/',
  },
  {
    id: 2,
    title: 'Enkel budgetapp',
    description:
      'Enkel budgetapp där man lägger till och tar bort inkomster och utgifter. Totalsumman uppdateras automatiskt och datan sparas i localStorage.',
    image: '',
    tags: ['HTML', 'SCSS', 'JavaScript', 'TypeScript'],
    repoUrl: 'https://github.com/isabelletherese/fed25d-inl-budget-app',
    demoUrl: 'https://isabelletherese.github.io/fed25d-inl-budget-app/',
  },
  {
    id: 3,
    title: 'Golden Arches Perfumerie',
    description:
      'Gruppprojekt: en responsiv sajt för ett fiktivt lyxparfymmärke, byggd efter en annan grupps design. Med mobilmeny, scrollanimationer i GSAP och interaktiva produktkort.',
    image: '',
    tags: ['HTML', 'SCSS', 'TypeScript'],
    repoUrl:
      'https://github.com/isabelletherese/fed25d-inl-golden-arches-perfumerie',
    demoUrl:
      'https://isabelletherese.github.io/fed25d-inl-golden-arches-perfumerie/',
  },
  {
    id: 4,
    title: 'E-shop API',
    description:
      'REST-API för en produktkatalog, byggt med Express och TypeScript och kopplat till en normaliserad MySQL-databas.',
    image: '',
    tags: ['Node.js', 'TypeScript', 'MySQL'],
    repoUrl: 'https://github.com/isabelletherese/fed25d-inl-rest-api',
    demoUrl: null,
  },
  {
    id: 5,
    title: 'Bok-API',
    description:
      'Fullstack-gruppprojekt: REST-API för böcker och recensioner med klient. Jag ansvarade för användarhantering, inloggning med JWT och hashade lösenord samt adminpanelen för användare.',
    image: '',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'HTML'],
    repoUrl: 'https://github.com/isabelletherese/book-api',
    demoUrl: 'https://gruppuppgift-api-utveckling.vercel.app/',
  },
  {
    id: 6,
    title: 'Portfolio',
    description:
      'Min personliga portfolio, byggd som en single page-app med React, TypeScript och Tailwind CSS, med projektfilter och responsiv design.',
    image: '',
    tags: ['React', 'TypeScript'],
    repoUrl: 'https://github.com/isabelletherese/portfolio',
    demoUrl: null,
  },
]
