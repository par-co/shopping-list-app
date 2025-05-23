import { screen } from "@testing-library/react";

export default async function findClearButton(btnText) {
  const clearButton = await screen.findByRole("button", {
    name: btnText
  });
  expect(clearButton).toBeInTheDocument();
}
