#!/bin/bash

# Better Auth Studio Startup Script
# This script sets up environment variables and starts the studio

echo "🚀 Starting Better Auth Studio..."

# Set dummy GitHub OAuth credentials to prevent warnings
export GITHUB_CLIENT_ID="dummy_github_client_id_for_testing"
export GITHUB_CLIENT_SECRET="dummy_github_client_secret_for_testing"
export AUTH_SECRET="better-auth-secret-123456789"

# Check if port is provided as argument
if [ $# -eq 0 ]; then
    PORT=3000
else
    PORT=$1
fi

echo "📡 Starting on port: $PORT"
echo "🔧 Using test configuration (GitHub OAuth disabled)"

# Start the studio
echo "🔧 Starting Better Auth Studio with environment variables..."
better-auth-studio start --port "$PORT"
