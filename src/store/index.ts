import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./GameSlice";

export const store = configureStore({
  reducer: {
    info: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;