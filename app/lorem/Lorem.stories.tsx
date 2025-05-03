import { Notifications } from "@/src/components/notifications/notifications";
import { NotificationsProvider } from "@/src/components/notifications/notifications.context";
import type { Meta, StoryObj } from "@storybook/react";
import { Lorem } from "./Lorem";
import { loremText } from "./Lorem.data";

const meta: Meta<typeof Lorem> = {
  title: "Utilities",
  component: Lorem,
  decorators: [
    (Story) => (
      <NotificationsProvider>
        <div className="max-w-md text-lg">
          <Story />
        </div>
        <Notifications />
      </NotificationsProvider>
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
