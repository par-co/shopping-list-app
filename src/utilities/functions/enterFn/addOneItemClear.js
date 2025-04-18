import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneItemClear(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnText
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.clickClearButton(clearBtnText);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnText);
}
