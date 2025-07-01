import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Notifications } from "@/src/components/notifications/notifications";
import { ReduxProvider } from "@/src/store/provider";

import { Password } from "./password";

const meta: Meta<typeof Password> = {
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
  title: "Utilities",
};

export default meta;
type Story = StoryObj<typeof Password>;

export const PasswordPage: Story = {
  name: "Password generator",
};
