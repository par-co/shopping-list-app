import { screen } from "@testing-library/react";

export default function queryLabelByTextExpectNotToBeInTheDocument(text) {
  const label = screen.queryByText(text);
  expect(label).not.toBeInTheDocument();
}
