import { screen } from "@testing-library/react";
import generateArrayOfUniqueStrings from "../generateArrayOfUniqueStrings";

export default function getEachLabelByTextExpectToHaveClass(
  numberOfLabels,
  className
) {
  const allText = generateArrayOfUniqueStrings(numberOfLabels);
  allText.forEach(text => {
    const label = screen.getByText(text);
    expect(label).toHaveClass(className);
  });
}
