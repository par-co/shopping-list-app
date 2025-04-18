import testFn from "../testFn/index";
import addFn from "./index";

export default async function addTwoItemsClear(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  clearBtnText
) {
  await addFn.addTwoItems(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.clickClearButton(clearBtnText);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnText);
}
