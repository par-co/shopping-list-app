import testFn from "../testFn/index";
import enterFn from "./index";

export default async function check(
  placeholderText,
  firstItem,
  deleteBtnTextContent
) {
  await enterFn.initiallyUnchecked(
    placeholderText,
    firstItem,
    deleteBtnTextContent
  );

  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxIsChecked(firstItem);
}
