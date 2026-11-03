<!--
Sync Impact Report
Version change: Unversioned template → 1.0.0
Modified principles: Undefined template slots → I. Static-First; II. Accessible and Responsive;
III. Client-Side Safety; IV. Verified Changes; V. Simplicity
Added sections: Static Web Requirements; Development Workflow
Removed sections: None
Follow-up TODOs: Confirm original ratification date.
-->
# MyFirstSpecApplication Constitution

## Core Principles

### I. Static-First
The application MUST run as static web assets. A backend or server-side runtime MUST NOT be
introduced unless a feature specification requires it.

### II. Accessible and Responsive
Pages MUST use semantic structure, support keyboard navigation, and remain usable on mobile and
desktop viewport sizes.

### III. Client-Side Safety
The application MUST NOT include secrets in client-delivered code or assets. User-provided content
MUST be handled without unsafe HTML injection.

### IV. Verified Changes
Changes MUST pass the applicable build and automated tests. User-facing behavior MUST be checked
in a browser when automated tests do not cover it.

### V. Simplicity
Changes MUST follow the existing project conventions and avoid unnecessary dependencies or
abstractions.

## Static Web Requirements
The deployed application MUST function from its published static assets. Configuration and data
delivered to the browser MUST be treated as public.

## Development Workflow
Before completion, contributors MUST run the relevant project checks and verify changed user flows.
Reviews MUST confirm that changes follow this constitution; any exception MUST be documented with
its rationale.

## Governance
Amendments MUST be made in this document and reviewed with the work they govern. Version numbers
follow semantic versioning: MAJOR for incompatible governance changes, MINOR for new or materially
expanded requirements, and PATCH for clarifications that do not change requirements. Contributors
and reviewers MUST check proposed changes for compliance; deviations MUST be documented and
justified.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirm original adoption date | **Last Amended**: 2026-11-03
