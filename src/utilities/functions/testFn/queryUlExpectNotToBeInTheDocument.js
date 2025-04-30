import { screen } from "@testing-library/react";

export default function queryUlExpectNotToBeInTheDocument() {
  const ul = screen.queryByRole("list");
  expect(ul).not.toBeInTheDocument();
}
