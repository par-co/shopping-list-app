import testFn from "../testFn/index";
import enterFn from "./index";

export default async function withoutTypingEnterMsg(
  placeholderText,
  msgTextContent
) {
  await enterFn.withoutTypingEnter(placeholderText);
  await testFn.findH2ExpectToHaveTextContent(msgTextContent);
}
