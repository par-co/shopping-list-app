import testFn from "../testFn/index";
import enterFn from "./index";

export default async function typeDifferentEnterNoMsg(
  placeholderText,
  firstText,
  secondText
) {
  await enterFn.typeSthEnterTypeSthElse(placeholderText, firstText, secondText);
  await testFn.enter();
  await testFn.queryH2ExpectNotToBeInTheDocument();
}
