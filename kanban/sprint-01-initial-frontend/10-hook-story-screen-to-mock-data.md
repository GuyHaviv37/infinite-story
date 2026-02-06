## Task: Hook Story screen to mock data

**Goal**

Connect the Story screen to the mock campaigns and story steps so it can display the correct narrative for the selected campaign.

**Description**

- Import mock `campaigns` and `storySteps` data into the Story screen.
- Using the `campaignId` route parameter, find the selected `Campaign`.
- Load the initial `StoryStep` for that campaign (e.g. by `campaignId` and lowest step index/order).
- Display the campaign header and the current step’s `narrativeText` and choices.
- Handle error conditions (e.g. missing campaign or missing steps) with a friendly message instead of crashing.

**Acceptance Criteria**

- Navigating to the Story screen for a valid `campaignId` shows the correct mock campaign header and first story step.
- If an invalid `campaignId` is passed, the screen shows an error/“campaign not found” state.
- If a campaign has no steps defined, the screen shows a simple empty-state message.

**Notes**

- Do not implement choice-based step progression in this task; that is covered by the interaction task.

