import { screen } from "@testing-library/react";

export default async function findCheckboxIsChecked(labelText) {
  const checkbox = await screen.findByLabelText(labelText);
  expect(checkbox).toBeChecked();
}
