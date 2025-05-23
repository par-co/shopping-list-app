import { screen } from "@testing-library/dom";
import testFn from "../testFn/index";

export default async function withoutTypingAddBtn(
  placeholderText,
  btnTextContent
) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  await testFn.clickBtn(btnTextContent);
  expect(textbox.value).toBe("");
}
