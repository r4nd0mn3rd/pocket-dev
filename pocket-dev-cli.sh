#!/bin/bash
# Pocket Dev CLI wrapper script
# This allows you to run the CLI without npm link

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE=${NODE:-node}

"$NODE" "$SCRIPT_DIR/packages/cli/dist/index.js" "$@"
