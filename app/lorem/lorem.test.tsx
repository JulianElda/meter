import { ReduxProvider } from "@/src/store/provider";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Lorem } from "./lorem";

describe("Lorem component", () => {
  test("generate lorem ipsum text", () => {
    render(
      <ReduxProvider>
        <Lorem loremText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </ReduxProvider>
    );
    expect(screen.getByTestId("lorem-lorem")).toBeInTheDocument();
  });
});
