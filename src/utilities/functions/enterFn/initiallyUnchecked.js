import testFn from "../testFn/index";
import enterFn from "./index";

export default async function initiallyUnchecked(
  placeholderText,
  firstItem,
  deleteBtnTextContent
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
}
