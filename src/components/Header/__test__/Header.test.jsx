import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header.jsx";
import testFn from "../../../utilities/functions/testFn/index";

const titleText = "Shopping List";

const renderHeader = () => {
  return render(<Header title={titleText} />);
};

describe("Header", () => {
  describe("Renders the expected elements", () => {
    beforeEach(() => {
      renderHeader();
    });

    test("should render a <header></header>", () => {
      testFn.getHeaderExpectToBeInTheDocument();
    });

    test(`should render a <h1>${titleText}</h1> if the title prop is '${titleText}'`, () => {
      testFn.getH1ExpectToHaveTextContent(titleText);
    });
  });
});
