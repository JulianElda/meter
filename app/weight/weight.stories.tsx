import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Weight } from "./weight";

const meta: Meta<typeof Weight> = {
  component: Weight,
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
type Story = StoryObj<typeof Weight>;

export const WeightPage: Story = {
  name: "Weight converter",
};
