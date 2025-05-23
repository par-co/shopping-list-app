import testFn from "../testFn/index";
import enterFn from "./index";

export default async function duplicateEmpty(
  placeholderText,
  same,
  duplicate,
  empty
) {
  await enterFn.typeSameEnterMsg(placeholderText, same, duplicate);

  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(empty);

  await enterFn.typeSthEnterMsg(placeholderText, same, duplicate);

  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(empty);
}
