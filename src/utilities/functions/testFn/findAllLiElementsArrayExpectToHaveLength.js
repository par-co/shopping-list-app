import { screen } from "@testing-library/react";

export default async function findAllLiElementsArrayExpectToHaveLength(length) {
  const liElementsArr = await screen.findAllByRole("listitem");
  expect(liElementsArr).toHaveLength(length);
}
