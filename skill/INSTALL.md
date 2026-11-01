# Installation & Setup Guide

> **Skill**: Pocket Dev Framework Manager  
> **Version**: 1.0.0  
> **Last Updated**: 2026-10-29  

---

## Quick Installation

### For Vibe CLI

```bash
# 1. Create skills directory (if it doesn't exist)
mkdir -p ~/.vibe/skills/pocket-dev-framework-manager

# 2. Copy the skill file
cp "pocket-dev/framework/skill/SKILL.md" ~/.vibe/skills/pocket-dev-framework-manager/

# 3. Create state directory for your project
mkdir -p "pocket-dev/.pocket-dev/{state,tasks,sessions}"

# 4. (Optional) Copy example state files
cp "pocket-dev/.pocket-dev/state.json" "pocket-dev/.pocket-dev/state.json.backup"
cp "pocket-dev/.pocket-dev/sessions/sess_20261029_1430_health.json" "pocket-dev/.pocket-dev/sessions/"

# 5. Restart Vibe CLI
vibe restart
```

### For OpenCode

```bash
# 1. Create skills directory
mkdir -p ~/.opencode/skills/pocket-dev-framework-manager

# 2. Copy the skill file
cp "pocket-dev/framework/skill/SKILL.md" ~/.opencode/skills/pocket-dev-framework-manager/

# 3. Create state directory
mkdir -p "pocket-dev/.pocket-dev/{state,tasks,sessions}"

# 4. Copy example state files
cp "pocket-dev/.pocket-dev/state.json" "pocket-dev/.pocket-dev/"
cp "pocket-dev/.pocket-dev/sessions/sess_20261029_1430_health.json" "pocket-dev/.pocket-dev/sessions/"

# 5. Restart OpenCode
opencode restart
```

---

## Manual Setup

If automatic setup doesn't work, follow these steps:

### 1. Create Directory Structure

```bash
# Navigate to your project
cd "pocket-dev"

# Create framework directories
mkdir -p .pocket-dev/state .pocket-dev/tasks .pocket-dev/sessions
```

### 2. Create Initial State File

```bash
cat > .pocket-dev/state.json << 'EOF'
{
  "framework_version": "1.0.0",
  "last_updated": "",
  "project_name": "Pocket Dev",
  "project_description": "Your project description",
  "features": [],
  "stats": {
    "total_features": 0,
    "by_phase": {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "done": 0}
  },
  "framework_config": {
    "phases": [
      {"id": 0, "name": "Ideation"},
      {"id": 1, "name": "Discovery"},
      {"id": 2, "name": "Specification"},
      {"id": 3, "name": "Design"},
      {"id": 4, "name": "Implementation"},
      {"id": 5, "name": "Verification"}
    ],
    "gates": [
      {"id": 0, "name": "Idea Approved", "phase": 0},
      {"id": 1, "name": "Discovery Complete", "phase": 1},
      {"id": 2, "name": "Specification Approved", "phase": 2},
      {"id": 3, "name": "Design Approved", "phase": 3},
      {"id": 4, "name": "Implementation Complete", "phase": 4},
      {"id": 5, "name": "Verification Passed", "phase": 5}
    ],
    "agent_roles": {
      "0": "spec-agent",
      "1": "spec-agent",
      "2": "spec-agent",
      "3": "design-agent",
      "4": "impl-agent",
      "5": "verify-agent"
    }
  }
}
EOF
```

### 3. Verify Installation

```bash
# Check skill file exists
ls -la ~/.vibe/skills/pocket-dev-framework-manager/SKILL.md
# or
ls -la ~/.opencode/skills/pocket-dev-framework-manager/SKILL.md

# Check state directory exists
ls -la "pocket-dev/.pocket-dev/state.json"
```

---

## Using the Skill

### Basic Commands

| Command | Description | Example |
|---------|-------------|---------|
| **Show project status** | Display all features in a Kanban board | `"Show me the framework status"` |
| **Select a task** | Choose a specific feature to work on | `"Select task FEA-20261029-001"` or `"Select task 1"` |
| **Resume work** | Continue where you left off | `"Resume work"` or `"Resume task"` |
| **Next step** | Move to next phase/gate in framework | `"Next step"` |
| **Mark complete** | Mark current task as done | `"Task done"` or `"Mark complete"` |
| **Back to overview** | Return to project board | `"Back to overview"` or `"Show board"` |

### Session Flow Example

```
You: "Show me the framework status"

Skill: Displays project board with all features
     📥 BACKLOG: Calendar Widget, News Widget
     🔍 DISCOVERY: (none)
     📋 SPECIFICATION: Health Data Companion
     ✏️  DESIGN: (none)
     ...

You: "Select task 1"

Skill: Shows Health Data Companion details
     Phase: 2 - Specification
     Status: In Progress (85%)
     Last: Working on US1-SC3
     
     [Specification Agent] You were working on acceptance scenario US1-SC3.
     Current: Then: [INCOMPLETE]
     
     Complete the Then condition for: "Display sleep score with derived indicator label"
     > 

You: "Then: Sleep score is displayed with 'Derived' label"

Skill: [Specification Agent] ✅ US1-SC3 complete!
     
     Next acceptance scenario: US1-SC4
     "Handle partial Health permissions"
     
     Would you like to:
     1. Start US1-SC4
     2. Review all scenarios
     3. Back to overview
     > 

You: "1"

Skill: [Specification Agent] Let's work on US1-SC4.
     
     **US1-SC4**: Handle partial Health permissions
     - Given: Health permission is denied or only partially granted
     - When: onboarding completes
     - Then: [INCOMPLETE]
     
     What should happen when permissions are partial?
     > 

You: "Back to overview"

Skill: [Framework Manager] Saving session...
     ✅ Progress saved
     
     [Returns to project board]
```

