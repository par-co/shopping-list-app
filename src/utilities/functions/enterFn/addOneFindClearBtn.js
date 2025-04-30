import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneFindClearBtn(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnText
) {
  await enterFn.addOneItem(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findClearButton(clearBtnText);
}
