# React Practice Projects

A collection of 12 small React apps built to practice core React concepts, from `useState` basics to the Context API.

![React](https://img.shields.io/badge/React-16-61DAFB?logo=react&logoColor=white)

## About

Built in 2022 as a learning project while working through John Smilga's React projects course. Each folder is a standalone Create React App project focused on one or two React concepts. Some later projects from the same course live in their own repositories (see [More Projects](#more-projects)).

## Projects

| # | Project | Folder | Concepts | What it does |
| --- | --- | --- | --- | --- |
| 1 | Birthday Reminder | `birthday-reminder` | `useState` | Lists today's birthdays with a count and a "clear all" button |
| 2 | Tours | `Tours` | `useEffect`, fetch, conditional rendering | Loads tours from an API, "read more" toggle, remove a tour, refresh |
| 3 | Reviews | `Reviews` | `useState` | Review carousel with prev/next and "surprise me" random person |
| 4 | Accordion | `Accordion` | `useState` | FAQ questions that expand/collapse |
| 5 | Menu | `Menu` | `useState`, `Set` | Food menu with category filter buttons generated from the data |
| 6 | Tabs | `Tabs` | `useEffect`, fetch | Job experience tabs loaded from an API |
| 7 | Slider | `Slider` | `useEffect`, `setInterval` | Auto-playing testimonial slider (3s) with prev/next |
| 8 | Lorem Ipsum Generator | `Lorem` | Forms | Generates the requested number of paragraphs |
| 9 | Color Generator | `Color Generator` | Forms, `values.js` | Generates tints and shades from a hex color, click to copy |
| 10 | Grocery Bud | `Grocery Bud` | Forms, `localStorage` | Grocery list with add, edit, delete, clear and alerts |
| 11 | Navbar | `Navbar` | `useRef` | Responsive navbar with animated link toggle and social icons |
| 12 | Sidebar and Modal | `Sidebar Modal` | `useContext` | Sidebar and modal controlled from a shared context |

## Tech Stack

- React 16 (Create React App) in every project
- React Icons (most projects)
- `values.js` (Color Generator)
- Public course APIs for Tours and Tabs

## Getting Started

Prerequisites: Node.js and npm. Each project is installed and run on its own:

```bash
git clone https://github.com/coderasraf/react-projects.git
cd "react-projects/Grocery Bud"   # or any other project folder
npm install
npm start                          # http://localhost:3000
```

Use quotes around folder names that contain spaces.

## Project Structure

```text
react-projects/
├── birthday-reminder/
├── Tours/
├── Reviews/
├── Accordion/
├── Menu/
├── Tabs/
├── Slider/
├── Lorem/
├── Color Generator/
├── Grocery Bud/
├── Navbar/
└── Sidebar Modal/      # each: public/, src/, package.json
```

## More Projects

Other projects from the same practice series, in separate repositories:

- [Markdown-App](https://github.com/coderasraf/Markdown-App)
- [Random-UserAPI](https://github.com/coderasraf/Random-UserAPI)
- [React-Pagination](https://github.com/coderasraf/React-Pagination)
- [stock-photos-react](https://github.com/coderasraf/stock-photos-react)
- [TheCocktailDB](https://github.com/coderasraf/TheCocktailDB)

## Author

Built by **Ashraf Siddik**, Shopify developer & CRO specialist.
- Website: [ashraf-siddik.com](https://ashraf-siddik.com)
- GitHub: [@coderasraf](https://github.com/coderasraf)
