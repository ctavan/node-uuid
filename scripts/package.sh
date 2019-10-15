#!/bin/bash -eu

# Mostly taken from:
# https://github.com/date-fns/date-fns/blob/master/scripts/build/package.sh
# and
# https://medium.com/@iamstan/tips-for-writing-es-modules-in-node-js-96ec688615a4

# cd to the root dir
ROOT="$(pwd)/$(dirname "$0")/.."
cd "$ROOT" || exit 1

PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
DIR=${PACKAGE_OUTPUT_PATH:-"$ROOT/tmp/package"}

# Clean up output dir
rm -rf "$DIR"
mkdir -p "$DIR"

# Transpile CommonJS versions of files
babel --env-name commonjs src --source-root src --out-dir "$DIR" --copy-files --quiet

# Transpile ESM versions of files for node
babel --env-name esm src --source-root src --out-dir "$DIR/esm-node" --copy-files --quiet

# No need to have the CLI files in the esm builk
rm -rf "$DIR/esm-node/bin"
rm -rf "$DIR/esm-node/uuid-bin.js"

cp -a "$DIR/esm-node" "$DIR/esm-browser"

for FILE in "$DIR"/esm-browser/*-browser.js; do
  echo "Replacing node-specific file for esm-browser: $FILE"
  mv "$FILE" "${FILE/-browser.js/.js}"
done

echo "Removing browser-specific files from esm-node"
rm -f "$DIR"/esm-node/*-browser.js

echo "Renaming node-specific esm files to .mjs"
for FILE in "$DIR"/esm-node/*.js; do
  sed -i '' -e "s/\.js'/.mjs'/" "$FILE"
  mv "$FILE" "${FILE%.js}.mjs"
done

mv "$DIR"/esm-node/* "$DIR"/
rm -r "$DIR"/esm-node

# Copy basic files
for PATTERN in package.json \
  CHANGELOG.md \
  LICENSE.md \
  README.md
do
  cp -r "$PATTERN" "$DIR"
done
