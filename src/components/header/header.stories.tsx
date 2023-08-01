import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storybookStoryDecorator } from "util/storybook";
import Header from "./header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [(story) => storybookStoryDecorator(story)],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function (args) {
  return <Header title="meter" />;
};

export const HeaderComponent = Template.bind({});
