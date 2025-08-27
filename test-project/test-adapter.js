const { getAuthAdapter } = require('../dist/auth-adapter.js');

async function testAdapter() {
  console.log('Testing auth adapter...');
  
  try {
    const adapter = await getAuthAdapter();
    
    if (adapter) {
      console.log('✅ Adapter loaded successfully');
      
      // Test creating a user
      const user = await adapter.createUser({
        email: 'test@example.com',
        name: 'Test User',
        emailVerified: new Date()
      });
      
      console.log('✅ User created:', user);
      
      // Test creating a session
      const session = await adapter.createSession({
        userId: user.id,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sessionToken: 'test_session_token'
      });
      
      console.log('✅ Session created:', session);
      
    } else {
      console.log('❌ Failed to load adapter');
    }
  } catch (error) {
    console.error('❌ Error testing adapter:', error);
  }
}

testAdapter();
