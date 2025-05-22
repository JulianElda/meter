import type { Meta, StoryObj } from "@storybook/react";
import { Volume } from "./volume";

const meta: Meta<typeof Volume> = {
  title: "Converters",
  component: Volume,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Volume>;

export const VolumePage: Story = {
  name: "Volume converter",
};
