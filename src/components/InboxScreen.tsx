import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { archiveTask, pinTask, selectTasksState } from "../store/tasksSlice";

import { TaskList } from "./TaskList";

export interface InboxScreenProps {
  error?: string;
}

export const InboxScreen: React.FC<InboxScreenProps> = ({ error }) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasksState);

  const pinTaskHandler = (id: number) => {
    dispatch(pinTask(id));
  };

  const archiveTaskHandler = (id: number) => {
    dispatch(archiveTask(id));
  };

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList
        tasks={tasks}
        onPinTask={pinTaskHandler}
        onArchiveTask={archiveTaskHandler}
      />
    </div>
  );
};
