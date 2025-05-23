import testFn from "../testFn/index";
import enterFn from "./index";

export default async function initialClassOfBothItems(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent,
  className
) {
  await enterFn.addTwoItems(
    placeholderText,
    firstItem,
    deleteBtnsTextContent,
    secondItem
  );
  await testFn.findLabelByTextExpectToHaveClass(firstItem, className);
  await testFn.findLabelByTextExpectToHaveClass(secondItem, className);
}
