import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Length } from "./length";

const meta: Meta<typeof Length> = {
  component: Length,
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
type Story = StoryObj<typeof Length>;

export const LengthPage: Story = {
  name: "Length converter",
};
