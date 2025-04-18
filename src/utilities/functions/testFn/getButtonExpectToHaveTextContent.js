import { screen } from "@testing-library/react";

export default function getButtonExpectToHaveTextContent(textContent) {
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(textContent);
}
