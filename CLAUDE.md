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
| Animation | CSS transitions and keyframes (`globals.css`)                    | `@react-spring/web` is still installed but no longer imported anywhere.                                               |
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

- Projects: the `projects` array in `src/components/Projects/HighlightedProjects.tsx`. Put screenshots in
  `public/` and import them at the top of that file (`img: myImg`), so Next.js knows their size and
  can round their corners and blur them in. Set `wideImage: true` for landscape screenshots.
- Home slides: the `sections` array in `src/pages/index.tsx` (the `key` is the URL hash, e.g. `/#work`).
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
- `reactStrictMode` stays off in `next.config.ts`. It was disabled because imperative
  react-spring animations stalled under StrictMode's double effects. No component uses
  react-spring any more (motion is CSS), so it can be re-enabled after a quick check.

### Styling (Tailwind v4)

- Define design tokens only in the `@theme` block of `globals.css`. The default palette is
  **replaced** (`--color-*: initial`), so only the project colors exist. The theme is light:
  cobalt ink on ice. Tokens are named by role, not hue: `primary` (cobalt accent) with
  `primary-hover`/`primary-active`/`on-primary`, `background` (ice), `surface` (raised panels,
  form fields), `tint` (quiet cobalt wash), text from darkest to lightest `ink` (headings),
  `slate` (running text) and `muted` (secondary text), `haze` (hairlines), `lilac`/`periwinkle`
  (ambient glow), and `red`/`green` for status. Don't use stock Tailwind colors like
  `blue-500`. Add a token first. To change the palette, edit only these values.
- For quiet text use `text-muted`, not a low opacity: on the light background `text-slate`
  below about /70 fails WCAG AA contrast.
- Set color opacity with the slash modifier: `text-slate/80`, `border-primary/40`,
  `hover:bg-primary/80`. The v3 utilities `text-opacity-*`, `bg-opacity-*` and
  `border-opacity-*` **no longer exist** and fail silently.
- Use the v4 names: `bg-linear-to-*` (not `bg-gradient-to-*`), `shadow-xs`/`rounded-xs`/`blur-xs`
  (the old unsuffixed sizes moved down one step), `grow`/`shrink`, `z-5` (not `z-[5]`).
- Declare custom utilities with `@utility` in `globals.css` (see `scrollbar-hide`). Don't use JS plugins.
- The whole site uses one family, Courier Prime (400 and 700), loaded through `next/font` in
  `_app.tsx`. Hierarchy comes from size and weight only. In monospace `1ch` is exactly one
  character, so `max-w-[NNch]` is a true line length (keep reading text under ~65ch).
- **Typography uses the type scale only.** Every piece of text gets exactly one `type-*` role from
  `globals.css`: `type-display` (hero name, sized to its `@container`), `type-subtitle` (hero
  role line), `type-title` (h2), `type-heading` (h3), `type-wordmark`, `type-nav` (header links), `type-menu` (menu drawer links),
  `type-button`, `type-lede`, `type-body`, `type-small`, `type-ui` (tabs, rail, list items),
  `type-label` (h4, form labels) and `type-caption` (tags, counters, errors). Set color
  separately with `text-*`. Don't add `text-sm`/`font-bold`/`leading-*`/`font-mono` etc. for
  text. If a new role is needed, add it to the scale. Utilities reference fonts with
  `--theme(--font-…)`, because `@theme inline` doesn't emit the font variables at runtime.
- Motion: the hero name typing itself out on load (pure CSS, `--chars` = name length) is the
  page's one orchestrated moment. Other motion only answers user actions (slide paging, tab swaps). `prefers-reduced-motion` is honored globally.
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

- `Projects.tsx` / `ProjectCard.tsx` are unused legacy components. `pages/api/hello.ts` and
  the `images.unsplash.com` remote pattern are unused boilerplate.
- There is no public email link. The old placeholder was removed from `SocialMediaLinks`. Add a
  `mailto:` entry there if you want one.
- The README is stale `create-next-app` boilerplate.
