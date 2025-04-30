import testFn from "../testFn/index";

export default async function typeSthAddBtnNoMsg(
  placeholderText,
  something,
  btnTextContent
) {
  await testFn.typeSomething(placeholderText, something);
  await testFn.clickBtn(btnTextContent);
  testFn.queryH2ExpectNotToBeInTheDocument();
}
