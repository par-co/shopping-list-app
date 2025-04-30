import { screen } from "@testing-library/react";

export default function queryClearButtonNotToBe(btnText) {
  const clearButton = screen.queryByRole("button", {
    name: btnText
  });
  expect(clearButton).not.toBeInTheDocument();
}
