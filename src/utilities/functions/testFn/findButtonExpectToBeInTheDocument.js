import { screen } from "@testing-library/react";

export default async function findButtonExpectToBeInTheDocument(
  btnTextContent
) {
  const button = await screen.findByRole("button", { name: btnTextContent });
  expect(button).toBeInTheDocument();
}
