import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkFirstCheckbox(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent
) {
  await addFn.bothInitiallyUnchecked(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent
  );
  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxIsChecked(firstItem);
}
