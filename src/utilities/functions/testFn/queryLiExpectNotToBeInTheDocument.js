import { screen } from "@testing-library/react";

export default function queryLiExpectNotToBeInTheDocument() {
  const li = screen.queryByRole("listitem");
  expect(li).not.toBeInTheDocument();
}
