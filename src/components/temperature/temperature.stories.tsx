import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MAX_WIDTH } from "consts";
import Temperature from "./temperature";

export default {
  title: "Components/Temperature",
  component: Temperature,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = function () {
  return <Temperature />;
};

export const TemperatureComponent = Template.bind({});
