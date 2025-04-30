import { screen } from "@testing-library/react";

export default function getH2ExpectToHaveTextContent(textContent) {
  const h2 = screen.getByRole("heading", { level: 2 });
  expect(h2).toHaveTextContent(textContent);
}
