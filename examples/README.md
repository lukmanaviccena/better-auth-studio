# Examples

This directory contains example projects demonstrating Better Auth Studio integration with different frameworks and ORMs.

## Available Examples

### Next.js Examples

#### Prisma Example
- **Location**: `nextjs/prisma/`
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Framework**: Next.js

#### Drizzle Example
- **Location**: `nextjs/drizzle/`
- **ORM**: Drizzle
- **Database**: PostgreSQL
- **Framework**: Next.js

### SvelteKit Examples

#### Drizzle Example
- **Location**: `svelte/drizzle/`
- **ORM**: Drizzle
- **Database**: PostgreSQL
- **Framework**: SvelteKit

#### Prisma Example
- **Location**: `svelte/prisma/`
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Framework**: SvelteKit

## Running Examples

Each example has its own README with specific setup instructions. Generally:

1. Navigate to the example directory
2. Install dependencies: `pnpm install`
3. Set up environment variables (`.env` file)
4. Run database migrations
5. Start the development server
6. Open Better Auth Studio

## Database Setup

All examples use PostgreSQL. Make sure you have:
- A PostgreSQL database instance
- The `DATABASE_URL` environment variable configured
- Database migrations run (`pnpm db:push` or `pnpm db:migrate`)

## Better Auth Studio

To open Better Auth Studio for any example:

```bash
pnpm studio
```

Studio will be available at `http://localhost:3000` by default.

