import testFn from "../testFn/index";
import addFn from "./index";

export default async function uncheck(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent
) {
  await addFn.check(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
}
