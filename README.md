# Portfolio

## Om projektet

Inlämningsuppgift där jag byggde en personlig portfolio som en React-baserad single page application. Sidan presenterar mig, min bakgrund och utbildning samt sex projekt som kan filtreras efter teknik. Webbplatsen är responsiv och anpassad för skärmar från 360 px upp till desktop.

**Live-sida:** [portfolio-isabellereynolds.vercel.app](https://portfolio-isabellereynolds.vercel.app/)

**Design:** [Figma-skiss (mobil, tablet och desktop)](https://www.figma.com/proto/9HcjT32lls5H7nsfpZqPCG/Portfolio?node-id=0-1&t=uTTszBWChDCecVko-1)

## Teknik

**💻 Utveckling**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**🎨 Design**

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

**🛠️ Verktyg**

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)

**🚀 Versionshantering & driftsättning**

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Funktioner

- Single page-layout med sektionerna Hem, Om mig, Projekt och Kontakt samt ankarnavigation mellan dem
- Responsiv mobilmeny som låser sidans scroll när den är öppen
- Projektkort som renderas från en separat datafil med `.map()` och `key`
- Filtrering på teknik, där den filtrerade listan räknas fram vid rendering i stället för att sparas i state
- Delade layoutklasser (`section-padding`, `container-page`) för enhetliga avstånd i alla sektioner

## Skärmdumpar

**Desktop**
<img src="src/assets/img_portfolio.webp">

**Tablet**
<img src="src/assets/img_portfolio_tablet.webp">

**Mobil**
<img src="src/assets/img_portfolio-mobile.webp">

## Tillgänglighet

**Desktop**
<img src="src/assets/lighthouse_desktop.png">

**Mobil**
<img src="src/assets/lighthouse_mobile.png">

## Köra projektet lokalt

För att köra projektet lokalt behöver du ha Node.js och npm installerat. Använd en Node.js-version som stöds av Vite 8.

### 1. Klona repot

```bash
git clone https://github.com/isabelletherese/portfolio.git
cd portfolio
```

### 2. Installera beroenden

```bash
npm install
```

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna adressen som visas i terminalen i din webbläsare. Som standard är det `http://localhost:5173`.

### Tillgängliga script

| Kommando          | Beskrivning                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Startar utvecklingsservern.                                        |
| `npm run build`   | Kontrollerar TypeScript-koden och bygger projektet för produktion. |
| `npm run preview` | Förhandsvisar produktionsbygget lokalt.                            |
| `npm run lint`    | Kontrollerar koden med ESLint.                                     |
| `npm run format`  | Formaterar filerna i `src` med Prettier.                           |

## Projektstruktur

```
src/
├── components/   # Navbar, Hero, About, Projects, Filters, ProjectCard, Contact, Footer
├── data/         # projects.ts – projektdata och filtertaggar
├── assets/       # bilder
├── types.ts      # delade typer (Project, Filter)
└── index.css     # Tailwind-tema, basstilar och delade klasser
```

## Ändringar mot Figma-skissen

- Lagt till fler filterknappar för att göra det möjligt att filtrera projekten efter fler tekniker.

- Ökat knapparnas storlek för att förbättra användbarheten och tillgängligheten.

- Justerade färgerna på rubrikerna i kontaktsektionen för att förbättra kontrasten och det visuella uttrycket.

- Ökade textstorleken och använde en kraftigare textvikt för att förbättra läsbarheten.
