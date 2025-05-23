import { screen } from "@testing-library/react";

export default function getCheckboxByLabelTextExpectNotToBeChecked(labelText) {
  const checkbox = screen.getByLabelText(labelText);
  expect(checkbox).not.toBeChecked();
}
