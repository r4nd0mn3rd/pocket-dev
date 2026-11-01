#!/usr/bin/env bash
# Install the Pocket Dev Solo Agent Development Framework into a project directory.
#
# Usage:
#   ./install.sh [target-dir]
#
# Defaults to the current directory. Safe to re-run: existing state and
# artifacts are preserved.

set -euo pipefail

TARGET="${1:-.}"
TARGET="$(cd "$TARGET" && pwd)"
SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Installing Pocket Dev Solo Agent Development Framework into: $TARGET"

# Initialize per-project state directory.
mkdir -p "$TARGET/.pocket-dev/tasks" "$TARGET/.pocket-dev/sessions" "$TARGET/.pocket-dev/specs"

# Copy framework documentation and templates (overwrite with latest).
for d in 00-constitution 01-governance 02-methodology 03-standards 04-templates 05-checklists 06-automation 07-examples; do
  if [ -d "$SRC_DIR/$d" ]; then
    rm -rf "$TARGET/.pocket-dev/$d"
    cp -R "$SRC_DIR/$d" "$TARGET/.pocket-dev/$d"
  fi
done

# Copy selected top-level docs only.
if [ -f "$SRC_DIR/GETTING-STARTED.md" ]; then
  cp "$SRC_DIR/GETTING-STARTED.md" "$TARGET/.pocket-dev/GETTING-STARTED.md"
fi

# Copy OpenCode skill + command.
mkdir -p "$TARGET/.opencode/skills/pocket-dev" "$TARGET/.opencode/commands"
cp "$SRC_DIR/.opencode/skills/pocket-dev/SKILL.md" \
   "$TARGET/.opencode/skills/pocket-dev/SKILL.md"
cp "$SRC_DIR/.opencode/commands/pocket-dev.md" \
   "$TARGET/.opencode/commands/pocket-dev.md"

# Initialize per-project state (do not overwrite existing state).
if [ ! -f "$TARGET/.pocket-dev/state.json" ]; then
  cp "$SRC_DIR/.pocket-dev/state.json" "$TARGET/.pocket-dev/state.json"
fi

# Ensure .gitignore entries exist.
if [ ! -f "$TARGET/.gitignore" ]; then
  touch "$TARGET/.gitignore"
fi
grep -qxF ".pocket-dev/state.json" "$TARGET/.gitignore" 2>/dev/null || echo ".pocket-dev/state.json" >> "$TARGET/.gitignore"
grep -qxF ".pocket-dev/tasks/" "$TARGET/.gitignore" 2>/dev/null || echo ".pocket-dev/tasks/" >> "$TARGET/.gitignore"
grep -qxF ".pocket-dev/sessions/" "$TARGET/.gitignore" 2>/dev/null || echo ".pocket-dev/sessions/" >> "$TARGET/.gitignore"

echo "Done."
echo
echo "Next steps:"
echo "  1. cd \"$TARGET\""
echo "  2. Run: opencode"
echo "  3. In the TUI: /pocket-dev"
