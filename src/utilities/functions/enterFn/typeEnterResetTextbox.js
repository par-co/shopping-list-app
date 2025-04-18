import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testFn from "../testFn/index";

export default async function typeEnterResetTextbox(
  placeholderText,
  something
) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  await userEvent.type(textbox, something);
  expect(textbox.value).toBe(something);
  await testFn.enter();
  expect(textbox.value).toBe("");
}
