import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkFirstDeleteSecondSuccessMsg(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  clearBtnTextContent,
  success
) {
  await enterFn.checkFirstDeleteSecond(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent,
    clearBtnTextContent
  );
  await testFn.findH2ExpectToHaveTextContent(success);
}
