import testFn from "../testFn/index";
import enterFn from "./index";

export default async function bothInitiallyUnchecked(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent
) {
  await enterFn.addTwoItems(
    placeholderText,
    firstItem,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(secondItem);
}
