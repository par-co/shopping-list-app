import testFn from "../testFn/index";
import enterFn from "./index";

export default async function uncheckClassOfItem(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  className
) {
  await enterFn.uncheck(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
