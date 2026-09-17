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

git -C "$REPO_DIR" fetch origin "$BRANCH:refs/remotes/origin/$BRANCH"
git -C "$REPO_DIR" merge --ff-only "origin/$BRANCH"

mkdir -p "$SITE_DIR"
rsync -a --delete --exclude=".user.ini" "$REPO_DIR/outputs/" "$SITE_DIR/"

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

health_url="http://127.0.0.1:8099/api/health"
health_ready=false
for attempt in $(seq 1 20); do
  if curl --fail --silent --show-error --connect-timeout 2 --max-time 5 "$health_url" >/dev/null 2>&1; then
    health_ready=true
    break
  fi
  echo "Waiting for Clink AI API health check ($attempt/20)..."
  sleep 3
done

if [ "$health_ready" != true ]; then
  echo "Clink AI API did not become healthy within 60 seconds: $health_url" >&2
  if command -v systemctl >/dev/null 2>&1; then
    systemctl status "$SYSTEMD_SERVICE" --no-pager --lines=30 >&2 || true
    journalctl -u "$SYSTEMD_SERVICE" --no-pager -n 50 >&2 || true
  fi
  exit 1
fi

echo "Deployed outputs/ to $SITE_DIR"
echo "Clink AI API is healthy on http://127.0.0.1:8099"
echo "Ensure deploy/nginx-api.conf is included in the w-shawn.cn Nginx site config."
