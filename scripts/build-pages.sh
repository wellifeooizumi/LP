#!/usr/bin/env bash
# Cloudflare Pages: framework=None, build command=bash scripts/build-pages.sh,
# build output directory=dist. No dependency installation or paid services.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p dist/assets
cp index.html opening.html styles.css opening.css script.js dist/
for asset in wellife-logo.png nagano-treatment.jpg nagano-portrait.webp ai-posture-analysis.png google-review-rating.webp; do
  cp "assets/$asset" "dist/assets/$asset"
done
printf 'Static LP prepared in dist/ (no dependencies required).\n'
