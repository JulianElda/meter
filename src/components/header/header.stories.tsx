import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function () {
  return <Header title="meter" />;
};

export const HeaderComponent = Template.bind({});
