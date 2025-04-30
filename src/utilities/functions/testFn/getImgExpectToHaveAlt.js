import { screen } from "@testing-library/react";

export default function getImgExpectToHaveAlt(alt) {
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("alt", alt);
}
