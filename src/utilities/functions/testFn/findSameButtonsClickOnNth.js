import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function findSameButtonsClickOnNth(
  btnsTextContent,
  numberOfBtns,
  nth
) {
  const sameButtons = await screen.findAllByRole("button", {
    name: btnsTextContent
  });
  expect(sameButtons).toHaveLength(numberOfBtns);
  const nthBtn = sameButtons[nth - 1];
  await userEvent.click(nthBtn);
}
