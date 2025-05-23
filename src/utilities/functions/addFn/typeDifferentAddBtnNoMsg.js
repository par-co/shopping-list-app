import testFn from "../testFn/index";
import addFn from "./index";

export default async function typeDifferentAddBtnNoMsg(
  placeholderText,
  firstText,
  secondText,
  btnTextContent
) {
  await addFn.typeSthAddBtnTypeSthElse(
    placeholderText,
    firstText,
    btnTextContent,
    secondText
  );
  await testFn.clickBtn(btnTextContent);
  await testFn.queryH2ExpectNotToBeInTheDocument();
}
