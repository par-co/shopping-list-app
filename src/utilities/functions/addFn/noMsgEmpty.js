import addFn from "./index";

export default async function noMsgEmpty(
  placeholderText,
  firstText,
  secondText,
  btnTextContent,
  empty
) {
  await addFn.typeSthAddBtnNoMsg(placeholderText, firstText, btnTextContent);
  await addFn.withoutTypingAddBtnMsg(placeholderText, btnTextContent, empty);
  await addFn.typeSthAddBtnNoMsg(placeholderText, secondText, btnTextContent);
  await addFn.withoutTypingAddBtnMsg(placeholderText, btnTextContent, empty);
}
