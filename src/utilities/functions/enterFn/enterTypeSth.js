import testFn from "../testFn/index";
import enterFn from "./index";

export default async function enterTypeSth(placeholderText, something) {
  await enterFn.withoutTypingEnter(placeholderText);
  await testFn.typeSomething(placeholderText, something);
}
