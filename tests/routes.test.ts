import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createRoutes } from '../src/routes';
import type { AuthConfig } from '../src/config';
import express from 'express';
import request from 'supertest';

describe('Routes', () => {
  let app: express.Application;

  beforeEach(() => {
    const mockAuthConfig: AuthConfig = {
      database: {
        adapter: 'prisma',
        provider: 'postgresql',
      },
      baseURL: 'http://localhost:3000',
      basePath: '/api/auth',
    };

    app = express();
    app.use(express.json());
    app.use(createRoutes(mockAuthConfig));
  });

  afterEach(() => {
    // Cleanup if needed
  });

  it('should register health check endpoint', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);

    expect(response.body).toHaveProperty('success');
  });

  it('should register config endpoint', async () => {
    const response = await request(app)
      .get('/api/config')
      .expect(200);

    expect(response.body).toBeDefined();
  });

  it('should handle database schema endpoint', async () => {
    const response = await request(app)
      .get('/api/database/schema')
      .expect(200);

    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should handle users endpoint', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);

    expect(response.body).toBeDefined();
  });

  it('should handle organizations endpoint', async () => {
    const response = await request(app)
      .get('/api/organizations')
      .expect(200);

    expect(response.body).toBeDefined();
  });

  it('should return 404 for unknown routes', async () => {
    await request(app)
      .get('/api/unknown-route')
      .expect(404);
  });

  it('should handle CORS correctly', async () => {
    const response = await request(app)
      .get('/api/config')
      .set('Origin', 'http://localhost:3000')
      .expect(200);

    // CORS headers should be present
    expect(response.headers['access-control-allow-origin']).toBeDefined();
  });
});
