import type { Meta, StoryObj } from "@storybook/react";
import { Temperature } from "./temperature";

const meta: Meta<typeof Temperature> = {
  title: "Converters",
  component: Temperature,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Temperature>;

export const TemperaturePage: Story = {
  name: "Temperature converter",
};
