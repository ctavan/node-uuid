#!/bin/bash -eu

# Mostly taken from:
# https://github.com/date-fns/date-fns/blob/master/scripts/build/package.sh

# cd to the root dir
ROOT="$(pwd)/$(dirname "$0")/.."
cd "$ROOT" || exit 1

PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
DIR=${PACKAGE_OUTPUT_PATH:-"$ROOT/tmp/package"}

# Clean up output dir
rm -rf "$DIR"
mkdir -p "$DIR"

# Traspile CommonJS versions of files
env TARGET='commonjs' babel src --source-root src --out-dir "$DIR" --copy-files --quiet

# Traspile ESM versions of files for node
env TARGET='esm' babel src --source-root src --out-dir "$DIR/esm-node" --copy-files --quiet

cp -a "$DIR/esm-node" "$DIR/esm-browser"

for FILE in "$DIR"/esm-browser/lib/*-browser.js
do
    echo "Replacing node-specific file for esm-browser: $FILE"
    mv "$FILE" "${FILE/-browser.js/.js}"
done

echo "Removing browser-specific files from esm-node"
rm -f "$DIR"/esm-node/lib/*-browser.js

echo "Renaming node-specific esm files to .mjs"
for FILE in $( find "$DIR/esm-node" -name '*.js' )
do
    sed -ie "s/\.js'/.mjs'/" "$FILE"
    mv "$FILE" "${FILE%.js}.mjs"
done

# Copy basic files
for PATTERN in CHANGELOG.md \
  package.json \
  LICENSE.md \
  README.md
do
  cp -r "$PATTERN" "$DIR"
done
