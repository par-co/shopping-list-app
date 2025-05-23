import { screen } from "@testing-library/react";

export default function getLabelByTextExpectToHaveClass(text, className) {
  const label = screen.getByText(text);
  expect(label).toHaveClass(className);
}
