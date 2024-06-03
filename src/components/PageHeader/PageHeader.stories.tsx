import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "./PageHeader";

export default {
  title: "Components/Header",
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = function () {
  return <PageHeader title="meter" />;
};

export const HeaderComponent = Template.bind({});
