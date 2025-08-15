import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

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
  title: "Tests/QR Code",
};

export default meta;
type Story = StoryObj<typeof QrCode>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("qrcode-url")).toBeInTheDocument();
    await expect(canvas.getByTestId("qrcode-url-button")).toBeInTheDocument();
  },
};

export const GenerateSvg: Story = {
  name: "generate SVG",
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByTestId("qrcode-url-button"));
    await expect(canvas.getByTestId("qrcode-canvas")).toBeInTheDocument();
  },
};
