import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { Notifications } from "@/src/components/notifications/notifications";

import Guid from "./page";

const meta: Meta<typeof Guid> = {
  component: Guid,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
        <Notifications />
      </div>
    ),
  ],
  title: "Tests/Guid",
};

export default meta;
type Story = StoryObj<typeof Guid>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("guid-guid")).toBeInTheDocument();
    await expect(canvas.getByTestId("guid-copy")).toBeInTheDocument();
    await expect(canvas.getByTestId("guid-refresh")).toBeInTheDocument();
  },
};

export const GenerateGuid: Story = {
  name: "generate a GUID",
  play: async ({ canvas }) => {
    await expect(
      (canvas.getByTestId("guid-guid") as HTMLInputElement).value
    ).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  },
};

export const GenerateAnotherGuid: Story = {
  name: "generate a different GUID",
  play: async ({ canvas }) => {
    const initialGuid = (canvas.getByTestId("guid-guid") as HTMLInputElement)
      .value;
    canvas.getByTestId("guid-refresh").click();
    await expect(
      (canvas.getByTestId("guid-guid") as HTMLInputElement).value
    ).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
    );
    await expect(canvas.getByTestId("guid-guid")).not.toHaveValue(initialGuid);
  },
};
