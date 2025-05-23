import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

export default async function clickBtn(btnTextContent) {
  const button = screen.getByRole("button", { name: btnTextContent });
  await userEvent.click(button);
}
