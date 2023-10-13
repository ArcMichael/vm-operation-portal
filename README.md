This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Adjustments to Docker Compose Configuration

For Single Sign-On (SSO), we need to utilize **Keycloak**. Currently, it points to `sso.mly0110.org.cn`. Given the requirement for public DNS, the Docker Compose configuration should:

- Modify the DNS to point towards the router, rather than **BIND9**.

Additionally, since `pnpm install` requires access to **Nexus**:

- The Docker Compose configuration should update the hosts to direct `registry` to the internal Nexus address.

## Code Conventions: Naming Rules

To ensure clarity and consistency across the codebase, it's essential to follow strict naming conventions. Here are some basic guidelines:

- **Files**: Use kebab-case (e.g., `header-smc-collapsible.tsx`, `content-brandcrumb.tsx`).
- **Variables**: Use camelCase (e.g., `userName`, `userProfile`).
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `MAX_LIMIT`, `API_ENDPOINT`).
- **Functions/Methods**: Use camelCase, starting with a verb (e.g., `getUserData()`, `setUserProfile()`).
- **Classes/Interfaces**: Use PascalCase (e.g., `UserProfile`, `UserSettingsInterface`).

By adhering to these naming conventions, the code remains readable and easier for team collaboration.
