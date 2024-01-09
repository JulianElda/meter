import { ComponentStory, ComponentMeta } from "@storybook/react";
import Color from "./color";

export default {
  title: "Components/Color",
  component: Color,
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = function () {
  return <Color />;
};

export const ColorComponent = Template.bind({});
