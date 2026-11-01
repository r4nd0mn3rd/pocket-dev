#!/bin/bash
# Screenshot Update Script for Pocket Dev README
#
# Captures screenshots of the Kanban board with 6 columns and GIF showing terminal overlay
# Requires: Chrome, screencapture, ffmpeg
#
# Usage: ./update-screenshots.sh [port] [output_dir]

set -euo pipefail

# Configuration
PORT="${1:-4173}"
OUTPUT_DIR="${2:-/Users/tom/Documents/Repos/pocket-dev/docs/assets}"
SCREENSHOT_PATH="$OUTPUT_DIR/kanban-board.png"
GIF_PATH="$OUTPUT_DIR/board-workflow-demo.gif"
BOARD_URL="http://localhost:$PORT"
CLI_PATH="/Users/tom/Documents/Repos/pocket-dev/pocket-dev-cli.sh"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PROJECT_DIR="/Users/tom/Documents/Repos/video-server"

# Temp directory for frames
TMP_DIR=$(mktemp -d)
echo "Temp directory: $TMP_DIR"

cleanup() {
    echo "Cleaning up..."
    pkill -f "pocket-dev-cli.sh" 2>/dev/null || true
    lsof -ti:$PORT 2>/dev/null | xargs kill -9 2>/dev/null || true
    rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "=== Starting Pocket Dev Board ==="

# Start the board server
"$CLI_PATH" board --port "$PORT" &
SERVER_PID=$!

# Wait for server to start
sleep 5
echo "Server started on port $PORT"

# Verify server is running
curl -s "http://localhost:$PORT/tasks.json" | head -c 100 > /dev/null && echo "Server responding" || echo "Server not responding"

# ===== Capture Screenshot (6 columns) =====
echo "=== Capturing Screenshot ==="
"$CHROME" --headless --disable-gpu --screenshot="$SCREENSHOT_PATH" --window-size=1440,900 "$BOARD_URL" 2>&1 | head -5
sleep 2

echo "Screenshot captured: $SCREENSHOT_PATH"

# ===== Capture GIF showing terminal overlay =====
echo "=== Capturing GIF Frames ==="

# Open Chrome in GUI mode for GIF
osascript -e "tell application \"Google Chrome\"
    activate
    if exists window 1 then
        tell window 1 to make new tab with properties {URL:\"$BOARD_URL\"}
    else
        make new window
        tell window 1 to make new tab with properties {URL:\"$BOARD_URL\"}
    end if
end tell" 2>&1

sleep 8

# Get the tab title
osascript -e 'tell application "Google Chrome"
    activate
    delay 1
    repeat until loading of active tab of front window is false
        delay 0.5
    end repeat
end tell' 2>&1

# Frame 1: Initial state
screencapture -w -x -t png "$TMP_DIR/frame01.png" 2>&1
sleep 2

# Use AppleScript to click the "Continue" button on the first task
# We'll click in the terminal overlay area
osascript -e 'tell application "System Events"
    tell process "Google Chrome"
        click at {100, 200}
    end tell
end tell' 2>&1

sleep 1

# Frame 2: After click (notification + terminal overlay should appear)
screencapture -w -x -t png "$TMP_DIR/frame02.png" 2>&1

# Frame 3: Hold overlay
sleep 2
screencapture -w -x -t png "$TMP_DIR/frame03.png" 2>&1
sleep 1

# Frame 4: Hold
screencapture -w -x -t png "$TMP_DIR/frame04.png" 2>&1
sleep 1

echo "Frames captured:"
ls -la "$TMP_DIR/"

# Create GIF using ffmpeg
echo "=== Creating GIF ==="
ffmpeg -y -framerate 1 -i "$TMP_DIR/frame%02d.png" -vf "scale=1024:-1:flags=lanczos,fps=4" -loop 0 "$GIF_PATH" 2>&1 | tail -3

echo "GIF created: $GIF_PATH"

echo "=== DONE ==="
ls -la "$OUTPUT_DIR/"
