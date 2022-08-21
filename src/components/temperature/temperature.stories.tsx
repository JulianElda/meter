import { ComponentStory, ComponentMeta } from "@storybook/react";

import Temperature from "./temperature";

export default {
  title: "Components/Temperature",
  component: Temperature,
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = function () {
  return <Temperature />;
};

export const TemperatureComponent = Template.bind({});
