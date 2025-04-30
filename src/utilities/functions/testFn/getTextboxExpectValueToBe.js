import { screen } from "@testing-library/react";

export default function getTextboxExpectValueToBe(inputValue) {
  const textbox = screen.getByRole("textbox");
  expect(textbox.value).toBe(inputValue);
}
