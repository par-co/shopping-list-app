import testFn from "../testFn/index";
import addFn from "./index";

export default async function addTwoItemsFindClearBtn(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent,
  clearBtnText
) {
  await addFn.addTwoItems(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findClearButton(clearBtnText);
}
