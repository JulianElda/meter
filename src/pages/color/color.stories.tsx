import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storybookStoryDecorator } from "util/storybook";
import Color from "./color";

export default {
  title: "Components/Color",
  component: Color,
  decorators: [(story) => storybookStoryDecorator(story)],
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = function () {
  return <Color />;
};

export const ColorComponent = Template.bind({});
