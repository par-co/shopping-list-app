import testFn from "../testFn/index";
import addFn from "./index";

export default async function checkUncheckNoMsg(
  placeholderText,
  firstItem,
  addBtnTextContent,
  deleteBtnTextContent
) {
  await addFn.uncheck(
    placeholderText,
    firstItem,
    addBtnTextContent,
    deleteBtnTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
