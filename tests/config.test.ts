import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { existsSync, writeFileSync, unlinkSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { findAuthConfig } from '../src/config';

describe('Config', () => {
  const testDir = join(process.cwd(), '.test-temp');
  const originalCwd = process.cwd();

  beforeEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
    mkdirSync(testDir, { recursive: true });
    process.chdir(testDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it('should find auth config in current directory', async () => {
    const authConfigContent = `
      import { betterAuth } from "better-auth";
      
      export const auth = betterAuth({
        secret: "test-secret",
        database: {
          adapter: "prisma",
          provider: "postgresql"
        }
      });
    `;
    
    writeFileSync(join(testDir, 'auth.ts'), authConfigContent);
    
    const config = await findAuthConfig('auth.ts');
    
    expect(config).toBeDefined();
    expect(config?.database?.adapter).toBe('prisma');
  });

  it('should return null for missing config file', async () => {
    const config = await findAuthConfig('non-existent-auth.ts');
    
    expect(config).toBeNull();
  });

  it('should handle invalid config file gracefully', async () => {
    writeFileSync(join(testDir, 'auth.ts'), 'invalid syntax here');
    
    const config = await findAuthConfig('auth.ts');
    
    // Should either return null or handle error gracefully
    expect(config === null || typeof config === 'object').toBe(true);
  });

  it('should find config in src directory', async () => {
    mkdirSync(join(testDir, 'src'), { recursive: true });
    
    const authConfigContent = `
      import { betterAuth } from "better-auth";
      
      export const auth = betterAuth({
        secret: "test-secret",
      });
    `;
    
    writeFileSync(join(testDir, 'src', 'auth.ts'), authConfigContent);
    
    const config = await findAuthConfig('src/auth.ts');
    
    expect(config).toBeDefined();
  });

  it('should handle config with social providers', async () => {
    const authConfigContent = `
      import { betterAuth } from "better-auth";
      
      export const auth = betterAuth({
        secret: "test-secret",
        socialProviders: {
          github: {
            clientId: "test-id",
            clientSecret: "test-secret"
          }
        }
      });
    `;
    
    writeFileSync(join(testDir, 'auth.ts'), authConfigContent);
    
    const config = await findAuthConfig('auth.ts');
    
    expect(config).toBeDefined();
    expect(config?.socialProviders).toBeDefined();
  });
});
