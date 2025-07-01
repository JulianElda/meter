import type { UserEvent } from "@testing-library/user-event";

import { screen } from "@testing-library/react";
import { expect } from "vitest";

export const clearInput = function (user: UserEvent, target: string) {
  const inputElement = screen.getByTestId(target);
  user.clear(inputElement);
};

export const selectOption = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const selectElement = screen.getByTestId(target);
  await user.selectOptions(selectElement, value);
};

export const typeInput = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const inputElement = screen.getByTestId(target);
  await user.type(inputElement, value);
};

export const expectValue = function (target: string, value: string) {
  const resultElement = screen.getByTestId(target);
  expect(resultElement).toHaveValue(value);
};

export const expectInDocument = function (target: string) {
  const resultElement = screen.getByTestId(target);
  expect(resultElement).toBeInTheDocument();
};

export const expectAttribute = function (
  target: string,
  attribute: string,
  value: string
) {
  const resultElement = screen.getByTestId(target);
  expect(resultElement).toHaveAttribute(attribute, value);
};
