import testFn from "../testFn/index";
import addFn from "./index";

export default async function addOneCheckUncheckDeleteNoMsg(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await addFn.addOneCheckUncheckDelete(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent,
    clearBtnTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
