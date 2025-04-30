import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneFindClearBtn(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnText
) {
  await addFn.addOneItem(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  await testFn.findClearButton(clearBtnText);
}
