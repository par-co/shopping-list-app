import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkFirstDeleteSecond(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  clearBtnTextContent
) {
  await addFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent
  );
  await testFn.findSameButtonsClickOnNth(deleteBtnsTextContent, 2, 2);
  testFn.queryLabelByTextExpectNotToBeInTheDocument(secondItem);
  await testFn.findClearButton(clearBtnTextContent);
}
