import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Area } from "./area";
import { AreaUnits } from "@/src/constants/area";

const meta: Meta<typeof Area> = {
  title: "Converters",
  component: Area,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Area>;

export const AreaPage: Story = {
  name: "Area converter",
};

export const AreaPageTest: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.clear(canvas.getByTestId("from-input"));
    await userEvent.type(canvas.getByTestId("from-input"), "1");

    await userEvent.selectOptions(
      canvas.getByTestId("from-select"),
      AreaUnits.km
    );
    await userEvent.selectOptions(
      canvas.getByTestId("result-select"),
      AreaUnits.mile
    );

    await expect(canvas.getByTestId("result-input")).toHaveValue("0.386");
  },
};
