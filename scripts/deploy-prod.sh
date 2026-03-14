#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"

echo "Deploying one-percent-better-poker-site from $FRONTEND_DIR"
cd "$FRONTEND_DIR"
vercel deploy --prod --yes
