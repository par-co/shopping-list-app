import { screen } from "@testing-library/react";

export default async function findH2ExpectToHaveTextContent(textContent) {
  const h2 = await screen.findByRole("heading", { level: 2 });
  expect(h2).toHaveTextContent(textContent);
}
