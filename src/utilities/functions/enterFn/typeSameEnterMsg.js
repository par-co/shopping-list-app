import testFn from "../testFn/index";

export default async function typeSameEnterMsg(
  placeholderText,
  same,
  duplicate
) {
  await testFn.typeSomething(placeholderText, same);
  await testFn.enter();
  await testFn.typeSomething(placeholderText, same);
  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(duplicate);
}
