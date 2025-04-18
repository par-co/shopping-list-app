import testFn from "../testFn/index";
import addFn from "./index";

export default async function showSuccessMsg(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  success
) {
  await addFn.check(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findH2ExpectToHaveTextContent(success);
}
