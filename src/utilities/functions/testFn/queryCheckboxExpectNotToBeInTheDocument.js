import { screen } from "@testing-library/react";

export default function queryCheckboxExpectNotToBeInTheDocument() {
  const checkbox = screen.queryByRole("checkbox");
  expect(checkbox).not.toBeInTheDocument();
}
