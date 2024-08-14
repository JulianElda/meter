import type { Meta, StoryObj } from "@storybook/react";
import { RsaKeyPairGenerator } from "./RsaKeyPairGenerator";

const meta: Meta<typeof RsaKeyPairGenerator> = {
  title: "Utilities",
  component: RsaKeyPairGenerator,
  decorators: [
    (Story) => (
      <div className="max-w-xl text-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RsaKeyPairGenerator>;

export const RsaKeyPairGeneratorPage: Story = {
  name: "RSA key pair generator",
};
