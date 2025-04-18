import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testFn from "../testFn/index";

export default async function typeAddBtnResetTextbox(
  placeholderText,
  something,
  btnTextContent
) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  await userEvent.type(textbox, something);
  expect(textbox.value).toBe(something);
  await testFn.clickBtn(btnTextContent);
  expect(textbox.value).toBe("");
}
