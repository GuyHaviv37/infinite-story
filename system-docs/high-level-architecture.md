## High-Level Architecture: Chronicle AI

### 1. Tech Stack

- **Frontend**
  - **Framework**: React Native via Expo (TypeScript)
  - **UI Library**: Tamagui or NativeWind for fast, responsive styling
  - **State / Data Sync**: Convex React hooks (for real-time DB sync)

- **Backend & Database**
  - **Platform**: Convex
  - **Functions**:
    - **Queries**: Read operations
    - **Mutations**: Write operations
    - **Actions**: External API calls and long-running tasks

- **AI Engine**
  - **Provider**: OpenAI API
  - **Model**: `gpt-4o-mini` (for cost-efficiency)

- **Authentication**
  - **Option A**: Convex Auth
  - **Option B**: Clerk integration

### 2. System Diagram

At a high level:

- **Expo App (React Native)** communicates with **Convex** via Convex client and React hooks.
- **Convex backend** manages:
  - Business logic (queries, mutations, actions)
  - Data persistence (Convex database tables)
  - Calls to the **OpenAI API** for narrative generation and summarization.
- **Authentication provider** (Convex Auth or Clerk) secures access to Convex functions and data.

> A formal diagram can be created using tools like Excalidraw or diagrams.net, showing:
> Expo App ↔ Convex (Queries/Mutations/Actions) ↔ OpenAI API, plus Auth provider integration.

### 3. Data Schema (`schema.ts`)

Core Convex tables and their purpose:

| Table      | Description          | Key Fields                                         |
|-----------|----------------------|----------------------------------------------------|
| `users`   | App user data        | `email`, `isPro`, `tokenIdentifier`               |
| `campaigns` | Active/Past games  | `userId`, `characterClass`, `inventory`, `stats`  |
| `steps`   | The story log        | `campaignId`, `narrativeText`, `choices` (JSON), `order` |
| `summaries` | Compressed history | `campaignId`, `content`, `chapterNumber`          |

### 4. Technical Workflows

#### 4.1 Step Generation Workflow

1. **Trigger**: User selects a choice in the Expo app.
2. **Mutation**: The frontend calls a Convex mutation to:
   - Record the user's choice.
   - Update character stats and related campaign state.
3. **Action**: The mutation (or subsequent logic) triggers a Convex Action that:
   - Fetches the last 5 steps for the campaign.
   - Fetches the latest `summary` (if it exists).
4. **LLM Call**: The Action sends a structured prompt to OpenAI, including:
   - Recent steps.
   - Latest summary.
   - Current character stats and inventory.
5. **Parsing & Validation**:
   - The Action parses the AI's JSON response.
   - Validates the shape using Zod.
   - Writes a new `step` record (and any related updates) to the database.
6. **Reactive Update**:
   - The frontend is subscribed to the `steps` table via Convex hooks.
   - The new story block appears instantly on the user's screen.

#### 4.2 Handling Context Limits

To ensure the game remains coherent and cost-efficient:

1. Every **15 steps**, a background Convex Action is triggered.
2. The Action asks the AI:
   > "Summarize the key events, items found, and NPCs met in these 15 steps into 200 words."
3. The resulting summary is written to the `summaries` table.
4. For subsequent step generation (e.g., step 16+), only:
   - The latest summary, and
   - The very last step
   are sent to the AI, instead of the full history.

### 5. Deployment Strategy

- **Development**
  - `npx expo start` (for iPhone/Android simulator testing)
  - `npx convex dev` (local Convex backend with live syncing)

- **Production**
  - `npx convex deploy` for the Convex backend.
  - Expo EAS for building and distributing the iOS/Android binaries.

