import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { WeightUnits } from "@/src/constants/weight";

import { Weight } from "./weight";

const meta: Meta<typeof Weight> = {
  component: Weight,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Weight",
};

export default meta;
type Story = StoryObj<typeof Weight>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("from-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("from-select")).toBeInTheDocument();
    await expect(canvas.getByTestId("result-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("result-select")).toBeInTheDocument();
  },
};

export const ChangeInputAmount: Story = {
  name: "change input amount",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("from-input"));
    await userEvent.type(canvas.getByTestId("from-input"), "200");

    await expect(canvas.getByTestId("from-input")).toHaveValue(200);
    await expect(canvas.getByTestId("result-input")).toHaveValue(440.925);
  },
};

export const ChangeInputUnits: Story = {
  name: "change input units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      WeightUnits.stone
    );

    await expect(canvas.getByTestId("from-select")).toHaveValue(
      WeightUnits.stone
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(1400);
  },
};

export const ChangeResultUnits: Story = {
  name: "change result units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      WeightUnits.stone
    );

    await expect(canvas.getByTestId("result-select")).toHaveValue(
      WeightUnits.stone
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(15.747);
  },
};
