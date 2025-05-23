import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function findCheckboxClick(labelText) {
  const checkbox = await screen.findByLabelText(labelText);
  await userEvent.click(checkbox);
}
