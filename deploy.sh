#!/usr/bin/env bash
# ============================================================
#  deploy.sh — build locally and push to your server
#  Usage:  SERVER_IP=YOUR_IP ./deploy.sh
#          or edit SERVER_IP below and run:  ./deploy.sh
# ============================================================

set -e

SERVER_IP="${SERVER_IP:-YOUR_SERVER_IP}"   # <-- put your server IP here
SERVER_USER="root"                         # change if you use a different user
REMOTE_DIR="/var/www/aigetai"
NGINX_CONF="nginx.conf"

echo "==> Building React app..."
CI=false npm run build

echo "==> Uploading build to server..."
rsync -avz --delete build/ "${SERVER_USER}@${SERVER_IP}:${REMOTE_DIR}/build/"

echo "==> Done! Build is live at https://aigetai.com"
