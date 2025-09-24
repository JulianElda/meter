import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WhatsAppLink } from "./whatsapp-link";

const meta: Meta<typeof WhatsAppLink> = {
  component: WhatsAppLink,
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
type Story = StoryObj<typeof WhatsAppLink>;

export const WhatsAppLinkPage: Story = {
  name: "WhatsAppLink generator",
};
