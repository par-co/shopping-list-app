import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function typeSomething(placeholderText, something) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  await userEvent.type(textbox, something);
  expect(textbox.value).toBe(something);
}
