@echo off
REM Better Auth Studio Startup Script for Windows
REM This script sets up environment variables and starts the studio

echo 🚀 Starting Better Auth Studio...

REM Set dummy GitHub OAuth credentials to prevent warnings
set GITHUB_CLIENT_ID=dummy_github_client_id_for_testing
set GITHUB_CLIENT_SECRET=dummy_github_client_secret_for_testing
set AUTH_SECRET=better-auth-secret-123456789

REM Check if port is provided as argument
if "%1"=="" (
    set PORT=3000
) else (
    set PORT=%1
)

echo 📡 Starting on port: %PORT%
echo 🔧 Using test configuration (GitHub OAuth disabled)

REM Start the studio
echo 🔧 Starting Better Auth Studio with environment variables...
better-auth-studio start --port %PORT%
