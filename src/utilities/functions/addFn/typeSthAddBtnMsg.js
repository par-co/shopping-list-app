import testFn from "../testFn/index";

export default async function typeSthAddBtnMsg(
  placeholderText,
  something,
  btnTextContent,
  msgTextContent
) {
  await testFn.typeSomething(placeholderText, something);
  await testFn.clickBtn(btnTextContent);
  await testFn.findH2ExpectToHaveTextContent(msgTextContent);
}
