import testFn from "../testFn/index";
import enterFn from "./index";

export default async function checkFirstNoMsg(
  placeholderText,
  firstItem,
  secondItem,
  deleteBtnsTextContent
) {
  await enterFn.checkFirstCheckbox(
    placeholderText,
    firstItem,
    secondItem,
    deleteBtnsTextContent
  );
  testFn.queryH2ExpectNotToBeInTheDocument();
}
