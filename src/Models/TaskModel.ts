import { TaskState } from "./TaskState";

export interface TaskModel {
  id: number;
  title: string;
  state: TaskState;
  updatedAt?: Date;
}
