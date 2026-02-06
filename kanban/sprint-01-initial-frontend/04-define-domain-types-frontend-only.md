## Task: Define TypeScript types for core entities (frontend-only)

**Goal**

Establish clear TypeScript types for Chronicle AI’s core domain entities on the frontend to make UI code safer and more self-documenting.

**Description**

- Create a new types file (e.g. `types/domain.ts`).
- Define the following types/unions:
  - `CharacterClass` union: `\"Warrior\" | \"Sage\" | \"Artisan\" | \"Gambler\"`.
  - `Attribute` union: `\"STR\" | \"INT\" | \"CRT\" | \"LCK\"`.
  - `Campaign` type: includes fields such as `id`, `name`, `characterClass`, `shortDescription`, `lastPlayedAt`, and any simple stats you want to surface.
  - `StoryStep` type: includes `id`, `campaignId`, `narrativeText`, `choices`.
  - `Choice` type: includes `id`, `label`, optional `attribute` field, and `nextStepId` for linking steps.
- Keep these types frontend-only for now; they will later align with Convex schema definitions.

**Acceptance Criteria**

- A single TypeScript file exists for core domain types and is imported where needed in the app.
- Home and Story screens use these types for mock data and props/state.
- TypeScript compiles without errors related to these new types.

**Notes**

- Prefer literal unions over string enums for simplicity in React Native/TypeScript code.

