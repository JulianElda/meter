import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { LengthUnits } from "@/src/constants/length";

import Length from "./page";

const meta: Meta<typeof Length> = {
  component: Length,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Length",
};

export default meta;
type Story = StoryObj<typeof Length>;

export const ShowElements: Story = {
  name: "show elements",
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
    await expect(canvas.getByTestId("result-input")).toHaveValue(124.274);
  },
};

export const ChangeInputUnits: Story = {
  name: "change input units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      LengthUnits.yard
    );

    await expect(canvas.getByTestId("from-select")).toHaveValue(
      LengthUnits.yard
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(0.057);
  },
};

export const ChangeResultUnits: Story = {
  name: "change result units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      LengthUnits.ft
    );

    await expect(canvas.getByTestId("result-select")).toHaveValue(
      LengthUnits.ft
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(328_083.99);
  },
};
