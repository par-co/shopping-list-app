import addFn from "./index";

export default async function duplicateNoMsg(
  placeholderText,
  same,
  secondText,
  thirdText,
  btnTextContent,
  duplicate
) {
  await addFn.typeSameAddBtnMsg(
    placeholderText,
    same,
    btnTextContent,
    duplicate
  );

  await addFn.typeSthAddBtnNoMsg(placeholderText, secondText, btnTextContent);

  await addFn.typeSthAddBtnMsg(
    placeholderText,
    same,
    btnTextContent,
    duplicate
  );

  await addFn.typeSthAddBtnNoMsg(placeholderText, thirdText, btnTextContent);
}
