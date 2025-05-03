import { NotificationsProvider } from "@/src/components/notifications/notifications.context";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Lorem } from "./Lorem";

describe("Lorem component", () => {
  test("generate lorem ipsum text", () => {
    render(
      <NotificationsProvider>
        <Lorem loremText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </NotificationsProvider>
    );
    expect(screen.getByTestId("lorem-lorem")).toBeInTheDocument();
  });
});
