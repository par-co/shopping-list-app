import { screen } from "@testing-library/react";
import generateArrayOfUniqueStrings from "../generateArrayOfUniqueStrings";

export default function getEachCheckboxByLabelTextExpectToBeInTheDocument(
  numberOfCheckboxes
) {
  const allLabelText = generateArrayOfUniqueStrings(numberOfCheckboxes);
  allLabelText.forEach(labelText => {
    const checkbox = screen.getByLabelText(labelText);
    expect(checkbox).toBeInTheDocument();
  });
}
