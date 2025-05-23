import { screen } from "@testing-library/react";

export default function getLiExpectToBeInTheDocument() {
  const li = screen.getByRole("listitem");
  expect(li).toBeInTheDocument();
}
