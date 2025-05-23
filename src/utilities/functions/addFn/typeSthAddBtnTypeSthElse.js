import testFn from "../testFn/index";

export default async function typeSthAddBtnTypeSthElse(
  placeholderText,
  firstText,
  btnTextContent,
  secondText
) {
  await testFn.typeSomething(placeholderText, firstText);
  await testFn.clickBtn(btnTextContent);
  await testFn.typeSomething(placeholderText, secondText);
}
