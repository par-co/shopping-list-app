import testFn from "../testFn/index";
import addFn from "./index";

export default async function initialClassOfItem(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  className
) {
  await addFn.addOneItem(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
