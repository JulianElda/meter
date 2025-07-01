import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Volume } from "./volume";

const meta: Meta<typeof Volume> = {
  component: Volume,
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
type Story = StoryObj<typeof Volume>;

export const VolumePage: Story = {
  name: "Volume converter",
};
