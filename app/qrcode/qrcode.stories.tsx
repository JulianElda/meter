import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { QrCode } from "./qrcode";

const meta: Meta<typeof QrCode> = {
  component: QrCode,
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
type Story = StoryObj<typeof QrCode>;

export const QrcodePage: Story = {
  name: "QR Code generator",
};
