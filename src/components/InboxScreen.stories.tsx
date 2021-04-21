import React from "react";
import { Meta, Story } from "@storybook/react";
import { InboxScreen, InboxScreenProps } from "./InboxScreen";
import { Provider } from "react-redux";
import store from "../store/store";
import * as TaskListStories from "./TaskList.stories";
import { setTasks } from "../store/tasksSlice";
import { TaskModel } from "../Models";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [
    (story) => {
      store.dispatch(
        setTasks(TaskListStories.Default.args?.tasks as TaskModel[])
      );

      return <Provider store={store}>{story()}</Provider>;
    },
  ],
} as Meta;

const Template: Story<InboxScreenProps> = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
