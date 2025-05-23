import testFn from "../testFn/index";
import enterFn from "./index";

export default async function noMsgEmpty(
  placeholderText,
  firstText,
  empty,
  secondText
) {
  await enterFn.typeSthEnterNoMsg(placeholderText, firstText);

  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(empty);

  await enterFn.typeSthEnterNoMsg(placeholderText, secondText);

  await testFn.enter();
  await testFn.findH2ExpectToHaveTextContent(empty);
}
