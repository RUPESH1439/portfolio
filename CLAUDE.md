# CLAUDE.md

Personal portfolio site for Rupesh Shrestha. Next.js (Pages Router), statically
prerendered, deployed on Vercel. There is no backend apart from the EmailJS call
on the contact form.

## Commands

Use **npm** only. `package-lock.json` is the single lockfile, so don't add `yarn.lock` or `pnpm-lock.yaml`.

| Task                   | Command                |
| ---------------------- | ---------------------- |
| Dev server (Turbopack) | `npm run dev`          |
| Production build       | `npm run build`        |
| Serve production build | `npm start`            |
| Lint (ESLint flat cfg) | `npm run lint`         |
| Type-check             | `npm run typecheck`    |
| Format all files       | `npm run format`       |
| Check formatting       | `npm run format:check` |

**Before you call a change done**, run `npm run typecheck && npm run lint && npm run build`.
All three must pass with zero errors. There is no test suite. For UI changes, also check
the page in a browser at desktop (≥1440px) and mobile (375px) widths, and confirm the
console shows no hydration errors.

Node: `>=20.9.0` (Next 16 requirement). Local development uses Node 22.

## Stack

| Area      | Choice                                                           | Notes                                                                                                                 |
| --------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Framework | Next.js 16, **Pages Router** (`src/pages`)                       | Do not add an `app/` directory or mix in the App Router.                                                              |
| UI        | React 19                                                         | React Compiler lint rules are on (`react-hooks/*`).                                                                   |
| Language  | TypeScript 6 (`strict`)                                          | Pinned below 6.1 because `typescript-eslint` doesn't support newer versions yet.                                      |
| Styling   | Tailwind CSS v4 (CSS-first, `@tailwindcss/postcss`)              | There is no `tailwind.config.js`. Design tokens live in `src/styles/globals.css`.                                     |
| Animation | `@react-spring/web` v10                                          | Imperative `useSpring(() => …, [])` + `api.start` pattern.                                                            |
| Icons     | `react-icons` v5                                                 | Import from the specific pack, e.g. `react-icons/fi`.                                                                 |
| Email     | `@emailjs/browser` v5                                            | The public key and service/template IDs are hardcoded in `ContactMe.tsx`. EmailJS public keys are meant to be public. |
| Lint      | ESLint 9 + `eslint-config-next` (flat config)                    | Pinned to ESLint 9 because `eslint-plugin-react`, `-import` and `-jsx-a11y` don't support ESLint 10 yet.              |
| Format    | Prettier 3: 4 spaces, single quotes, semicolons, trailing commas | Config: `.prettierrc.json`.                                                                                           |
| Git hooks | Husky 9 + lint-staged 16                                         | The pre-commit hook runs `eslint --fix` and `prettier --write` on staged files.                                       |

## Project structure

```
src/
  pages/                  # Routes (Pages Router)
    _app.tsx              # Global CSS import, <Head>, wraps every page in Layout
    index.tsx             # Home: Carousel of Hero / About / Projects / Contact sections
    about.tsx  projects.tsx  contactMe.tsx
    api/hello.ts          # Unused create-next-app boilerplate
  components/
    <Feature>/            # One folder per feature: Feature.tsx + index.ts barrel
      Feature.tsx
      index.ts            # `import X from './X'; export { X };`
    UI/                   # Shared primitives (Button, Link, TextInput, TextArea, BackDrop, …)
    Layout.tsx            # Page shell: background glow + NavBar
    index.ts              # Top-level barrel re-exporting feature components
  hooks/                  # Custom hooks (default export, `use*` filename)
  utils/                  # Pure helpers, re-exported from utils/index.ts
  cssClasses/             # Reusable Tailwind class strings (hoverText, hoverTranslate)
  text/en.ts              # Hero copy
  constants.ts            # External URLs
  styles/globals.css      # Tailwind import, @theme tokens, @utility, global CSS
public/                   # Static assets: project screenshots, Resume.pdf, favicon
```

**Where the content lives** (edit these to update the portfolio):

- Projects: the `projects` array in `src/components/Projects/HighlightedProjects.tsx`. Put screenshots in `public/`.
- Skills: the `skillSections` array in `src/components/Skills/Skills.tsx`.
- About text and career start date: `src/components/AboutMe/AboutMe.tsx`. Years of experience is computed from `workStartDate`.
- Hero copy: `src/text/en.ts` and `src/components/HeroSection/HeroSection.tsx`.
- Social links: `src/components/SocialMediaLinks/SocialMediaLinks.tsx`.
- Resume: replace `public/Resume.pdf`.

