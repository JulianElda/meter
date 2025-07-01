import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Color } from "./color";

const meta: Meta<typeof Color> = {
  component: Color,
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
type Story = StoryObj<typeof Color>;

export const ColorPage: Story = {
  name: "Color converter",
};
