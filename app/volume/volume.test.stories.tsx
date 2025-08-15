import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { VolumeUnits } from "@/src/constants/volume";

import { Volume } from "./volume";

const meta: Meta<typeof Volume> = {
  component: Volume,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Volume",
};

export default meta;
type Story = StoryObj<typeof Volume>;

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
    await expect(canvas.getByTestId("result-input")).toHaveValue(6762.805);
  },
};

export const ChangeInputUnits: Story = {
  name: "change input units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      VolumeUnits.imperial_gallon
    );

    await expect(canvas.getByTestId("from-select")).toHaveValue(
      VolumeUnits.imperial_gallon
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(15_372.159);
  },
};

export const ChangeResultUnits: Story = {
  name: "change result units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      VolumeUnits.imperial_gallon
    );

    await expect(canvas.getByTestId("result-select")).toHaveValue(
      VolumeUnits.imperial_gallon
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(21.997);
  },
};
