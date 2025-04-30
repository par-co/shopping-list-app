import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkUncheckNoMsg(
  placeholderText,
  firstItem,
  deleteBtnTextContent
) {
  await enterFn.uncheck(placeholderText, firstItem, deleteBtnTextContent);
  testFn.queryH2ExpectNotToBeInTheDocument();
}
