import testFn from "../testFn/index";
import addFn from "./index";

export default async function addBtnTypeSth(
  placeholderText,
  btnTextContent,
  something
) {
  await addFn.withoutTypingAddBtn(placeholderText, btnTextContent);
  await testFn.typeSomething(placeholderText, something);
}
