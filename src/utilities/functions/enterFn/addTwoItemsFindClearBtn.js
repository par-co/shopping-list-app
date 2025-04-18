import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addTwoItemsFindClearBtn(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  clearBtnText
) {
  await enterFn.addTwoItems(
    placeholderText,
    firstItem,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findClearButton(clearBtnText);
}
