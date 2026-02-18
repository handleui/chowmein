# Chowmein

Turborepo monorepo with bun. Apps: `web`, `studio` (Fumadocs). Packages: `ui`, `tailwind-config`, `typescript-config`.

## Commands

- `bun run dev` — start all apps
- `bun run build` — build all packages/apps
- `bun run check-types` — typecheck across workspaces
- `bun x ultracite fix` — format and lint (Biome)
- `bun x ultracite check` — check without fixing

IMPORTANT: Always run `bun x ultracite fix` before committing. Lefthook runs it via lint-staged on pre-commit.

## Code Style

Biome handles formatting and most lint rules. Only project-specific deviations listed here:

- Prefer `unknown` over `any`
- Use `for...of` over `.forEach()`
- No barrel files (index re-exports)
- React 19+: use ref as a prop, not `React.forwardRef`
- Next.js: use `<Image>`, App Router metadata API, Server Components for data fetching

## Architecture

- Shared UI components go in `packages/ui`
- Tailwind config is centralized in `packages/tailwind-config`
- TypeScript config is centralized in `packages/typescript-config`
- Each app has its own `next.config` and local dependencies

## Library Documentation — Context7

When working with any external library or dependency, use the **Context7 MCP** to get up-to-date docs and code examples:

1. `resolve-library-id` — find the Context7 library ID for the package
2. `query-docs` — ask specific questions against that library's documentation

This gives you accurate, current documentation instead of relying on training data. Use it for API usage, migration guides, configuration options, etc.

## Research & External Code — Nia MCP

Nia is a powerful set of tools for indexing and searching external repos, docs, and packages. Use it **selectively**:

- **Good uses**: exploring a specific GitHub repo's source code, searching indexed documentation, reading files from a remote codebase, deep research on a focused topic
- **Bad uses**: indexing every dependency, using it as a general web browser, running research for things a quick Context7 query or code read would answer

Before reaching for Nia, ask: "Can Context7 or a direct file read answer this?" If yes, use those instead. Nia shines when you need to explore unfamiliar codebases or do targeted cross-repo research — not as a first resort for every question.

## Compact Instructions

When compacting, preserve: list of modified files, current task context, and test/build command outputs.
