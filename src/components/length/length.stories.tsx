import { ComponentStory, ComponentMeta } from "@storybook/react";

import Length from "./length";

export default {
  title: "Components/Length",
  component: Length,
} as ComponentMeta<typeof Length>;

const Template: ComponentStory<typeof Length> = function () {
  return <Length />;
};

export const LengthComponent = Template.bind({});
