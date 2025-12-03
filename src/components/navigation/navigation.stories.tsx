import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Navigation } from "./navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: "Components/Navigation",
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
};
