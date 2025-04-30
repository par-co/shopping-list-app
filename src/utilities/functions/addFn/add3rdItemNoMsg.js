import testFn from "../testFn/index";
import addFn from "./index";

export default async function add3rdItemNoMsg(
  placeholderText,
  firstItem,
  secondItem,
  thirdItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  clearBtnTextContent
) {
  await addFn.checkFirstDeleteSecond(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    clearBtnTextContent
  );

  await testFn.typeSomething(placeholderText, thirdItem);
  await testFn.clickBtn(addBtnTextContent);
  await testFn.findUlExpectToBeInTheDocument();
  await testFn.findAllLiElementsArrayExpectToHaveLength(2);
  await testFn.findAllCheckboxesArrayExpectToHaveLength(2);
  await testFn.findCheckboxByLabelTextExpectToBeInTheDocument(thirdItem);
  await testFn.findLabelByTextExpectToBeInTheDocument(thirdItem);
  await testFn.findSameButtons(deleteBtnsTextContent, 2);

  testFn.queryH2ExpectNotToBeInTheDocument();
}
