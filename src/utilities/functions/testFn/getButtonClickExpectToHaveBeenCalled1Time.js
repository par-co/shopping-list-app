import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function getButtonClickExpectToHaveBeenCalled1Time(
  clickFunction,
  textContent
) {
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(textContent);

  await userEvent.click(button);
  expect(clickFunction).toHaveBeenCalledTimes(1);
}
