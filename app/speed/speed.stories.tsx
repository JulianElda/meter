import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Speed } from "./speed";

const meta: Meta<typeof Speed> = {
  component: Speed,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Converters",
};

export default meta;
type Story = StoryObj<typeof Speed>;

export const SpeedPage: Story = {
  name: "Speed converter",
};