---

## Customizing the Skill

### Adding Custom Triggers

Edit the `triggers` section in `SKILL.md`:

```yaml
triggers:
  - name: my_custom_command
    patterns:
      - "my command"
      - "another way to say it"
    priority: 5
```

### Modifying Agent Behavior

Edit the agent role sections in `SKILL.md` to change how agents behave in each phase.

### Adding Project-Specific Rules

Create a `project-config.json` in your project root:

```json
{
  "custom_phases": [],
  "custom_agents": [],
  "custom_checklists": []
}
```

---

## Troubleshooting

### Skill Not Found

**Problem**: Vibe/OpenCode doesn't recognize the skill

**Solution**:
1. Check skill file is in correct directory
2. Verify filename is `SKILL.md` (case-sensitive)
3. Check YAML frontmatter is valid
4. Restart Vibe/OpenCode

### State Files Not Created

**Problem**: `.pocket-dev/` directory not created

**Solution**:
1. Manually create directories:
   ```bash
   mkdir -p "pocket-dev/.pocket-dev/{state,tasks,sessions}"
   ```
2. Ensure write permissions:
   ```bash
   chmod -R 755 "pocket-dev/.pocket-dev"
   ```

### Commands Not Triggering

**Problem**: Skill doesn't respond to commands

**Solution**:
1. Check command matches a trigger pattern
2. Try rephrasing the command
3. Say `"help"` to see available commands
4. Check for typos in commands

### Wrong Phase/Gate Shown

**Problem**: Phase/gate doesn't match actual state

**Solution**:
1. Manually edit `state.json` to correct phase
2. Run `"show framework status"` to refresh
3. Check feature directory for actual phase

---

## Updating the Skill

To update to a new version:

```bash
# 1. Backup current state
cp "pocket-dev/.pocket-dev/state.json" "pocket-dev/.pocket-dev/state.json.backup"
cp -r "pocket-dev/.pocket-dev/sessions/" "pocket-dev/.pocket-dev/sessions.backup/"

# 2. Copy new skill file
cp "path/to/new/SKILL.md" ~/.vibe/skills/pocket-dev-framework-manager/

# 3. Restart Vibe/OpenCode
vibe restart
# or
opencode restart

# 4. Verify update
vibe --version
# Check skill version in response
```

---

## Uninstalling

```bash
# Remove skill
rm -rf ~/.vibe/skills/pocket-dev-framework-manager
# or
rm -rf ~/.opencode/skills/pocket-dev-framework-manager

# Remove state files (optional - keeps your data)
# rm -rf "pocket-dev/.pocket-dev"

# Restart Vibe/OpenCode
vibe restart
# or
opencode restart
```

---

## File Locations

| File | Purpose | Location |
|------|---------|----------|
| SKILL.md | Skill definition | `~/.vibe/skills/pocket-dev-framework-manager/` or `~/.opencode/skills/pocket-dev-framework-manager/` |
| state.json | Project state | `pocket-dev/.pocket-dev/state.json` |
| sessions/ | Session states | `pocket-dev/.pocket-dev/sessions/` |
| tasks/ | Task data | `pocket-dev/.pocket-dev/tasks/` |

---

## Tips for Best Experience

1. **Use Feature IDs**: They're unique and precise
   - ✅ `"Select task FEA-20261029-001"`
   - ❌ `"Select that health thing"`

2. **Follow the Framework**: Let the skill guide you through phases
   - The skill enforces the 6-phase, 6-gate process
   - It prevents skipping gates (as per Constitution Principle VI)

3. **Save Progress**: Use `"Back to overview"` when interrupted
   - Your progress is automatically saved
   - You can resume later exactly where you left off

4. **Complete Tasks**: Mark tasks as complete only when ready
   - The skill validates gate requirements
   - It won't let you proceed with incomplete work

5. **Use Agent Help**: Ask the agent for guidance
   - Each agent knows its role and responsibilities
   - They follow the framework's best practices

---

## Support

For issues or questions:

1. **Read this documentation** first
2. **Check the README**: `pocket-dev/framework/skill/README.md`
3. **Review framework docs**: `pocket-dev/framework/`
4. **Ask the agent**: Use the skill's help functionality

---

## Version Compatibility

| Framework Version | Skill Version | Status |
|-------------------|---------------|--------|
| 1.0.0 | 1.0.0 | ✅ Fully Compatible |

---

## Next Steps

After installation:

1. **Test the skill**: `"Show me the framework status"`
2. **Try selecting a task**: `"Select task 1"` or `"Select task FEA-20261029-001"`
3. **Resume work**: `"Resume work"`
4. **Explore commands**: `"help"`

The skill will guide you through the rest! 🚀
