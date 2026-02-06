## Task: Create mock data for campaigns and story steps

**Goal**

Provide static mock data for campaigns and story steps so the Home and Story screens can be fully interactive without a backend.

**Description**

- Create a new mock data file (e.g. `constants/mock-data.ts` or `app/mock-data.ts`).
- Define 2–3 mock `Campaign` objects, each with:
  - A unique `id`.
  - A `name`.
  - A `characterClass`.
  - A short description or hook sentence.
  - A simple `lastPlayedAt` or similar metadata.
- For at least one campaign, define a short sequence of 2–3 `StoryStep` objects:
  - Each step has a `narrativeText`.
  - Each step includes 2–4 `Choice` objects with labels and `nextStepId` links.
- Export arrays or maps of `campaigns` and `storySteps` for use on the Home and Story screens.

**Acceptance Criteria**

- A mock data file exists and compiles with the domain types defined in `types/domain.ts`.
- The Home screen can import `campaigns` and display them.
- The Story screen can import `storySteps` for a specific campaign and step through them.

**Notes**

- Design the mock narrative to be evocative of the final experience (e.g., a small intro scene) but keep it short for quick iteration in Expo Go.

