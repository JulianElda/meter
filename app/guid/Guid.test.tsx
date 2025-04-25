import { NotificationsProvider } from "@/src/components/notifications/notifications.context";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Guid } from "./Guid";

describe("GUID component", () => {
  test("generate a GUID", () => {
    render(
      <NotificationsProvider>
        <Guid />
      </NotificationsProvider>
    );

    expect((screen.getByTestId("guid-guid") as HTMLInputElement).value).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });

  test("generate a different GUID when refresh button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <NotificationsProvider>
        <Guid />
      </NotificationsProvider>
    );

    const firstValue = (screen.getByTestId("guid-guid") as HTMLInputElement)
      .value;

    await user.click(screen.getByTestId("guid-refresh") as HTMLButtonElement);

    expect(
      (screen.getByTestId("guid-guid") as HTMLInputElement).value
    ).not.toEqual(firstValue);
  });
});
