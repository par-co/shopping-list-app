import { screen } from "@testing-library/react";

export default async function findLiExpectToBeInTheDocument() {
  const li = await screen.findByRole("listitem");
  expect(li).toBeInTheDocument();
}
