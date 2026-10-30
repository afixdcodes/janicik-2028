#!/bin/sh
# Build the deployable site: campaign-mimic at the root, parody under /parody/.
# Uses committed files only. Keeps dist/.vercel so the Vercel project link survives rebuilds.
set -e
cd "$(dirname "$0")"
mkdir -p dist
find dist -mindepth 1 -maxdepth 1 ! -name .vercel -exec rm -rf {} +
git archive campaign-mimic | tar -x -C dist
mkdir -p dist/parody
git archive parody | tar -x -C dist/parody
rm -f dist/build.sh dist/.gitignore dist/README.md dist/parody/README.md
printf '{\n  "trailingSlash": true\n}\n' > dist/vercel.json
echo "Built dist/ (serious at /, parody at /parody/)"
