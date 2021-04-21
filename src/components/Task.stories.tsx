import { Meta, Story } from "@storybook/react";
import React from "react";
import { Task, TaskProps, TaskState, TaskModel } from "./Task";

export default {
  component: Task,
  title: "Task",
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

const defaultTaskModel: TaskModel = {
  id: 1,
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const Default = Template.bind({});
Default.args = {
  task: defaultTaskModel,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...defaultTaskModel,
    state: TaskState.TASK_PINNED,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...defaultTaskModel,
    state: TaskState.TASK_ARCHIVED,
  },
};
