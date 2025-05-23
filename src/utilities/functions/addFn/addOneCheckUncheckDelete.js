import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneCheckUncheckDelete(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await addFn.uncheck(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.clickBtn(deleteBtnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnTextContent);
}
