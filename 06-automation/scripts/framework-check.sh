#!/bin/bash

# Framework Check Script
# =======================
# This script performs a comprehensive sanity and completeness check on the
# Solo Agent Development Framework. It validates the framework structure,
# checks for missing files, verifies Constitution alignment, and ensures
# all required documentation is present.

# Usage: ./framework-check.sh [options]
# Options:
#   --full        Perform full check (includes detailed Constitution checks)
#   --quick       Perform quick check (basic structure only)
#   --verbose     Show verbose output
#   --fix         Attempt to fix minor issues automatically
#   --help        Show this help message

# Exit codes:
#   0 = All checks passed
#   1 = Warnings found
#   2 = Errors found (critical issues)
#   3 = Script error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
FRAMEWORK_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../" && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHECK_MODE="full"
VERBOSE=false
FIX_MODE=false

# Counters
ERROR_COUNT=0
WARNING_COUNT=0
PASS_COUNT=0
TOTAL_CHECKS=0

# Arrays to track issues
declare -a ERRORS
declare -a WARNINGS
declare -a PASSES

# ============================================================================
# Functions
# ============================================================================

log_pass() {
    echo -e "${GREEN}[PASS]${NC}    $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC}   $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_info() {
    if [ "$VERBOSE" = true ]; then
        echo -e "${BLUE}[INFO]${NC}    $1"
    fi
}

log_header() {
    echo ""
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

function check_file_exists() {
    local file_path="$1"
    local check_name="$2"
    local required="${3:-true}"
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ -e "$file_path" ]; then
        PASS_COUNT=$((PASS_COUNT + 1))
        PASSES+=("$check_name")
        log_pass "$check_name: File exists"
        return 0
    else
        if [ "$required" = true ]; then
            ERROR_COUNT=$((ERROR_COUNT + 1))
            ERRORS+=("$check_name: $file_path")
            log_error "$check_name: File missing at $file_path"
            return 1
        else
            WARNING_COUNT=$((WARNING_COUNT + 1))
            WARNINGS+=("$check_name: $file_path")
            log_warning "$check_name: File missing at $file_path (optional)"
            return 1
        fi
    fi
}

function check_directory_exists() {
    local dir_path="$1"
    local check_name="$2"
    local required="${3:-true}"
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ -d "$dir_path" ]; then
        PASS_COUNT=$((PASS_COUNT + 1))
        PASSES+=("$check_name")
        log_pass "$check_name: Directory exists"
        return 0
    else
        if [ "$required" = true ]; then
            ERROR_COUNT=$((ERROR_COUNT + 1))
            ERRORS+=("$check_name: $dir_path")
            log_error "$check_name: Directory missing at $dir_path"
            return 1
        else
            WARNING_COUNT=$((WARNING_COUNT + 1))
            WARNINGS+=("$check_name: $dir_path")
            log_warning "$check_name: Directory missing at $dir_path (optional)"
            return 1
        fi
    fi
}

function check_file_content() {
    local file_path="$1"
    local pattern="$2"
    local check_name="$3"
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ ! -f "$file_path" ]; then
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("$check_name: File $file_path not found")
        log_warning "$check_name: File $file_path not found"
        return 1
    fi
    
    if grep -qi "$pattern" "$file_path"; then
        PASS_COUNT=$((PASS_COUNT + 1))
        PASSES+=("$check_name")
        log_pass "$check_name: Pattern found"
        return 0
    else
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("$check_name: Pattern not found in $file_path")
        log_warning "$check_name: Pattern not found in $file_path"
        return 1
    fi
}

function check_line_count() {
    local file_path="$1"
    local min_lines="$2"
    local check_name="$3"
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ ! -f "$file_path" ]; then
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("$check_name: File $file_path not found")
        log_warning "$check_name: File $file_path not found"
        return 1
    fi
    
    local line_count
    line_count=$(wc -l < "$file_path" | tr -d ' ')
    
    if [ "$line_count" -ge "$min_lines" ]; then
        PASS_COUNT=$((PASS_COUNT + 1))
        PASSES+=("$check_name")
        log_pass "$check_name: File has $line_count lines (min: $min_lines)"
        return 0
    else
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("$check_name: File has only $line_count lines (min: $min_lines)")
        log_warning "$check_name: File has only $line_count lines (min: $min_lines)"
        return 1
    fi
}

function count_files_in_directory() {
    local dir_path="$1"
    local extension="$2"
    
    if [ ! -d "$dir_path" ]; then
        echo 0
        return
    fi
    
    if [ -z "$extension" ]; then
        find "$dir_path" -type f 2>/dev/null | wc -l | tr -d ' '
    else
        find "$dir_path" -type f -name "*.$extension" 2>/dev/null | wc -l | tr -d ' '
    fi
}

