import { screen } from "@testing-library/react";

export default function getMainExpectToBeInTheDocument() {
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
}
