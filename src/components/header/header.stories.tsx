import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MAX_WIDTH } from "consts";
import Header from "./header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function (args) {
  return <Header />;
};

export const HeaderComponent = Template.bind({});
