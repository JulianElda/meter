import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storybookStoryDecorator } from "src/util/storybook";
import Length from "./length";

export default {
  title: "Components/Length",
  component: Length,
  decorators: [(story) => storybookStoryDecorator(story)],
} as ComponentMeta<typeof Length>;

const Template: ComponentStory<typeof Length> = function () {
  return <Length />;
};

export const LengthComponent = Template.bind({});
