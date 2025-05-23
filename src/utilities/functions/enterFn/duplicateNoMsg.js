import enterFn from "./index";

export default async function duplicateNoMsg(
  placeholderText,
  same,
  secondText,
  thirdText,
  duplicate
) {
  await enterFn.typeSameEnterMsg(placeholderText, same, duplicate);
  await enterFn.typeSthEnterNoMsg(placeholderText, secondText);
  await enterFn.typeSthEnterMsg(placeholderText, same, duplicate);
  await enterFn.typeSthEnterNoMsg(placeholderText, thirdText);
}
