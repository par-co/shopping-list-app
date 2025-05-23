import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import testFn from "../testFn/index";

export default async function withoutTypingEnter(placeholderText) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  await userEvent.click(textbox);
  await testFn.enter();
  expect(textbox.value).toBe("");
}
