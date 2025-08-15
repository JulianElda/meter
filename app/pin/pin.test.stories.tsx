import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

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
  title: "Tests/Pin",
};

export default meta;
type Story = StoryObj<typeof Pin>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("pin-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("pin-pin")).toBeInTheDocument();
    await expect(canvas.getByTestId("pin-copy")).toBeInTheDocument();
    await expect(canvas.getByTestId("pin-refresh")).toBeInTheDocument();
  },
};

export const GeneratePin: Story = {
  name: "generate initial 4 digit PIN",
  play: async ({ canvas }) => {
    await expect(
      (canvas.getByTestId("pin-pin") as HTMLInputElement).value
    ).toMatch(/^\d{4}$/);
  },
};

export const GenerateAnotherGuid: Story = {
  name: "generate a different PIN",
  play: async ({ canvas }) => {
    const initialPin = (canvas.getByTestId("pin-pin") as HTMLInputElement)
      .value;
    canvas.getByTestId("pin-refresh").click();
    await expect(
      (canvas.getByTestId("pin-pin") as HTMLInputElement).value
    ).toMatch(/^\d{4}$/);
    await expect(canvas.getByTestId("pin-pin")).not.toHaveValue(initialPin);
  },
};