function show_summary() {
    log_header "CHECK SUMMARY"
    
    echo ""
    echo "Total checks:    $TOTAL_CHECKS"
    echo -e "${GREEN}Passed:            $PASS_COUNT${NC}"
    echo -e "${YELLOW}Warnings:          $WARNING_COUNT${NC}"
    echo -e "${RED}Errors:            $ERROR_COUNT${NC}"
    
    if [ $ERROR_COUNT -gt 0 ]; then
        echo ""
        log_header "ERRORS (Critical Issues)"
        for error in "${ERRORS[@]}"; do
            echo "  - $error"
        done
    fi
    
    if [ $WARNING_COUNT -gt 0 ]; then
        echo ""
        log_header "WARNINGS (Non-Critical Issues)"
        for warning in "${WARNINGS[@]}"; do
            echo "  - $warning"
        done
    fi
    
    if [ $PASS_COUNT -gt 0 ] && [ "$VERBOSE" = true ]; then
        echo ""
        log_header "PASSES"
        for pass in "${PASSES[@]}"; do
            echo "  - $pass"
        done
    fi
    
    echo ""
    
    if [ $ERROR_COUNT -gt 0 ]; then
        log_error "Framework check FAILED with $ERROR_COUNT error(s)"
        return 2
    elif [ $WARNING_COUNT -gt 0 ]; then
        log_warning "Framework check PASSED with $WARNING_COUNT warning(s)"
        return 1
    else
        log_pass "Framework check PASSED - All checks successful!"
        return 0
    fi
}

function show_help() {
    echo "Framework Check Script"
    echo "====================="
    echo ""
    echo "Usage: ./framework-check.sh [options]"
    echo ""
    echo "Options:"
    echo "  --full        Perform full check (default)"
    echo "  --quick       Perform quick check (basic structure only)"
    echo "  --verbose     Show verbose output"
    echo "  --fix         Attempt to fix minor issues automatically"
    echo "  --help        Show this help message"
    echo ""
    echo "Exit codes:"
    echo "  0 = All checks passed"
    echo "  1 = Warnings found"
    echo "  2 = Errors found (critical issues)"
    echo ""
    echo "Examples:"
    echo "  ./framework-check.sh                    # Full check"
    echo "  ./framework-check.sh --quick              # Quick check"
    echo "  ./framework-check.sh --verbose           # Verbose output"
}

# ============================================================================
# Parse Arguments
# ============================================================================

while [[ $# -gt 0 ]]; do
    case "$1" in
        --full)
            CHECK_MODE="full"
            shift
            ;;
        --quick)
            CHECK_MODE="quick"
            shift
            ;;
        --verbose)
            VERBOSE=true
            shift
            ;;
        --fix)
            FIX_MODE=true
            shift
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            show_help
            exit 3
            ;;
    esac
done

# ============================================================================
# Main Check Functions
# ============================================================================

function check_framework_structure() {
    log_header "CHECKING FRAMEWORK STRUCTURE"
    
    check_directory_exists "$FRAMEWORK_ROOT" "Root directory" true
    check_file_exists "$FRAMEWORK_ROOT/README.md" "Root README" false
    
    local sections=(
        "00-constitution"
        "01-governance"
        "02-methodology"
        "03-standards"
        "04-templates"
        "05-checklists"
        "06-automation"
        "07-examples"
    )
    
    for section in "${sections[@]}"; do
        check_directory_exists "$FRAMEWORK_ROOT/$section" "Section: $section" true
    done
    
    check_directory_exists "$FRAMEWORK_ROOT/02-methodology/checkpoints" "Checkpoints directory" true
    check_directory_exists "$FRAMEWORK_ROOT/02-methodology/phases" "Phases directory" true
    check_directory_exists "$FRAMEWORK_ROOT/06-automation/agents" "Agents directory" true
    check_directory_exists "$FRAMEWORK_ROOT/06-automation/scripts" "Scripts directory" true
}

function check_constitution() {
    log_header "CHECKING CONSTITUTION"
    
    check_file_exists "$FRAMEWORK_ROOT/00-constitution/constitution.md" "Constitution document" true
    check_line_count "$FRAMEWORK_ROOT/00-constitution/constitution.md" 100 "Constitution document size"
    
    local principles=(
        "I\. Solo Developer.*Agents Autonomy"
        "II\. Explicit.*Tested Business Logic"
        "III\. Simplicity Over Abstraction"
        "IV\. Informed Decisions via Explicit Options"
        "V\. Complete Specification Before Implementation"
        "VI\. Quality Gates Are Mandatory"
        "VII\. Documentation Is Part of the Code"
        "VIII\. Personal and Private Data"
        "IX\. Local-First Architecture"
        "X\. Observability and Trust"
        "A\. Technology Stack Constraints"
        "B\. Testing Constraints"
        "C\. Performance Constraints"
        "D\. Security Constraints"
    )
    
    for principle in "${principles[@]}"; do
        check_file_content "$FRAMEWORK_ROOT/00-constitution/constitution.md" "$principle" "Constitution: ${principle:10}"
    done
}

