import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect } from "storybook/test";

import { Base } from "./base";

const meta: Meta<typeof Base> = {
  component: Base,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Tests/Base",
};

export default meta;
type Story = StoryObj<typeof Base>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("base-binary")).toBeInTheDocument();
    await expect(canvas.getByTestId("base-decimal")).toBeInTheDocument();
    await expect(canvas.getByTestId("base-hex")).toBeInTheDocument();

    await expect(canvas.getByTestId("base-binary")).toHaveValue("1100100");
    await expect(canvas.getByTestId("base-decimal")).toHaveValue("100");
    await expect(canvas.getByTestId("base-hex")).toHaveValue("64");
  },
};

export const ChangeBinary: Story = {
  name: "change binary",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("base-binary"));
    await userEvent.type(canvas.getByTestId("base-binary"), "1110110001010");

    await expect(canvas.getByTestId("base-binary")).toHaveValue(
      "1110110001010"
    );
    await expect(canvas.getByTestId("base-decimal")).toHaveValue("7562");
    await expect(canvas.getByTestId("base-hex")).toHaveValue("1d8a");
  },
};

export const ChangeDecimal: Story = {
  name: "change decimal",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("base-decimal"));
    await userEvent.type(canvas.getByTestId("base-decimal"), "7562");

    await expect(canvas.getByTestId("base-binary")).toHaveValue(
      "1110110001010"
    );
    await expect(canvas.getByTestId("base-decimal")).toHaveValue("7562");
    await expect(canvas.getByTestId("base-hex")).toHaveValue("1d8a");
  },
};

export const ChangeHex: Story = {
  name: "change hex",
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("base-hex"));
    await userEvent.type(canvas.getByTestId("base-hex"), "1d8a");

    await expect(canvas.getByTestId("base-binary")).toHaveValue(
      "1110110001010"
    );
    await expect(canvas.getByTestId("base-decimal")).toHaveValue("7562");
    await expect(canvas.getByTestId("base-hex")).toHaveValue("1d8a");
  },
};
