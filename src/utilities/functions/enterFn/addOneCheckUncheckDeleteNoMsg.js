import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneCheckUncheckDeleteNoMsg(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await enterFn.addOneCheckUncheckDelete(
    placeholderText,
    firstItem,
    deleteBtnTextContent,
    clearBtnTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
