import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import generateArrayOfUniqueStrings from "../generateArrayOfUniqueStrings";

export default async function getEachCheckboxByLabelTextClickExpectToHaveBeenCalledTimes(
  numberOfCheckboxes,
  clickFunction
) {
  const allLabelText = generateArrayOfUniqueStrings(numberOfCheckboxes);
  for (let labelText of allLabelText) {
    const checkbox = screen.getByLabelText(labelText);
    await userEvent.click(checkbox);
  }
  expect(clickFunction).toHaveBeenCalledTimes(numberOfCheckboxes);
}
