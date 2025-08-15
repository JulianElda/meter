import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import Color from "./page";

const meta: Meta<typeof Color> = {
  component: Color,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Color",
};

export default meta;
type Story = StoryObj<typeof Color>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("color-hex")).toBeInTheDocument();
    await expect(canvas.getByTestId("color-rgb")).toBeInTheDocument();
    await expect(canvas.getByTestId("color-hsl")).toBeInTheDocument();

    await expect(canvas.getByTestId("color-hex")).toHaveValue("#DC143C");
    await expect(canvas.getByTestId("color-rgb")).toHaveValue("64, 75, 10");
    await expect(canvas.getByTestId("color-hsl")).toHaveValue("348, 83%, 47%");
  },
};

export const ChangeHex: Story = {
  name: "change hex",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("color-hex"));
    await userEvent.type(canvas.getByTestId("color-hex"), "#AFDBF6");

    await expect(canvas.getByTestId("color-hex")).toHaveValue("#AFDBF6");
    await expect(canvas.getByTestId("color-rgb")).toHaveValue("175, 219, 246");
    await expect(canvas.getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
  },
};

export const ChangeRgb: Story = {
  name: "change rgb",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("color-rgb"));
    await userEvent.type(canvas.getByTestId("color-rgb"), "175, 219, 246");

    await expect(canvas.getByTestId("color-hex")).toHaveValue("#AFDBF6");
    await expect(canvas.getByTestId("color-rgb")).toHaveValue("175, 219, 246");
    await expect(canvas.getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
  },
};

export const ChangeHsl: Story = {
  name: "change hsl",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("color-hsl"));
    await userEvent.type(canvas.getByTestId("color-hsl"), "203, 80%, 83%");

    await expect(canvas.getByTestId("color-hex")).toHaveValue("#B1DCF6");
    await expect(canvas.getByTestId("color-rgb")).toHaveValue("177, 220, 246");
    await expect(canvas.getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
  },
};
