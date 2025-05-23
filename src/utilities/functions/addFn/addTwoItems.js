import testFn from "../testFn/index";
import addFn from "./index";

export default async function addTwoItems(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  secondItem
) {
  await addFn.addOneItem(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnsTextContent
  );

  await testFn.typeSomething(placeholderText, secondItem);
  await testFn.clickBtn(addBtnTextContent);
  await testFn.findUlExpectToBeInTheDocument();
  await testFn.findAllLiElementsArrayExpectToHaveLength(2);
  await testFn.findAllCheckboxesArrayExpectToHaveLength(2);
  await testFn.findCheckboxByLabelTextExpectToBeInTheDocument(secondItem);
  await testFn.findLabelByTextExpectToBeInTheDocument(secondItem);
  await testFn.findSameButtons(deleteBtnsTextContent, 2);
}
