## Task: Implement basic \"choose option\" interaction (mocked)

**Goal**

Allow the player to tap a choice on the Story screen and advance through a hardcoded sequence of story steps, without backend or dice logic.

**Description**

- In the Story screen, maintain local state for the current `StoryStep` (e.g. `currentStepId`).
- When a choice is tapped:
  - Look up the `nextStepId` in the mock data.
  - Update local state to point to the corresponding `StoryStep`.
- If a choice leads to a step with no further choices, treat it as a temporary \"end of demo\" state.
- Keep everything in-memory; do not call any backend or OpenAI APIs.

**Acceptance Criteria**

- In Expo Go, tapping different choices on the Story screen progresses through the predefined mock steps.
- The UI updates to show the new `narrativeText` and its associated choices.
- The app does not crash if a `nextStepId` is missing; instead, show a simple end-of-story message.

**Notes**

- This task intentionally omits the d20 resolution logic; that will be added in a later sprint.

