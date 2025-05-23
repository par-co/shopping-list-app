import { screen } from "@testing-library/react";

export default async function findLabelByTextExpectToBeInTheDocument(text) {
  const label = await screen.findByText(text);
  expect(label).toBeInTheDocument();
}
