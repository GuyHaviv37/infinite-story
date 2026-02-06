## Product Requirement Document (PRD): Project "Chronicle AI"

### 1. Executive Summary

Chronicle AI is a dynamic, text-based RPG mobile app where a large language model (LLM) acts as the Dungeon Master. Unlike traditional RPGs with pre-written scripts, every story path is generated on the fly based on player class, stats, and previous choices.

### 2. Target Audience

- **Tabletop Enthusiasts**: People who love D&D but don't always have a group to play with.
- **Commuter Gamers**: Users looking for a deep story experience in short, 5-minute sessions.

### 3. Functional Requirements

#### 3.1 Character Engine

- **Classes**: Four starting archetypes:
  - **Warrior**: High Strength (`STR`).
  - **Sage**: High Intelligence (`INT`).
  - **Artisan**: High Creativeness (`CRT`).
  - **Gambler**: High Luck (`LCK`).

- **Attributes**: Numerical values that influence success rates in story events.

#### 3.2 The Game Loop (The "Chronicle")

- **Narrative Generation**: The AI provides a story block based on the current world state.
- **Interactive Choices**: The AI provides 3–4 options. Each option is tied to a specific attribute (e.g., "Bribe the guard" uses `LCK`).
- **Resolution Logic**: The app calculates success/failure using a standard \( d20 \) system:

  \[
  \text{Success} = (1d20 + \text{Attribute\_Score}) \ge \text{Difficulty\_Threshold}
  \]

- **Progression**: Successful attribute-based choices slightly increase that specific attribute's score.

#### 3.3 State Management & Continuity

- **Persistence**: All game states (HP, Inventory, Story History) are saved in real-time.
- **Chapterization**: To prevent LLM context drift, stories are broken into "Chapters." Each chapter ends with a summary that is fed into the next, discarding the granular details of the previous 20 steps.

#### 3.4 Monetization (Freemium)

- **Free Tier**: Access to 1 active campaign slot.
- **Pro Tier**: Unlimited campaign slots and "Legacy" items (items that carry over between games).
