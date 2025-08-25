import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { Bmi } from "./bmi";

const meta: Meta<typeof Bmi> = {
  component: Bmi,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/BMI",
};

export default meta;
type Story = StoryObj<typeof Bmi>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("height-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("height-select")).toBeInTheDocument();
    await expect(canvas.getByTestId("weight-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("weight-select")).toBeInTheDocument();
    await expect(canvas.getByTestId("bmi-bmi")).toBeInTheDocument();
    await expect(canvas.getByTestId("bmi-category")).toBeInTheDocument();
  },
};
