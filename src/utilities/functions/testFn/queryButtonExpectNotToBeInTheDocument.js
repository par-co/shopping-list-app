import { screen } from "@testing-library/react";

export default function queryButtonExpectNotToBeInTheDocument() {
  const button = screen.queryByRole("button");
  expect(button).not.toBeInTheDocument();
}
