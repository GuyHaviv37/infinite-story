## Task: Implement loading and empty/error states

**Goal**

Provide graceful loading, empty, and error states on the Home and Story screens to avoid crashes and confusing blanks.

**Description**

- On the Home screen:
  - If the mock `campaigns` array is empty, show a friendly empty state message instead of an empty list.
- On the Story screen:
  - If `campaignId` is missing or invalid, show a \"campaign not found\" message and a way to go back Home.
  - If a campaign has no `StoryStep`s, show an empty state message for the story area.
- Use existing themed components for these states (e.g. `ThemedText`) and keep the messaging concise.

**Acceptance Criteria**

- Home screen shows a clear empty state when there are no campaigns in mock data.
- Story screen does not crash on bad input; it shows friendly error/empty messages instead.
- All states still allow the user to navigate safely (e.g. back to Home).

**Notes**

- At this stage, loading states can be simple since data is local; future backend integration will add real loading spinners/skeletons.

