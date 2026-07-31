#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/www/wwwroot/ai-terminal-kb-repo}"
SITE_DIR="${SITE_DIR:-/www/wwwroot/w-shawn.cn}"
BRANCH="${BRANCH:-main}"
APP_NAME="${APP_NAME:-clink-ai-api}"
DATA_DIR="${PROJECT_DATA_DIR:-/www/wwwroot/w-shawn.cn-data}"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Repository not found: $REPO_DIR"
  echo "Clone it first, for example:"
  echo "git clone <your-github-repo-url> \"$REPO_DIR\""
  exit 1
fi

git -C "$REPO_DIR" fetch origin "$BRANCH"
git -C "$REPO_DIR" merge --ff-only "origin/$BRANCH"

mkdir -p "$SITE_DIR"
rsync -a --delete "$REPO_DIR/outputs/" "$SITE_DIR/"

if ! command -v pm2 >/dev/null 2>&1; then
  echo "PM2 is required. Install it in Baota first: npm install -g pm2"
  exit 1
fi

mkdir -p "$DATA_DIR"
pm2 startOrReload "$REPO_DIR/deploy/ecosystem.config.cjs" --only "$APP_NAME"
pm2 save

curl --fail --silent --show-error "http://127.0.0.1:8099/api/health" >/dev/null

echo "Deployed outputs/ to $SITE_DIR"
echo "Clink AI API is healthy on http://127.0.0.1:8099"
echo "Ensure deploy/nginx-api.conf is included in the w-shawn.cn Nginx site config."
