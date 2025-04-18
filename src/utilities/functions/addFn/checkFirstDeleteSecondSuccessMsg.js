import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkFirstDeleteSecondSuccessMsg(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  clearBtnTextContent,
  success
) {
  await addFn.checkFirstDeleteSecond(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    clearBtnTextContent
  );
  await testFn.findH2ExpectToHaveTextContent(success);
}
