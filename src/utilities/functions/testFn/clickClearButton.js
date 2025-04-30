import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function clickClearButton(btnText) {
  const clearButton = await screen.findByRole("button", {
    name: btnText
  });
  await userEvent.click(clearButton);
}
