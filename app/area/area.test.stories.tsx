import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { AreaUnits } from "@/src/constants/area";

import Area from "./page";

const meta: Meta<typeof Area> = {
  component: Area,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Area",
};

export default meta;
type Story = StoryObj<typeof Area>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("from-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("from-select")).toBeInTheDocument();
    await expect(canvas.getByTestId("result-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("result-select")).toBeInTheDocument();
  },
};

export const AreaPageTest: Story = {
  name: "change value and units",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("from-input"));
    await userEvent.type(canvas.getByTestId("from-input"), "1.5");

    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      AreaUnits.m
    );
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      AreaUnits.yard
    );

    // 1.5 m² -> 1.794 yard²
    await expect(canvas.getByTestId("result-input")).toHaveValue("1.794");

    // change result units
    // 1.5 m² -> 16.146 ft²
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      AreaUnits.ft
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue("16.146");

    // change from units
    // 1.5 Acre -> 65340 ft²
    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      AreaUnits.acre
    );
    await expect(canvas.getByTestId("result-input")).toHaveValue("65340");
  },
};
