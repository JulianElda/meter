import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

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
  title: "Tests/Lorem",
};

export default meta;
type Story = StoryObj<typeof Lorem>;

export const TestElements: Story = {
  args: {
    loremText,
  },
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("lorem-words")).toBeInTheDocument();
    await expect(canvas.getByTestId("lorem-lorem")).toBeInTheDocument();
    await expect(canvas.getByTestId("lorem-copy")).toBeInTheDocument();
  },
};
