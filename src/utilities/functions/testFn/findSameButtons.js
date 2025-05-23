import { screen } from "@testing-library/react";

export default async function findSameButtons(btnsTextContent, numberOfBtns) {
  const sameButtons = await screen.findAllByRole("button", {
    name: btnsTextContent
  });
  expect(sameButtons).toHaveLength(numberOfBtns);
}
