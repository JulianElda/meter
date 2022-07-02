import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import { screen } from "@testing-library/react";

export const selectOptionFrom = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const fromElement = screen.getByLabelText(target);
  await user.selectOptions(fromElement, value);
};

export const selectOptionTo = async function (
  user: UserEvent,
  target: string,
  value: string
) {
  const toElement = screen.getByLabelText(target);
  await user.selectOptions(toElement, value);
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