## Conventions

### Components

- Write function components typed as `FunctionComponent<Props>`, with a `default`
  export from the component file and a named re-export from the folder's `index.ts`.
- If a component takes no props, use `FunctionComponent` without a generic. Don't
  declare an empty `interface XProps {}` (`no-empty-object-type` fails).
- Import across folders with the `@/` alias (`@/components/...`, `@/utils`). Use relative
  imports only within the same feature folder.
- Ref props are named `_ref` and typed `RefObject<T | null>`. `MutableRefObject` is
  deprecated in React 19.
- Don't use `any`. Type component maps with `ComponentType<Props>`.
- Keys must be stable. Never generate keys with `uuid()`/`Math.random()` during render.
- Add new pages as a file in `src/pages/`. Keep the page thin and put the UI in `src/components/`.

### React 19 / React Compiler rules (enforced by lint)

- Don't read `ref.current` during render or in dependency arrays. Read it in effects or event handlers.
- Don't call `setState` synchronously inside `useEffect`/`useLayoutEffect`. Derive the value instead.
- Never nest interactive elements: no `<a>` inside `<a>`, no `<button>` inside `<button>`.
  React 19 turns invalid nesting into a hydration failure.
- Keep render output deterministic between server and client: no `Date.now()`, `Math.random()`
  or `window` checks in render.
- `reactStrictMode` stays off in `next.config.ts`. The imperative react-spring animations
  in `Carousel`, `Button` and `NavMenuSection` stall under StrictMode's double effects, so
  enable it only after reworking them.

### Styling (Tailwind v4)

- Define design tokens only in the `@theme` block of `globals.css`. The default palette is
  **replaced** (`--color-*: initial`), so only the project colors exist: `primary`, `secondary`,
  `background`, `gray`, `white`, `purple-*`, `blue-*`, `orange-*`, etc. Don't use stock
  Tailwind colors like `blue-500`. Add a token first.
- Set color opacity with the slash modifier: `text-gray/70`, `border-primary/40`,
  `hover:bg-primary/80`. The v3 utilities `text-opacity-*`, `bg-opacity-*` and
  `border-opacity-*` **no longer exist** and fail silently.
- Use the v4 names: `bg-linear-to-*` (not `bg-gradient-to-*`), `shadow-xs`/`rounded-xs`/`blur-xs`
  (the old unsuffixed sizes moved down one step), `grow`/`shrink`, `z-5` (not `z-[5]`).
- Declare custom utilities with `@utility` in `globals.css` (see `scrollbar-hide`). Don't use JS plugins.
- Put reusable class combinations in `src/cssClasses/`. Use template-literal `className` for
  conditional classes.
- Mobile first: base classes target mobile, and `md:`/`lg:`/`2xl:` handle larger screens.

### Dependencies

- Check upgrades with `npm outdated`. Before bumping a major version, check its peer
  ranges with `npm view <pkg>@<ver> peerDependencies`.
- Pins to keep until upstream catches up: `eslint@^9`, `typescript@~6.0`, and
  `lint-staged@^16` (v17 needs Node ≥22.22). `@types/node` follows the Node major (22).
- Runtime packages go in `dependencies`. Types, linters, build tooling and Tailwind go in `devDependencies`.
- Keep `npm audit` at 0 vulnerabilities.

### Git

- Branch off `main` and open PRs into `main`.
- Use Conventional Commit prefixes: `feat:`, `fix:`, `chore:`, `refactor:`.
- Don't bypass the pre-commit hook (`--no-verify`).

## Known issues / tech debt

These were found in the audit and left unfixed on purpose. Fix them deliberately, not as drive-bys:

- `HighlightedProjectCard`: the whole card is one external link, and the "View Code" / "View Live"
  `<button>`s inside it do nothing. "View Live" should point to `demoUrl`.
- `SocialMediaLinks`: the email entry links to the placeholder `'test'`.
- `ContactMe`: no validation, success or error feedback, and the form isn't cleared after a
  send. Errors only go to `console.log`.
- `NavBarSection` uses the relative `href="projects"` (it should be `/projects`).
- `Projects.tsx` / `ProjectCard.tsx` are unused legacy components. `pages/api/hello.ts` and
  the `images.unsplash.com` remote pattern are unused boilerplate.
- `next/navigation` hooks are used inside Pages Router components. This works, but
  `next/router` is the idiomatic choice for the Pages Router.
- The fonts `Graphik` / `Merriweather` are declared but never loaded, so the system sans-serif renders.
  Use `next/font` if you want them.
- The README is stale `create-next-app` boilerplate.
