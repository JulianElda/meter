import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Guid from "./page";

const meta: Meta<typeof Guid> = {
  component: Guid,
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
type Story = StoryObj<typeof Guid>;

export const GuidPage: Story = {
  name: "Guid generator",
};
