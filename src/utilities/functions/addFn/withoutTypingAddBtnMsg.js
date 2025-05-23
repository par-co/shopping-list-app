import testFn from "../testFn/index";
import addFn from "./index";

export default async function withoutTypingAddBtnMsg(
  placeholderText,
  btnTextContent,
  msgTextContent
) {
  await addFn.withoutTypingAddBtn(placeholderText, btnTextContent);
  await testFn.findH2ExpectToHaveTextContent(msgTextContent);
}
