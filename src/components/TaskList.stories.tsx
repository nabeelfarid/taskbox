import React from "react";
import { Meta, Story } from "@storybook/react";

import { TaskList, TaskListProps } from "./TaskList";
import * as TaskStories from "./Task.stories";
import { TaskModel, TaskState } from "../Models";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 1,
      title: "Task 1",
    },
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 2,
      title: "Task 2",
    },
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 3,
      title: "Task 3",
    },
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 4,
      title: "Task 4",
    },
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 5,
      title: "Task 5",
    },
    {
      ...(TaskStories.Default.args?.task as TaskModel),
      id: 6,
      title: "Task 6",
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...(Default.args.tasks?.slice(0, 5) as TaskModel[]),
    { id: 6, title: "Task 6 (pinned)", state: TaskState.TASK_PINNED },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
