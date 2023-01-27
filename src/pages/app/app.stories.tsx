import { ComponentStory, ComponentMeta } from "@storybook/react";

import App from "./app";

export default {
  title: "Components/App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = function () {
  return <App />;
};

export const AppComponent = Template.bind({});
