import { screen } from "@testing-library/react";

export default function getTextboxByPlaceholderTextExpectValueToBe(
  placeholderText,
  inputValue
) {
  const textbox = screen.getByPlaceholderText(placeholderText);
  expect(textbox.value).toBe(inputValue);
}
