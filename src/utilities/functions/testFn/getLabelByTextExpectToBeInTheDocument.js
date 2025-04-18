import { screen } from "@testing-library/react";

export default function getLabelByTextExpectToBeInTheDocument(text) {
  const label = screen.getByText(text);
  expect(label).toBeInTheDocument();
}
