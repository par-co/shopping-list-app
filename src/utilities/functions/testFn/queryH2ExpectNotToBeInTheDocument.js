import { screen } from "@testing-library/react";

export default function queryH2ExpectNotToBeInTheDocument() {
  const h2 = screen.queryByRole("heading", { level: 2 });
  expect(h2).not.toBeInTheDocument();
}
