const express = require('express');
const cors = require('cors');
const { getAuthAdapter, createMockUser, createMockSession, createMockAccount, createMockVerification } = require('../dist/auth-adapter.js');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Test server running'
  });
});

// Seed users endpoint
app.post('/api/seed/users', async (req, res) => {
  try {
    const { count = 1 } = req.body;
    const adapter = await getAuthAdapter();
    
    if (!adapter) {
      return res.status(500).json({ error: 'Auth adapter not available' });
    }

    const results = [];
    for (let i = 0; i < count; i++) {
      try {
        const user = await createMockUser(adapter, i + 1);
        results.push({
          success: true,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            emailVerified: user.emailVerified,
            image: user.image,
            createdAt: user.createdAt
          }
        });
      } catch (error) {
        results.push({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    res.json({
      success: true,
      message: `Seeded ${results.filter(r => r.success).length} users`,
      results
    });
  } catch (error) {
    console.error('Error seeding users:', error);
    res.status(500).json({ error: 'Failed to seed users' });
  }
});

// Seed sessions endpoint
app.post('/api/seed/sessions', async (req, res) => {
  try {
    const { count = 1 } = req.body;
    const adapter = await getAuthAdapter();
    
    if (!adapter) {
      return res.status(500).json({ error: 'Auth adapter not available' });
    }

    // First create a user if needed
    let user;
    try {
      user = await createMockUser(adapter, 1);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create user for session' });
    }

    const results = [];
    for (let i = 0; i < count; i++) {
      try {
        const session = await createMockSession(adapter, user.id, i + 1);
        results.push({
          success: true,
          session: {
            id: session.id,
            userId: session.userId,
            expires: session.expires,
            sessionToken: session.sessionToken,
            createdAt: session.createdAt
          }
        });
      } catch (error) {
        results.push({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    res.json({
      success: true,
      message: `Seeded ${results.filter(r => r.success).length} sessions`,
      results
    });
  } catch (error) {
    console.error('Error seeding sessions:', error);
    res.status(500).json({ error: 'Failed to seed sessions' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api`);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down test server...');
  process.exit(0);
});
