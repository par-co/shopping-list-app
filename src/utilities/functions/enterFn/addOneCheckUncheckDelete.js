import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneCheckUncheckDelete(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await enterFn.uncheck(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.clickBtn(deleteBtnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnTextContent);
}
