import testFn from "../testFn/index";
import enterFn from "./index";

export default async function showSuccessMsg(
  placeholderText,
  firstItem,
  deleteBtnTextContent,
  success
) {
  await enterFn.check(placeholderText, firstItem, deleteBtnTextContent);
  await testFn.findH2ExpectToHaveTextContent(success);
}
