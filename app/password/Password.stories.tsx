import { Notifications } from "@/src/components/notifications/notifications";
import { ReduxProvider } from "@/src/store/provider";
import type { Meta, StoryObj } from "@storybook/react";
import { Password } from "./Password";

const meta: Meta<typeof Password> = {
  title: "Utilities",
  component: Password,
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
type Story = StoryObj<typeof Password>;

export const PasswordPage: Story = {
  name: "Password generator",
};
