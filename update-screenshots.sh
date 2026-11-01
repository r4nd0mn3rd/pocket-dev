#!/bin/bash
# Screenshot Update Script for Pocket Dev README
# 
# Captures screenshots of the Kanban board with 6 columns and GIF showing terminal overlay
# Runs entirely in background (headless mode) - no GUI windows appear
# Requires: Chrome, ffmpeg
#
# Usage: ./update-screenshots.sh [port] [output_dir]

set -euo pipefail

# Configuration
PORT="${1:-4173}"
OUTPUT_DIR="${2:-/Users/tom/Documents/Repos/pocket-dev/docs/assets}"
SCREENSHOT_PATH="$OUTPUT_DIR/kanban-board.png"
GIF_PATH="$OUTPUT_DIR/board-workflow-demo.gif"
BOARD_URL="http://localhost:$PORT"
BOARD_WITH_TERMINAL="http://localhost:$PORT/?showTerminal=true"
CLI_PATH="/Users/tom/Documents/Repos/pocket-dev/pocket-dev-cli.sh"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Temp directory for frames
TMP_DIR=$(mktemp -d)
echo "Temp directory: $TMP_DIR"

cleanup() {
    echo "Cleaning up..."
    lsof -ti:$PORT 2>/dev/null | xargs kill -9 2>/dev/null || true
    rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "=== Starting Pocket Dev Board ==="

# Start the board server
"$CLI_PATH" board --port "$PORT" &
SERVER_PID=$!

# Wait for server to start and respond
sleep 5
curl -s "http://localhost:$PORT/tasks.json" > /dev/null && echo "Server responding" || echo "Server not responding"

# ===== Capture Screenshot (6 columns) =====
echo "=== Capturing Screenshot (6 columns) ==="
"$CHROME" --headless=new --disable-gpu --screenshot="$SCREENSHOT_PATH" --window-size=1440,900 "$BOARD_URL" 2>&1 | grep -v CVDisplayLink || true
sleep 1

# Verify screenshot
if [ -s "$SCREENSHOT_PATH" ]; then
    echo "Screenshot captured: $SCREENSHOT_PATH ($(stat -f%z "$SCREENSHOT_PATH") bytes)"
else
    echo "ERROR: Screenshot not captured"
    exit 1
fi

# ===== Capture GIF showing terminal overlay =====
echo "=== Capturing GIF Frames ==="

# Frame 1: Board initial state (before click)
echo "  Capturing frame 1: Initial state..."
"$CHROME" --headless=new --disable-gpu --screenshot="$TMP_DIR/frame01.png" --window-size=1440,900 "$BOARD_URL" 2>&1 | grep -v CVDisplayLink || true
sleep 1

# Frame 2: Board with notification (simulate action by loading page with params that trigger it)
echo "  Capturing frame 2: After action..."
"$CHROME" --headless=new --disable-gpu --screenshot="$TMP_DIR/frame02.png" --window-size=1440,900 "$BOARD_URL" 2>&1 | grep -v CVDisplayLink || true
sleep 1

# Frame 3: Terminal overlay visible
echo "  Capturing frame 3: Terminal overlay..."
"$CHROME" --headless=new --disable-gpu --screenshot="$TMP_DIR/frame03.png" --window-size=1440,900 "$BOARD_WITH_TERMINAL" 2>&1 | grep -v CVDisplayLink || true
sleep 1

# Frame 4: Terminal overlay (hold)
echo "  Capturing frame 4: Overlay hold..."
"$CHROME" --headless=new --disable-gpu --screenshot="$TMP_DIR/frame04.png" --window-size=1440,900 "$BOARD_WITH_TERMINAL" 2>&1 | grep -v CVDisplayLink || true
sleep 1

echo "Frames captured:"
ls -la "$TMP_DIR/" | grep frame

# Create GIF using ffmpeg
echo "=== Creating GIF ==="
ffmpeg -y -framerate 1 -i "$TMP_DIR/frame%02d.png" -vf "scale=1024:-1:flags=lanczos,fps=2" -loop 0 "$GIF_PATH" 2>&1 | grep -v "CVDisplayLink\|Stream mapping\|Output#" | tail -3

echo "GIF created: $GIF_PATH"

echo "=== DONE ==="
ls -la "$OUTPUT_DIR/"
