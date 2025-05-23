import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkFirstDeleteSecond(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  clearBtnTextContent
) {
  await enterFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent
  );
  await testFn.findSameButtonsClickOnNth(deleteBtnsTextContent, 2, 2);
  testFn.queryLabelByTextExpectNotToBeInTheDocument(secondItem);
  await testFn.findClearButton(clearBtnTextContent);
}
