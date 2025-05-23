import testFn from "../testFn/index";
import addFn from "./index";

export default async function initialClassOfBothItems(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  className
) {
  await addFn.addTwoItems(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
  await testFn.findLabelByTextExpectToHaveClass(secondItem, className);
}
