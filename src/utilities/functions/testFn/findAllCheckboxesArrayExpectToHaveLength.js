import { screen } from "@testing-library/react";

export default async function findAllCheckboxesArrayExpectToHaveLength(length) {
  const checkboxesArr = await screen.findAllByRole("checkbox");
  expect(checkboxesArr).toHaveLength(length);
}
