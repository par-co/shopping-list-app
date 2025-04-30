import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneCheckDeleteNoMsg(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await addFn.addOneCheckDelete(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent,
    clearBtnTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
