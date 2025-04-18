import testFn from "../testFn/index";

export default async function spaceEnterMsg(placeholderText, space, empty) {
  await testFn.typeSomething(placeholderText, space);
  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(empty);
}
