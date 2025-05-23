import testFn from "../testFn/index";

export default async function addBtnNoShoppingList(btnTextContent) {
  await testFn.clickBtn(btnTextContent);
  testFn.queryUlExpectNotToBeInTheDocument();
}
