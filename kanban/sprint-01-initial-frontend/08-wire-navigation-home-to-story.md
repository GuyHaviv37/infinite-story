## Task: Wire navigation from Home to Story

**Goal**

Enable users to tap a campaign on the Home screen and navigate to the Story screen for that campaign.

**Description**

- Use Expo Router navigation utilities (e.g. `router.push`) in the Home screen.
- On tapping a campaign row, navigate to the `StoryScreen` route.
- Pass the selected `campaignId` as a route parameter.
- In `StoryScreen`, read the `campaignId` from route params for use when loading mock story data.

**Acceptance Criteria**

- From the Home screen in Expo Go, tapping a campaign navigates to the Story screen.
- The selected `campaignId` is correctly passed and available in `StoryScreen`.
- Using the back gesture or back button returns safely to the Home screen without errors.

**Notes**

- This task should not invoke any backend; routing is purely client-side.

