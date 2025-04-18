import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneItemDelete(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.clickBtn(deleteBtnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnTextContent);
}
