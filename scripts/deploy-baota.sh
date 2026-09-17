#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/www/wwwroot/ai-terminal-kb-repo}"
SITE_DIR="${SITE_DIR:-/www/wwwroot/w-shawn.cn}"
BRANCH="${BRANCH:-main}"
APP_NAME="${APP_NAME:-clink-ai-api}"
SYSTEMD_SERVICE="${SYSTEMD_SERVICE:-clink-ai-api.service}"
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

mkdir -p "$DATA_DIR"

if command -v pm2 >/dev/null 2>&1; then
  pm2 startOrReload "$REPO_DIR/deploy/ecosystem.config.cjs" --only "$APP_NAME"
  pm2 save
  echo "Restarted $APP_NAME with PM2"
elif command -v systemctl >/dev/null 2>&1 \
  && systemctl cat "$SYSTEMD_SERVICE" >/dev/null 2>&1; then
  systemctl restart "$SYSTEMD_SERVICE"
  systemctl is-active --quiet "$SYSTEMD_SERVICE"
  echo "Restarted $SYSTEMD_SERVICE with systemd"
else
  echo "No supported process manager found. Install PM2 or configure $SYSTEMD_SERVICE." >&2
  exit 1
fi

curl --fail --silent --show-error "http://127.0.0.1:8099/api/health" >/dev/null

echo "Deployed outputs/ to $SITE_DIR"
echo "Clink AI API is healthy on http://127.0.0.1:8099"
echo "Ensure deploy/nginx-api.conf is included in the w-shawn.cn Nginx site config."
