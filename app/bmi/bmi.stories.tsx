import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Bmi } from "./bmi";

const meta: Meta<typeof Bmi> = {
  component: Bmi,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Utilities",
};

export default meta;
type Story = StoryObj<typeof Bmi>;

export const BmiPage: Story = {
  name: "Bmi calculator",
};
