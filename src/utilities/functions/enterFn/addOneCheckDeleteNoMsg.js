import testFn from "../testFn/index";
import enterFn from "./index";

export default async function addOneCheckDeleteNoMsg(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  clearBtnTextContent
) {
  await enterFn.addOneCheckDelete(
    placeholderText,
    firstItem,
    deleteBtnTextContent,
    clearBtnTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
