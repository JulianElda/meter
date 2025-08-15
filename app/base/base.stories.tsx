import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Base from "./page";

const meta: Meta<typeof Base> = {
  component: Base,
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
type Story = StoryObj<typeof Base>;

export const BasePage: Story = {
  name: "Base converter",
};
