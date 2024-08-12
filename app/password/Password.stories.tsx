import type { Meta, StoryObj } from "@storybook/react";
import { Password } from "./Password";

const meta: Meta<typeof Password> = {
  title: "Utilities",
  component: Password,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Password>;

export const PasswordPage: Story = {
  name: "Password generator",
};
