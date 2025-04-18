import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneCheckDelete(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await enterFn.check(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.clickBtn(deleteBtnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnTextContent);
}
