import { screen } from "@testing-library/react";

export default function getAllBtnElementsArrayExpectToHaveLengthAndEachToHaveTextContent(
  length,
  textContent
) {
  const btnElements = screen.getAllByRole("button");
  expect(btnElements).toHaveLength(length);

  btnElements.forEach(btn => {
    expect(btn).toHaveTextContent(textContent);
  });
}
