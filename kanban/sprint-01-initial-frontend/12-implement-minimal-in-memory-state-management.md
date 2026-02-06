## Task: Implement minimal in-memory state management

**Goal**

Track the currently active campaign and story progression in simple in-memory state suitable for a local-only prototype.

**Description**

- Use React state (`useState`/`useReducer`) or a small context (e.g. `CampaignContext`) to track:
  - The active `campaignId` (selected on Home).
  - The current `StoryStep` id or index for that campaign.
- Ensure the Story screen reads from this state when displaying the current step.
- Keep the implementation local and lightweight so it can be swapped out later for Convex-backed state.

**Acceptance Criteria**

- The active campaign and current story step are stored in React state, not in module-level globals.
- Navigating away and back within a session preserves the current step (as long as the process isn’t reloaded).
- The code remains easy to replace with Convex integration in a later sprint.

**Notes**

- Avoid over-engineering (no heavy state libraries yet); built-in React primitives are sufficient at this stage.

