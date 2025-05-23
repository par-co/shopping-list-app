import { screen } from "@testing-library/react";

export default async function findCheckboxByRoleExpectToBeInTheDocument() {
  const checkbox = await screen.findByRole("checkbox");
  expect(checkbox).toBeInTheDocument();
}
