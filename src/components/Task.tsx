import React from "react";
import { TaskModel, TaskState } from "../Models";

export interface TaskProps {
  task: TaskModel;
  onArchiveTask: (id: number) => void;
  onPinTask: (id: number) => void;
}

export const Task: React.FC<TaskProps> = ({
  task,
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          // defaultChecked={task.state === TaskState.TASK_ARCHIVED}
          disabled={true}
          name="checked"
          checked={task.state === TaskState.TASK_ARCHIVED}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(task.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