function check_governance() {
    log_header "CHECKING GOVERNANCE"
    
    local required_docs=(
        "roles.md"
        "decision-process.md"
        "changes.md"
        "cross-dependencies.md"
    )
    
    for doc in "${required_docs[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/01-governance/$doc" "Governance: $doc" true
    done
    
    check_directory_exists "$FRAMEWORK_ROOT/01-governance/change-requests" "Change requests directory" false
}

function check_methodology() {
    log_header "CHECKING METHODOLOGY"
    
    check_file_exists "$FRAMEWORK_ROOT/02-methodology/process-overview.md" "Process overview" true
    
    local gates=("gate-00" "gate-01" "gate-02" "gate-03" "gate-04" "gate-05")
    
    for gate in "${gates[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/02-methodology/checkpoints/$gate.md" "Gate: $gate" true
    done
    
    local phases=("00-ideation" "01-discovery" "02-specification" "03-design" "04-implementation" "05-verification")
    
    for phase in "${phases[@]}"; do
        check_directory_exists "$FRAMEWORK_ROOT/02-methodology/phases/$phase" "Phase: $phase" true
    done
}

function check_standards() {
    log_header "CHECKING STANDARDS"
    
    check_file_exists "$FRAMEWORK_ROOT/03-standards/README.md" "Standards README" true
    
    local categories=("architecture" "testing" "documentation" "csharp" "go" "java-kotlin" "javascript-typescript" "python" "rust" "swift" "ui")
    
    for category in "${categories[@]}"; do
        check_directory_exists "$FRAMEWORK_ROOT/03-standards/$category" "Standard: $category" true
    done
    
    local required_readmes=("architecture" "testing" "documentation")
    
    for category in "${required_readmes[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/03-standards/$category/README.md" "Standard README: $category" true
    done
}

function check_templates() {
    log_header "CHECKING TEMPLATES"
    
    check_file_exists "$FRAMEWORK_ROOT/04-templates/README.md" "Templates README" true
    
    local templates=(
        "idea-template.md"
        "research-template.md"
        "constraints-template.md"
        "risks-template.md"
        "design-template.md"
        "spec-template.md"
        "plan-template.md"
        "task-list-template.md"
        "gate-review-template.md"
    )
    
    for template in "${templates[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/04-templates/$template" "Template: $template" true
    done
}

function check_checklists() {
    log_header "CHECKING CHECKLISTS"
    
    check_file_exists "$FRAMEWORK_ROOT/05-checklists/README.md" "Checklists README" true
    
    local gates=("gate-00" "gate-01" "gate-02" "gate-03" "gate-04" "gate-05")
    
    for gate in "${gates[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/05-checklists/$gate-checklist.md" "Checklist: $gate" false
    done
}

function check_automation() {
    log_header "CHECKING AUTOMATION"
    
    local agents=("design-agent" "code-agent" "review-agent")
    
    for agent in "${agents[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/06-automation/agents/${agent}.md" "Agent: $agent" true
    done
    
    check_directory_exists "$FRAMEWORK_ROOT/06-automation/scripts" "Scripts directory" true
}

function check_examples() {
    log_header "CHECKING EXAMPLES"
    
    check_file_exists "$FRAMEWORK_ROOT/07-examples/README.md" "Examples README" false
    
    local example_count
    example_count=$(find "$FRAMEWORK_ROOT/07-examples" -maxdepth 1 -mindepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ $example_count -gt 0 ]; then
        PASS_COUNT=$((PASS_COUNT + 1))
        PASSES+=("Examples: $example_count example(s) found")
        log_pass "Examples: $example_count example(s) found"
    else
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("Examples: No examples found")
        log_warning "Examples: No examples found"
    fi
}

