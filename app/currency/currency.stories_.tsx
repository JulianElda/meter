import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Currency } from "./currency";

const meta: Meta<typeof Currency> = {
  component: Currency,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Utilities",
};

export default meta;
type Story = StoryObj<typeof Currency>;

export const CurrencyPage: Story = {
  name: "Currency converter",
};
