import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { SpeedUnits } from "@/src/constants/speed";

import { Speed } from "./speed";

const meta: Meta<typeof Speed> = {
  component: Speed,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Speed",
};

export default meta;
type Story = StoryObj<typeof Speed>;

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
    await expect(canvas.getByTestId("result-input")).toHaveValue(321.869);
  },
};

export const ChangeInputUnits: Story = {
  name: "change input units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      SpeedUnits.m_s
    );

    await expect(canvas.getByTestId("from-select")).toHaveValue(SpeedUnits.m_s);
    await expect(canvas.getByTestId("result-input")).toHaveValue(360);
  },
};

export const ChangeResultUnits: Story = {
  name: "change result units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      SpeedUnits.m_s
    );

    await expect(canvas.getByTestId("result-select")).toHaveValue(
      SpeedUnits.m_s
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue(44.704);
  },
};
