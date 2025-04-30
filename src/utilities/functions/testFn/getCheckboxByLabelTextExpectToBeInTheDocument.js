import { screen } from "@testing-library/react";

export default function getCheckboxByLabelTextExpectToBeInTheDocument(
  labelText
) {
  const checkbox = screen.getByLabelText(labelText);
  expect(checkbox).toBeInTheDocument();
}
