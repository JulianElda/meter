import type { Meta, StoryObj } from "@storybook/react";
import { Currency } from "./Currency";

const meta: Meta<typeof Currency> = {
  title: "Converters",
  component: Currency,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Currency>;

export const CurrencyPage: Story = {
  name: "Currency converter",
};
