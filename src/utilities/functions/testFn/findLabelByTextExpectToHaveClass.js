import { screen } from "@testing-library/react";

export default async function findLabelByTextExpectToHaveClass(
  text,
  className
) {
  const label = await screen.findByText(text);
  expect(label).toHaveClass(className);
}
