import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function getCheckboxByLabelTextClickExpectToHaveBeenCalled1Time(
  labelText,
  clickFunction
) {
  const checkbox = screen.getByLabelText(labelText);
  await userEvent.click(checkbox);
  expect(clickFunction).toHaveBeenCalledTimes(1);
}
