import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FOOTER_LABEL, MAX_WIDTH, REPO_URL } from "consts";
import Footer from "./footer";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (story) => <div className={"app-card " + MAX_WIDTH}>{story()}</div>,
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = function (args) {
  return <Footer {...args} />;
};

export const FooterComponent = Template.bind({});
FooterComponent.args = {
  label: FOOTER_LABEL,
  repoUrl: REPO_URL,
};
