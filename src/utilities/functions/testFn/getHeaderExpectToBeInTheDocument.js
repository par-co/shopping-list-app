import { screen } from "@testing-library/react";

export default function getHeaderExpectToBeInTheDocument() {
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
}
