import type { Meta, StoryObj } from "@storybook/react";
import { Length } from "./Length";

const meta: Meta<typeof Length> = {
  title: "Converters",
  component: Length,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Length>;

export const LengthPage: Story = {
  name: "Length converter",
};
