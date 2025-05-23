import { screen } from "@testing-library/react";

export default async function findUlExpectToBeInTheDocument() {
  const ul = await screen.findByRole("list");
  expect(ul).toBeInTheDocument();
}
