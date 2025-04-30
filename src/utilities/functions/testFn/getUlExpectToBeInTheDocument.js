import { screen } from "@testing-library/react";

export default function getUlExpectToBeInTheDocument() {
  const ul = screen.getByRole("list");
  expect(ul).toBeInTheDocument();
}
