import testFn from "../testFn/index";

export default async function spaceEnterNoShoppingList(placeholderText, space) {
  await testFn.typeSomething(placeholderText, space);
  await testFn.enter();
  testFn.queryUlExpectNotToBeInTheDocument();
}
