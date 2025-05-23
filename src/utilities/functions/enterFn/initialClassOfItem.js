import testFn from "../testFn/index";
import enterFn from "./index";

export default async function initialClassOfItem(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  className
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
