import testFn from "../testFn/index";

export default async function typeSthEnterTypeSthElse(
  placeholderText,
  firstText,
  secondText
) {
  await testFn.typeSomething(placeholderText, firstText);
  await testFn.enter();
  await testFn.typeSomething(placeholderText, secondText);
}
