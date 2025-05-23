import testFn from "../testFn/index";

export default async function spaceAddBtnNoShoppingList(
  placeholderText,
  space,
  btnTextContent
) {
  await testFn.typeSomething(placeholderText, space);
  await testFn.clickBtn(btnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
}
