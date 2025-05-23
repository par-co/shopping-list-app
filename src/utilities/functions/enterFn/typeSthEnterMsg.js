import testFn from "../testFn/index";

export default async function typeSthEnterMsg(
  placeholderText,
  something,
  msgTextContent
) {
  await testFn.typeSomething(placeholderText, something);
  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(msgTextContent);
}
