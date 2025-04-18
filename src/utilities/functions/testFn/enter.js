import userEvent from "@testing-library/user-event";

export default async function enter() {
  await userEvent.keyboard("{enter}");
}
