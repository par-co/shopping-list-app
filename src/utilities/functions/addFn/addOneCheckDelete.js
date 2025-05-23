import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneCheckDelete(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await addFn.check(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.clickBtn(deleteBtnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnTextContent);
}
