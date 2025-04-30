import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../Message.jsx";
import MessageObject from "../../../utilities/classes/MessageObject.js";
import testFn from "../../../utilities/functions/testFn/index";

const messageObjInitial = new MessageObject();
const messageObjSuccess = new MessageObject("You're done!", "success");
const messageObjEmpty = new MessageObject(
  "Please type something and then click the Add button or press Enter.",
  "empty"
);
const messageObjDuplicate = new MessageObject(
  "The item is already in the list.",
  "duplicate"
);

const renderMessage = (messageObj) => {
  return render(<Message messageObj={messageObj} />);
};

describe("Message", () => {
  describe("should NOT render the message", () => {
    test(`should NOT render a <h2>${messageObjInitial.msgText}</h2> if the messageObj prop is an object with a msgText property of '${messageObjInitial.msgText}'.`, () => {
      renderMessage(messageObjInitial);
      testFn.queryH2ExpectNotToBeInTheDocument();
    });
  });

  describe("should render the expected message", () => {
    test(`should render a <h2>${messageObjSuccess.msgText}</h2> if the messageObj prop is an object with a msgText property of '${messageObjSuccess.msgText}'.`, () => {
      renderMessage(messageObjSuccess);
      testFn.getH2ExpectToHaveTextContent(messageObjSuccess.msgText);
    });

    test(`should render a <h2>${messageObjEmpty.msgText}</h2> if the messageObj prop is an object with a msgText property of '${messageObjEmpty.msgText}'.`, () => {
      renderMessage(messageObjEmpty);
      testFn.getH2ExpectToHaveTextContent(messageObjEmpty.msgText);
    });

    test(`should render a <h2>${messageObjDuplicate.msgText}</h2> if the messageObj prop is an object with a msgText property of '${messageObjDuplicate.msgText}'.`, () => {
      renderMessage(messageObjDuplicate);
      testFn.getH2ExpectToHaveTextContent(messageObjDuplicate.msgText);
    });
  });

  describe("has expected classes", () => {
    describe(`if the messageObj prop is an object with a msgClassName property of '${messageObjSuccess.msgClassName}'.`, () => {
      beforeEach(() => {
        renderMessage(messageObjSuccess);
      });

      test(`should render a <h2> with class of '${messageObjSuccess.msgClassName}'.`, () => {
        testFn.getH2ExpectToHaveClass(messageObjSuccess.msgClassName);
      });

      test("should render a <h2> with class of 'message'.", () => {
        testFn.getH2ExpectToHaveClass("message");
      });
    });

    describe(`if the messageObj prop is an object with a msgClassName property of '${messageObjEmpty.msgClassName}'.`, () => {
      beforeEach(() => {
        renderMessage(messageObjEmpty);
      });

      test(`should render a <h2> with class of '${messageObjEmpty.msgClassName}'.`, () => {
        testFn.getH2ExpectToHaveClass(messageObjEmpty.msgClassName);
      });

      test("should render a <h2> with class of 'message'.", () => {
        testFn.getH2ExpectToHaveClass("message");
      });
    });

    describe(`if the messageObj prop is an object with a msgClassName property of '${messageObjDuplicate.msgClassName}'.`, () => {
      beforeEach(() => {
        renderMessage(messageObjDuplicate);
      });

      test(`should render a <h2> with class of '${messageObjDuplicate.msgClassName}'`, () => {
        testFn.getH2ExpectToHaveClass(messageObjDuplicate.msgClassName);
      });

      test("should render a <h2> with class of 'message'.", () => {
        testFn.getH2ExpectToHaveClass("message");
      });
    });
  });
});
