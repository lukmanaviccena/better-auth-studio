# Better Auth - SvelteKit Example

This is a SvelteKit example project demonstrating Better Auth integration with Prisma ORM and PostgreSQL.

## Features

- **SvelteKit** - Modern web framework
- **Better Auth** - Authentication library
- **Prisma** - TypeScript ORM
- **PostgreSQL** - Database

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

The `.env` file is already configured with the PostgreSQL database URL. Make sure to add your OAuth credentials if needed.

3. Generate Prisma Client:

```bash
pnpm db:generate
```

4. Run database migrations:

```bash
pnpm db:push
```

5. Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

6. Open Better Auth Studio:

```bash
pnpm studio
```

Better Auth Studio will be available at `http://localhost:3000`

## Project Structure

```
src/
├── lib/
│   ├── auth.ts          # Better Auth configuration
│   ├── auth-client.ts   # Client-side auth utilities
│   └── db/
│       └── index.ts     # Prisma client instance
├── generated/
│   └── prisma/          # Generated Prisma Client
prisma/
└── schema.prisma        # Prisma schema definitions
└── routes/
    ├── auth/
    │   └── +page.svelte        # Auth page
    └── +page.svelte            # Home page
```

## Database

This example uses PostgreSQL. The `DATABASE_URL` is configured in `.env`.

## Better Auth Studio

Run `pnpm studio` to open Better Auth Studio and manage your authentication setup.

