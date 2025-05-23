import testFn from "../testFn/index";
import addFn from "./index";

export default async function check(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent
) {
  await addFn.initiallyUnchecked(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );

  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxIsChecked(firstItem);
}
