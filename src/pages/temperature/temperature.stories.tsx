import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storybookStoryDecorator } from "util/storybook";
import Temperature from "./temperature";

export default {
  title: "Components/Temperature",
  component: Temperature,
  decorators: [(story) => storybookStoryDecorator(story)],
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = function () {
  return <Temperature />;
};

export const TemperatureComponent = Template.bind({});
