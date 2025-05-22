import { Notifications } from "@/src/components/notifications/notifications";
import { ReduxProvider } from "@/src/store/provider";
import type { Meta, StoryObj } from "@storybook/react";
import { Lorem } from "./Lorem";
import { loremText } from "./Lorem.data";

const meta: Meta<typeof Lorem> = {
  title: "Utilities",
  component: Lorem,
  decorators: [
    (Story) => (
      <ReduxProvider>
        <div className="max-w-md text-lg">
          <Story />
        </div>
        <Notifications />
      </ReduxProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Lorem>;

export const LoremPage: Story = {
  name: "Lorem generator",
  args: {
    loremText,
  },
};
