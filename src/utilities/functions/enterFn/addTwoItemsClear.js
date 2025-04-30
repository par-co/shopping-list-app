import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addTwoItemsClear(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  clearBtnText
) {
  await enterFn.addTwoItems(
    placeholderText,
    firstItem,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.clickClearButton(clearBtnText);
  testFn.queryUlExpectNotToBeInTheDocument();
  testFn.queryClearButtonNotToBe(clearBtnText);
}
