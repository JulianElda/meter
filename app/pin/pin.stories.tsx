import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Notifications } from "@/src/components/notifications/notifications";

import { Pin } from "./pin";

const meta: Meta<typeof Pin> = {
  component: Pin,
  decorators: [
    (Story) => (
      <>
        <div className="max-w-md text-lg">
          <Story />
        </div>
        <Notifications />
      </>
    ),
  ],
  title: "Utilities",
};

export default meta;
type Story = StoryObj<typeof Pin>;

export const PinPage: Story = {
  name: "PIN generator",
};
