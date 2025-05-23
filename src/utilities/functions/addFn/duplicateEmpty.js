import addFn from "./index";

export default async function duplicateEmpty(
  placeholderText,
  same,
  btnTextContent,
  duplicate,
  empty
) {
  await addFn.typeSameAddBtnMsg(
    placeholderText,
    same,
    btnTextContent,
    duplicate
  );

  await addFn.withoutTypingAddBtnMsg(placeholderText, btnTextContent, empty);

  await addFn.typeSthAddBtnMsg(
    placeholderText,
    same,
    btnTextContent,
    duplicate
  );

  await addFn.withoutTypingAddBtnMsg(placeholderText, btnTextContent, empty);
}
