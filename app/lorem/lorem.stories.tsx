import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Notifications } from "@/src/components/notifications/notifications";

import { Lorem } from "./lorem";
import { loremText } from "./lorem.data";

const meta: Meta<typeof Lorem> = {
  component: Lorem,
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
type Story = StoryObj<typeof Lorem>;

export const LoremPage: Story = {
  args: {
    loremText,
  },
  name: "Lorem generator",
};
