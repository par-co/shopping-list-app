import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkClassOfItem(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  className
) {
  await addFn.check(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
