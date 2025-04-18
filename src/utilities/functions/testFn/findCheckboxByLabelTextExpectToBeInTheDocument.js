import { screen } from "@testing-library/react";

export default async function findCheckboxByLabelTextExpectToBeInTheDocument(
  labelText
) {
  const checkbox = await screen.findByLabelText(labelText);
  expect(checkbox).toBeInTheDocument();
}
