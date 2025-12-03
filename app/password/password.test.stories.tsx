import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect, fireEvent } from "storybook/test";

import { Notifications } from "@/src/components/notifications/notifications";

import { Password } from "./password";

const meta: Meta<typeof Password> = {
  component: Password,
  decorators: [
    (Story) => (
      <>
        <div className="max-w-md text-lg">
          <Story />
        </div>
        <Notifications />
      </>
    ),
  ],
  title: "Tests/Password",
};

export default meta;
type Story = StoryObj<typeof Password>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("password-numbers")).toBeInTheDocument();
    await expect(canvas.getByTestId("password-special")).toBeInTheDocument();
    await expect(canvas.getByTestId("password-length")).toBeInTheDocument();
    await expect(canvas.getByTestId("password-password")).toBeInTheDocument();
    await expect(canvas.getByTestId("password-copy")).toBeInTheDocument();
    await expect(canvas.getByTestId("password-refresh")).toBeInTheDocument();
  },
};

export const ChangePasswordLength: Story = {
  name: "change length",
  play: async ({ canvas }) => {
    const initialPassword = (
      canvas.getByTestId("password-password") as HTMLInputElement
    ).value;

    await fireEvent.input(canvas.getByTestId("password-length"), {
      target: { value: "32" },
    });

    await expect(canvas.getByTestId("password-password")).not.toHaveValue(
      initialPassword
    );
    await expect(
      (canvas.getByTestId("password-password") as HTMLInputElement).value
    ).toHaveLength(32);
  },
};

export const ChangeNumeral: Story = {
  name: "change numerals",
  play: async ({ canvas, userEvent }) => {
    const initialPassword = (
      canvas.getByTestId("password-password") as HTMLInputElement
    ).value;

    await userEvent.click(canvas.getByTestId("password-numbers"));
    await userEvent.click(canvas.getByTestId("password-numbers"));

    await expect(canvas.getByTestId("password-password")).not.toHaveValue(
      initialPassword
    );
    await expect(
      (canvas.getByTestId("password-password") as HTMLInputElement).value
    ).toMatch(/[\d]/);
  },
};

export const ChangeUppercase: Story = {
  name: "change uppercase",
  play: async ({ canvas, userEvent }) => {
    const initialPassword = (
      canvas.getByTestId("password-password") as HTMLInputElement
    ).value;

    await userEvent.click(canvas.getByTestId("password-uppercase"));
    await userEvent.click(canvas.getByTestId("password-uppercase"));

    await expect(canvas.getByTestId("password-password")).not.toHaveValue(
      initialPassword
    );
    await expect(
      (canvas.getByTestId("password-password") as HTMLInputElement).value
    ).toMatch(/[A-Z]/);
  },
};

export const ChangeSpecial: Story = {
  name: "change special characters",
  play: async ({ canvas, userEvent }) => {
    const initialPassword = (
      canvas.getByTestId("password-password") as HTMLInputElement
    ).value;

    await userEvent.click(canvas.getByTestId("password-special"));

    await expect(canvas.getByTestId("password-password")).not.toHaveValue(
      initialPassword
    );
    await expect(
      (canvas.getByTestId("password-password") as HTMLInputElement).value
    ).toMatch(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/);
  },
};

export const GenerateAnotherPassword: Story = {
  name: "generate another password",
  play: async ({ canvas, userEvent }) => {
    const initialPassword = (
      canvas.getByTestId("password-password") as HTMLInputElement
    ).value;

    await userEvent.click(canvas.getByTestId("password-refresh"));

    await expect(canvas.getByTestId("password-password")).not.toHaveValue(
      initialPassword
    );
  },
};
