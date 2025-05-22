import type { Meta, StoryObj } from "@storybook/react";
import { Weight } from "./weight";

const meta: Meta<typeof Weight> = {
  title: "Converters",
  component: Weight,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Weight>;

export const WeightPage: Story = {
  name: "Weight converter",
};
