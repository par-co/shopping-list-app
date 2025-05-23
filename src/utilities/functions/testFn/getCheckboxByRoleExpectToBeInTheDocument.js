import { screen } from "@testing-library/react";

export default function getCheckboxByRoleExpectToBeInTheDocument() {
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeInTheDocument();
}
