---
description: Generate a new shared React component for the Supabase monorepo
mode: agent
---

# Generate a Shared React Component

You are working in the Supabase monorepo, which uses Turborepo to manage multiple apps and shared packages. Shared UI components live in `/packages/ui` and are used across apps in `/apps`.

## Instructions
- Create the new component in `/packages/ui/src/components/`.
- Use TypeScript and follow the existing code style.
- Export the component from the main `index.ts` in `/packages/ui/src/components/`.
- Add a simple Storybook story if Storybook is set up in the package.
- If the component requires styles, use the existing styling approach (e.g., Tailwind, CSS modules).
- Update or create a README section for the new component if documentation exists.

## Example Usage
```tsx
import { MyComponent } from '@supabase/ui'
```

## Variables
- `${componentName}`: The name of the new component (PascalCase)
- `${description}`: Short description of what the component does

## Task
Generate a new shared React component named `${componentName}`. ${description}

After generating, list any files you created or modified.
