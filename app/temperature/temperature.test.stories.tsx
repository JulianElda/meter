import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { Temperature } from "./temperature";

const meta: Meta<typeof Temperature> = {
  component: Temperature,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Temperature",
};

export default meta;
type Story = StoryObj<typeof Temperature>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("celcius-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("fahrenheit-input")).toBeInTheDocument();
    await expect(canvas.getByTestId("kelvin-input")).toBeInTheDocument();
  },
};

// 100 C = 212 F = 373.15 K
export const ChangeCelcius: Story = {
  name: "change Celcius",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("celcius-input"));
    await userEvent.type(canvas.getByTestId("celcius-input"), "100");

    await expect(canvas.getByTestId("celcius-input")).toHaveValue(100);
    await expect(canvas.getByTestId("fahrenheit-input")).toHaveValue(212);
    await expect(canvas.getByTestId("kelvin-input")).toHaveValue(373.15);
  },
};

// 37.778 C = 100 F = 310.928 K
export const ChangeFahrenheit: Story = {
  name: "change Fahrenheit",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("fahrenheit-input"));
    await userEvent.type(canvas.getByTestId("fahrenheit-input"), "100");

    await expect(canvas.getByTestId("celcius-input")).toHaveValue(37.778);
    await expect(canvas.getByTestId("fahrenheit-input")).toHaveValue(100);
    await expect(canvas.getByTestId("kelvin-input")).toHaveValue(310.928);
  },
};

// -173.150 C = -279.670 F = 100 K
export const ChangeKelvin: Story = {
  name: "change Kelvin",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("kelvin-input"));
    await userEvent.type(canvas.getByTestId("kelvin-input"), "100");

    await expect(canvas.getByTestId("celcius-input")).toHaveValue(-173.15);
    await expect(canvas.getByTestId("fahrenheit-input")).toHaveValue(-279.67);
    await expect(canvas.getByTestId("kelvin-input")).toHaveValue(100);
  },
};
