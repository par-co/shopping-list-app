import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addTwoItems(
  placeholderText,
  firstItem,
  deleteBtnsTextContent,
  secondItem
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnsTextContent);

  await testFn.typeSomething(placeholderText, secondItem);
  await testFn.enter();
  await testFn.findUlExpectToBeInTheDocument();
  await testFn.findAllLiElementsArrayExpectToHaveLength(2);
  await testFn.findAllCheckboxesArrayExpectToHaveLength(2);
  await testFn.findCheckboxByLabelTextExpectToBeInTheDocument(secondItem);
  await testFn.findLabelByTextExpectToBeInTheDocument(secondItem);
  await testFn.findSameButtons(deleteBtnsTextContent, 2);
}
