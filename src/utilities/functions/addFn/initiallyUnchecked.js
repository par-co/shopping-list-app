import testFn from "../testFn/index";
import addFn from "./index";

export default async function initiallyUnchecked(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent
) {
  await addFn.addOneItem(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
}
