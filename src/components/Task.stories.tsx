import { Meta, Story } from "@storybook/react";
import React from "react";
import { Task, TaskProps } from "./Task";
import { TaskState, TaskModel } from "../Models";

export default {
  component: Task,
  title: "Task",
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

const defaultTaskModel: TaskModel = {
  id: 1,
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2018, 0, 1, 9, 0).getTime(),
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

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...defaultTaskModel,
    title: longTitleString,
  },
};
