import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneItemClear(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnText
) {
  await addFn.addOneItem(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.clickClearButton(clearBtnText);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnText);
}
