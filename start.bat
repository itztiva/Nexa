@echo off
bun install >nul 2>&1

if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    exit /b %errorlevel%
)

bun run src/index.ts
