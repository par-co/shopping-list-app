import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkFirstNoMsg(
  placeholderText,
  firstItem,
  secondItem,
  addBtnTextContent,
  deleteBtnsTextContent
) {
  await addFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    addBtnTextContent,
    deleteBtnsTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
