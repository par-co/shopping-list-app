import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkClassOfItem(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  className
) {
  await enterFn.check(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
