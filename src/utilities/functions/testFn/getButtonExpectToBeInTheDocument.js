import { screen } from "@testing-library/react";

export default function getButtonExpectToBeInTheDocument(btnTextContent) {
  const button = screen.getByRole("button", { name: btnTextContent });
  expect(button).toBeInTheDocument();
}
