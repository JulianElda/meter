import type { Meta, StoryObj } from "@storybook/react";
import { Speed } from "./Speed";

const meta: Meta<typeof Speed> = {
  title: "Converters",
  component: Speed,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Speed>;

export const SpeedPage: Story = {
  name: "Speed converter",
};
