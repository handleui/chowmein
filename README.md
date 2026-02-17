# Chowmein

A Turborepo monorepo with [Tailwind CSS](https://tailwindcss.com/).

## What's inside?

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `studio`: a [Next.js](https://nextjs.org/) + [Fumadocs](https://fumadocs.vercel.app/) documentation app
- `@repo/ui`: a shared React component library with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/tailwind-config`: shared Tailwind CSS configuration
- `@repo/typescript-config`: shared `tsconfig.json` configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Ultracite](https://github.com/haydenbleasel/ultracite) (Biome) for linting and formatting
