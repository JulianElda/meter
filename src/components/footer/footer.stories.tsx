import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storybookStoryDecorator } from "util/storybook";
import Footer from "./footer";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [(story) => storybookStoryDecorator(story)],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = function (args) {
  return <Footer />;
};

export const FooterComponent = Template.bind({});
