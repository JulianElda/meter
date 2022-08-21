import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MAX_WIDTH } from "consts";
import Length from "./length";

export default {
  title: "Components/Length",
  component: Length,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Length>;

const Template: ComponentStory<typeof Length> = function () {
  return <Length />;
};

export const LengthComponent = Template.bind({});
