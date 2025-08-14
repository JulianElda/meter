import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Lorem } from "./lorem";

describe("Lorem component", () => {
  test("generate lorem ipsum text", () => {
    render(
      <Lorem loremText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    );
    expect(screen.getByTestId("lorem-lorem")).toBeInTheDocument();
  });
});
