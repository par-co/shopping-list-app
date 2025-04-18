import testFn from "../testFn/index";
import addFn from "./index";

export default async function bothInitiallyUnchecked(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent
) {
  await addFn.addTwoItems(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(secondItem);
}
