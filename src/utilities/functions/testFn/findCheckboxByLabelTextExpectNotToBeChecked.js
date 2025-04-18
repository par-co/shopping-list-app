import { screen } from "@testing-library/react";

export default async function findCheckboxByLabelTextExpectNotToBeChecked(
  labelText
) {
  const checkbox = await screen.findByLabelText(labelText);
  expect(checkbox).not.toBeChecked();
}
