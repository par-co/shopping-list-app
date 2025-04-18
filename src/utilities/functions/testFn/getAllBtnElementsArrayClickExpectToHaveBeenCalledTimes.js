import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function getAllBtnElementsArrayClickExpectToHaveBeenCalledTimes(
  numberOfBtnElements,
  textContent,
  clickFunction
) {
  const btnElements = screen.getAllByRole("button");
  for (let btn of btnElements) {
    expect(btn).toHaveTextContent(textContent);

    await userEvent.click(btn);
  }
  expect(clickFunction).toHaveBeenCalledTimes(numberOfBtnElements);
}
