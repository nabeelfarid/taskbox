import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
let store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {diariesApp: DiariesAppState}
export type AppDispatch = typeof store.dispatch;
