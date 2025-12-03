# Better Auth Express MongoDB Example

This example demonstrates how to use Better Auth with Express.js and MongoDB.

## Prerequisites

- Node.js 18+ 
- MongoDB running locally or a MongoDB connection string
- pnpm (recommended) or npm/yarn

## Installation

### Option 1: Install from the root workspace (Recommended)

From the root of the `better-auth-studio` repository:

```bash
pnpm install
```

This will install all dependencies for all examples in the workspace.

### Option 2: Install individually

Navigate to this directory and install:

```bash
cd examples/express/mongodb
pnpm install
```

## Setup

1. **Copy the environment file:**

```bash
cp env.example .env
```

2. **Configure your MongoDB connection:**

Edit `.env` and set your MongoDB connection string:

```env
MONGODB_URI=mongodb://127.0.0.1:27017
# Or use MONGO_URI (both are supported)
# MONGO_URI=mongodb://127.0.0.1:27017
MONGODB_DB_NAME=better-auth

BETTER_AUTH_URL=http://localhost:3000
AUTH_SECRET=your-secret-key-change-this-in-production

# Optional: Social providers
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
```

3. **Start MongoDB:**

Make sure MongoDB is running locally:

```bash
# macOS (using Homebrew)
brew services start mongodb-community

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or use MongoDB Atlas connection string
```

## Running the Example

### Development Mode

```bash
pnpm dev
```

The server will start on `http://localhost:3000`.

### Production Build

```bash
pnpm build
pnpm start
```

## Using Better Auth Studio

**Important:** MongoDB must be running before starting Better Auth Studio.

```bash
pnpm studio:dev --watch --config ./src/auth.ts
```

Better Auth Studio will be available at `http://localhost:3002` (or the port you specify).

## Project Structure

```
examples/express/mongodb/
├── src/
│   ├── auth.ts          # Better Auth configuration
│   ├── db.ts            # MongoDB connection setup
│   └── index.ts         # Express server entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Key Features

- ✅ Express.js server setup
- ✅ MongoDB adapter for Better Auth
- ✅ Email/Password authentication
- ✅ Social providers (GitHub, Google, Discord)
- ✅ Organization plugin with teams
- ✅ Admin plugin
- ✅ Session management
- ✅ Rate limiting

## Database Connection

The example uses a simple MongoDB connection pattern:

```typescript
const mongodb = new MongoClient(MONGODB_URI).db(DB_NAME);
```

The connection is established automatically when first accessed. For Better Auth Studio, ensure MongoDB is running before starting the studio.

## Troubleshooting

### "Database not connected" error

Make sure MongoDB is running before starting Better Auth Studio:

```bash
# Check if MongoDB is running
mongosh --eval "db.version()"

# Or check Docker container
docker ps | grep mongo
```

### Connection string issues

- For local MongoDB: `mongodb://127.0.0.1:27017`
- For MongoDB Atlas: Use the connection string from your Atlas dashboard
- For Docker: `mongodb://localhost:27017` (if using port mapping)

## Learn More

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/)

