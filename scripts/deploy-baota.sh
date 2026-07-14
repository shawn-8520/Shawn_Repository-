#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/www/wwwroot/ai-terminal-kb-repo}"
SITE_DIR="${SITE_DIR:-/www/wwwroot/your-domain.com}"
BRANCH="${BRANCH:-main}"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Repository not found: $REPO_DIR"
  echo "Clone it first, for example:"
  echo "git clone <your-github-repo-url> \"$REPO_DIR\""
  exit 1
fi

git -C "$REPO_DIR" fetch origin "$BRANCH"
git -C "$REPO_DIR" reset --hard "origin/$BRANCH"

mkdir -p "$SITE_DIR"
rsync -a --delete "$REPO_DIR/outputs/" "$SITE_DIR/"

echo "Deployed outputs/ to $SITE_DIR"