function check_constitution_alignment() {
    log_header "CHECKING CONSTITUTION ALIGNMENT"
    
    local principles=(
        "Solo Developer.*Agents Autonomy"
        "Explicit.*Tested Business Logic"
        "Simplicity Over Abstraction"
        "Informed Decisions via Explicit Options"
        "Complete Specification Before Implementation"
        "Quality Gates"
        "Documentation Is Part of the Code"
        "Personal and Private Data"
        "Local-First Architecture"
        "Observability and Trust"
        "Technology Stack Constraints"
        "Testing Constraints"
        "Performance Constraints"
        "Security Constraints"
    )
    
    local key_docs=(
        "$FRAMEWORK_ROOT/00-constitution/constitution.md"
        "$FRAMEWORK_ROOT/01-governance/roles.md"
        "$FRAMEWORK_ROOT/03-standards/architecture/README.md"
        "$FRAMEWORK_ROOT/03-standards/testing/README.md"
        "$FRAMEWORK_ROOT/03-standards/documentation/README.md"
    )
    
    for doc in "${key_docs[@]}"; do
        if [ -f "$doc" ]; then
            local doc_name=$(basename "$doc")
            for principle in "${principles[@]}"; do
                check_file_content "$doc" "$principle" "Constitution alignment: $doc_name ($principle)"
            done
        fi
    done
}

function check_documentation_completeness() {
    log_header "CHECKING DOCUMENTATION COMPLETENESS"
    
    local sections_with_readme=(
        "00-constitution"
        "01-governance"
        "02-methodology"
        "03-standards"
        "04-templates"
        "05-checklists"
        "06-automation"
    )
    
    for section in "${sections_with_readme[@]}"; do
        check_file_exists "$FRAMEWORK_ROOT/$section/README.md" "README: $section" false
    done
}

function check_file_counts() {
    log_header "CHECKING FILE COUNTS"
    
    local dir_checks=(
        "00-constitution:1:10"
        "01-governance:3:10"
        "02-methodology:5:50"
        "03-standards:5:30"
        "04-templates:5:15"
        "05-checklists:1:10"
        "06-automation:3:20"
    )
    
    for entry in "${dir_checks[@]}"; do
        IFS=':' read -r -a parts <<< "$entry"
        local dir_path="$FRAMEWORK_ROOT/${parts[0]}"
        local min_count="${parts[1]}"
        local max_count="${parts[2]}"
        local dir_name="${parts[0]}"
        
        local file_count
        file_count=$(count_files_in_directory "$dir_path")
        
        TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
        
        if [ "$file_count" -ge "$min_count" ] && [ "$file_count" -le "$max_count" ]; then
            PASS_COUNT=$((PASS_COUNT + 1))
            PASSES+=("File count: $dir_name ($file_count files)")
            log_pass "File count: $dir_name has $file_count files (expected: $min_count-$max_count)"
        else
            WARNING_COUNT=$((WARNING_COUNT + 1))
            WARNINGS+=("File count: $dir_name has $file_count files (expected: $min_count-$max_count)")
            log_warning "File count: $dir_name has $file_count files (expected: $min_count-$max_count)"
        fi
    done
}

function check_git_status() {
    log_header "CHECKING GIT STATUS"
    
    if [ -d "$FRAMEWORK_ROOT/.git" ]; then
        cd "$FRAMEWORK_ROOT" 2>/dev/null || return
        
        local git_status
        git_status=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
        
        TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
        
        if [ "$git_status" -eq 0 ]; then
            PASS_COUNT=$((PASS_COUNT + 1))
            PASSES+=("Git status: Clean working directory")
            log_pass "Git status: Clean working directory"
        else
            WARNING_COUNT=$((WARNING_COUNT + 1))
            WARNINGS+=("Git status: $git_status uncommitted change(s)")
            log_warning "Git status: $git_status uncommitted change(s)"
        fi
        
        cd - > /dev/null 2>&1 || return
    else
        WARNING_COUNT=$((WARNING_COUNT + 1))
        WARNINGS+=("Git status: Not a git repository")
        log_warning "Git status: Not a git repository"
        TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    fi
}

# ============================================================================
# Run Checks Based on Mode
# ============================================================================

log_header "FRAMEWORK SANITY AND COMPLETENESS CHECK"
log_info "Mode: $CHECK_MODE"
log_info "Framework root: $FRAMEWORK_ROOT"
echo ""

# Always run structure checks
check_framework_structure

if [ "$CHECK_MODE" = "quick" ]; then
    log_info "Running quick checks..."
    check_constitution
    check_governance
    check_methodology
    check_standards
    check_templates
    check_checklists
    check_automation
    check_examples
else
    log_info "Running full checks..."
    check_constitution
    check_governance
    check_methodology
    check_standards
    check_templates
    check_checklists
    check_automation
    check_examples
    check_constitution_alignment
    check_documentation_completeness
    check_file_counts
    check_git_status
fi

# ============================================================================
# Show Summary and Exit
# ============================================================================
echo ""
show_summary

exit $?
