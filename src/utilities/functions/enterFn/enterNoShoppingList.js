import testFn from "../testFn/index";
import enterFn from "./index";

export default async function enterNoShoppingList(placeholderText) {
  await enterFn.withoutTypingEnter(placeholderText);
  testFn.queryUlExpectNotToBeInTheDocument();
}
