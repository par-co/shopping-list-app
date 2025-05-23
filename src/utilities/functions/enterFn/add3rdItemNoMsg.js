import testFn from "../testFn/index";
import enterFn from "./index";

export default async function add3rdItemNoMsg(
  placeholderText,
  firstItem,
  secondItem,
  thirdItem,
  deleteBtnsTextContent,
  clearBtnTextContent
) {
  await enterFn.checkFirstDeleteSecond(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent,
    clearBtnTextContent
  );

  await testFn.typeSomething(placeholderText, thirdItem);
  await testFn.enter();
  await testFn.findUlExpectToBeInTheDocument();
  await testFn.findAllLiElementsArrayExpectToHaveLength(2);
  await testFn.findAllCheckboxesArrayExpectToHaveLength(2);
  await testFn.findCheckboxByLabelTextExpectToBeInTheDocument(thirdItem);
  await testFn.findLabelByTextExpectToBeInTheDocument(thirdItem);
  await testFn.findSameButtons(deleteBtnsTextContent, 2);

  testFn.queryH2ExpectNotToBeInTheDocument();
  await testFn.findClearButton(clearBtnTextContent);
}
