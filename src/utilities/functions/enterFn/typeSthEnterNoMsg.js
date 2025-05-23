import testFn from "../testFn/index";

export default async function typeSthEnterNoMsg(placeholderText, something) {
  await testFn.typeSomething(placeholderText, something);
  await testFn.enter();
  testFn.queryH2ExpectNotToBeInTheDocument();
}
