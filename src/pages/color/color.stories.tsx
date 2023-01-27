import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MAX_WIDTH } from "consts";
import Color from "./color";

export default {
  title: "Components/Color",
  component: Color,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = function () {
  return <Color />;
};

export const ColorComponent = Template.bind({});
