import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import { screen } from "@testing-library/react";

export const selectOption = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const fromElement = screen.getByLabelText(target);
  await user.selectOptions(fromElement, value);
};

export const typeInput = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const inputElement = screen.getByLabelText(target);
  await user.type(inputElement, value);
};

export const expectResult = function (target: string, value: string) {
  const resultElement = screen.getByLabelText(target);
  expect(resultElement).toHaveValue(value);
};

export const expectInDocument = function (target: string) {
  const resultElement = screen.getByLabelText(target);
  expect(resultElement).toBeInTheDocument();
};

export const clearInput = function (user: UserEvent, target: string) {
  const inputElement = screen.getByLabelText(target);
  user.clear(inputElement);
};
