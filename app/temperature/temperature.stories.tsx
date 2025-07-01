import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Temperature } from "./temperature";

const meta: Meta<typeof Temperature> = {
  component: Temperature,
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
type Story = StoryObj<typeof Temperature>;

export const TemperaturePage: Story = {
  name: "Temperature converter",
};
