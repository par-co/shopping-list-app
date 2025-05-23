import testFn from "../testFn/index";

export default async function spaceAddBtnMsg(
  placeholderText,
  space,
  btnTextContent,
  empty
) {
  await testFn.typeSomething(placeholderText, space);
  await testFn.clickBtn(btnTextContent);
  await testFn.findH2ExpectToHaveTextContent(empty);
}
