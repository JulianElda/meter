import type { Meta, StoryObj } from "@storybook/react";
import Color from "./color";

const meta: Meta<typeof Color> = {
  title: "Converters",
  component: Color,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Color>;

export const ColorPage: Story = {
  name: "Color converter",
};
