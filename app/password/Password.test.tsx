import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Password } from "./Password";
import { NotificationsProvider } from "@/src/components/notifications/notifications.context";

const PASSWORD_LABEL = "password-password";
const PASSWORD_LENGTH = "password-length";
const PASSWORD_NUMBERS = "password-numbers";
const PASSWORD_UPPERCASE = "password-uppercase";
const PASSWORD_SPECIAL = "password-special";

describe("Password component", () => {
  test("generate 16-length password", async () => {
    render(
      <NotificationsProvider>
        <Password />
      </NotificationsProvider>
    );
    expect(
      (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement).value
    ).toHaveLength(16);
  });

  test.skip("generate a new password when length is changed", async () => {
    const user = userEvent.setup();
    render(
      <NotificationsProvider>
        <Password />
      </NotificationsProvider>
    );

    const firstValue = (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement)
      .value;

    await user.type(screen.getByTestId(PASSWORD_LENGTH), "8");

    expect(
      (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement).value
    ).not.toEqual(firstValue);
  });

  test("generate a new password when numerals is changed", async () => {
    const user = userEvent.setup();
    render(
      <NotificationsProvider>
        <Password />
      </NotificationsProvider>
    );

    const firstValue = (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement)
      .value;

    await user.click(screen.getByTestId(PASSWORD_NUMBERS));

    expect(
      (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement).value
    ).not.toEqual(firstValue);
  });

  test("generate a new password when uppercase is changed", async () => {
    const user = userEvent.setup();
    render(
      <NotificationsProvider>
        <Password />
      </NotificationsProvider>
    );

    const firstValue = (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement)
      .value;

    await user.click(screen.getByTestId(PASSWORD_UPPERCASE));

    expect(
      (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement).value
    ).not.toEqual(firstValue);
  });

  test("generate a new password when special character is changed", async () => {
    const user = userEvent.setup();
    render(
      <NotificationsProvider>
        <Password />
      </NotificationsProvider>
    );

    const firstValue = (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement)
      .value;

    await user.click(screen.getByTestId(PASSWORD_SPECIAL));

    expect(
      (screen.getByTestId(PASSWORD_LABEL) as HTMLInputElement).value
    ).not.toEqual(firstValue);
  });
});
