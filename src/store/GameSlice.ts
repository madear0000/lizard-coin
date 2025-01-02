import { createSlice } from "@reduxjs/toolkit";

const baseLevelScore: number = 25;
const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i));

export const levelScores = levels.map((_, level) => {
  let sum = 0;
  for (let [index, value] of levels.entries()) {
    if (index >= level) {
      return sum + value;
    }
    sum += value;
  }
  return sum;
});

interface ScoreState {
  score: number;
  currentScore?: number;
  level: number;
}

const initialState: ScoreState = {
  score: 0,
  level: 1,
  currentScore: 0,
};

const gameSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    plusScore: (state) => {
      state.score += 1;
    },
    currentScore: (state) => {
      const levelIndex = state.level - 1;
      const previousLevelScore =
        levelIndex > 0 ? levelScores[levelIndex - 1] : 0;
      state.currentScore = state.score - previousLevelScore;
    },
    level: (state) => {
      const levelIndex = state.level - 1;
      const maxScoreForLevel = levelScores[levelIndex];

      if ((state.currentScore ?? 0) >= maxScoreForLevel) {
        state.level += 1;
        state.currentScore = 0;
      }
    },
  },
});

export const { plusScore, currentScore, level } = gameSlice.actions;
export default gameSlice.reducer;
