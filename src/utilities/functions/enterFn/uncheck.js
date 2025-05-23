import testFn from "../testFn/index";
import enterFn from "./index";

export default async function uncheck(
  placeholderText,
  firstItem,
  deleteBtnTextContent
) {
  await enterFn.check(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxByLabelTextExpectNotToBeChecked(firstItem);
}
