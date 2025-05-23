import { screen } from "@testing-library/react";

export default function getAllLiElementsArrayExpectToHaveLength(length) {
  const liElementsArray = screen.getAllByRole("listitem");
  expect(liElementsArray).toHaveLength(length);
}
