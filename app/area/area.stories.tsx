import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Area } from "./area";

const meta: Meta<typeof Area> = {
  component: Area,
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
type Story = StoryObj<typeof Area>;

export const AreaPage: Story = {
  name: "Area converter",
};
