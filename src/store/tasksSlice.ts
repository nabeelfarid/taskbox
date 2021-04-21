import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskModel, TaskState } from "../Models";
import type { RootState } from "./store";

const initialState: TaskModel[] = [
  { id: 1, title: "Something", state: TaskState.TASK_INBOX },
  { id: 2, title: "Something more", state: TaskState.TASK_INBOX },
  { id: 3, title: "Something else", state: TaskState.TASK_INBOX },
  { id: 4, title: "Something again", state: TaskState.TASK_INBOX },
];

// `createSlice` will infer the state type from the `initialState` argument
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    pinTask: (state, { payload }: PayloadAction<TaskModel>) => {
      let task = state.find((task) => task.id === payload.id);
      if (task) {
        task.state = TaskState.TASK_PINNED;
      }
    },
    archiveTask: (state, { payload }: PayloadAction<TaskModel>) => {
      let task = state.find((task) => task.id === payload.id);
      if (task) {
        task.state = TaskState.TASK_ARCHIVED;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { pinTask, archiveTask } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDiariesAppState = (state: RootState) => state.tasks;

export default tasksSlice;
