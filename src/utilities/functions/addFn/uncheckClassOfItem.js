import testFn from "../testFn/index";
import addFn from "./index";

export default async function uncheckClassOfItem(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  className
) {
  await addFn.uncheck(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
