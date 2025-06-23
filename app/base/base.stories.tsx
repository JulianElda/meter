import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Base } from "./base";

const meta: Meta<typeof Base> = {
  title: "Converters",
  component: Base,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Base>;

export const BasePage: Story = {
  name: "Base converter",
};
