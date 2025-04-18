import { screen } from "@testing-library/react";

export default function getH1ExpectToHaveTextContent(textContent) {
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toHaveTextContent(textContent);
}
