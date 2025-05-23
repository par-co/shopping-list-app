import testFn from "../testFn/index";

export default async function typeSameAddBtnMsg(
  placeholderText,
  same,
  btnTextContent,
  duplicate
) {
  await testFn.typeSomething(placeholderText, same);
  await testFn.clickBtn(btnTextContent);
  await testFn.typeSomething(placeholderText, same);
  await testFn.clickBtn(btnTextContent);
  await testFn.findH2ExpectToHaveTextContent(duplicate);
}
