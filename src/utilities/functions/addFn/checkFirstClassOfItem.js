import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkFirstClassOfItem(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  className
) {
  await addFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
