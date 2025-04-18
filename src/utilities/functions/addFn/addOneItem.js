import testFn from "../testFn/index";

export default async function addOneItem(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent
) {
  await testFn.typeSomething(placeholderText, firstItem);
  await testFn.clickBtn(addBtnTextContent);
  await testFn.findUlExpectToBeInTheDocument();
  await testFn.findLiExpectToBeInTheDocument();
  await testFn.findCheckboxByRoleExpectToBeInTheDocument();
  await testFn.findCheckboxByLabelTextExpectToBeInTheDocument(firstItem);
  await testFn.findLabelByTextExpectToBeInTheDocument(firstItem);
  await testFn.findButtonExpectToBeInTheDocument(deleteBtnTextContent);
}
