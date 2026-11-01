#!/usr/bin/env bash
# Create a low-token UI mockup scaffold.
#
# Usage:
#   06-automation/scripts/new-ui-mockup.sh <feature-id> <mockup-name> [title]
#
# Creates: specs/<feature-id>/mockups/<mockup-name>/index.html
# The agent then edits only the MOCKUP BODY block.

set -euo pipefail

FEATURE="${1:-}"
NAME="${2:-mockup}"
TITLE="${3:-$NAME}"

if [ -z "$FEATURE" ]; then
  echo "Usage: $0 <feature-id> <mockup-name> [title]" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
TEMPLATE="$REPO_ROOT/04-templates/ui-mockup/index.html"
OUT_DIR="$REPO_ROOT/specs/$FEATURE/mockups/$NAME"

if [ ! -f "$TEMPLATE" ]; then
  echo "Template not found: $TEMPLATE" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
python3 - "$TEMPLATE" "$OUT_DIR/index.html" "$TITLE" << 'PY'
import sys
src, dst, title = sys.argv[1], sys.argv[2], sys.argv[3]
with open(src, encoding="utf-8") as f:
    content = f.read()
content = content.replace("{{TITLE}}", title)
content = content.replace("{{DESCRIPTION}}", "Throwaway mockup for decision making.")
with open(dst, "w", encoding="utf-8") as f:
    f.write(content)
PY

echo "Created: $OUT_DIR/index.html"
echo "Open in a browser to preview. Edit the MOCKUP BODY block only."
