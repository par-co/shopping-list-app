import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkFirstClassOfItem(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  className
) {
  await enterFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
}
