import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MAX_WIDTH } from "consts";
import Footer from "./footer";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = function (args) {
  return <Footer />;
};

export const FooterComponent = Template.bind({});
