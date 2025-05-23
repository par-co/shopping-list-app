import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkFirstCheckbox(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent
) {
  await enterFn.bothInitiallyUnchecked(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent
  );
  await testFn.findCheckboxClick(firstItem);
  await testFn.findCheckboxIsChecked(firstItem);
}
