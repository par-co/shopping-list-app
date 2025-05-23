import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input.jsx";
import testFn from "../../../utilities/functions/testFn/index";

const labelText = "Add an item to the list:";
const placeholder = "type here...";

const inputValueIsEmpty = "";
const inputValueIsTruthy = "string1";

const mockHandleChange = vi.fn();
const mockHandleEnter = vi.fn();
const mockHandleClickAddBtn = vi.fn();

const renderInputWhen = (inputValue) => {
  return render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      inputValue={inputValue}
      handleChange={mockHandleChange}
      handleEnter={mockHandleEnter}
      handleClickAddBtn={mockHandleClickAddBtn}
    />
  );
};

describe("Input", () => {
  describe(`if the inputValue prop is '${inputValueIsEmpty}'`, () => {
    describe("renders the expected elements", () => {
      beforeEach(() => {
        renderInputWhen(inputValueIsEmpty);
      });

      test(`should render a <label>${labelText}</label>`, () => {
        testFn.getLabelByTextExpectToBeInTheDocument(labelText);
      });

      test("should render an <input> with the role of 'textbox'.", () => {
        testFn.getTextboxExpectValueToBe(inputValueIsEmpty);
      });

      test(`should render an <input>${inputValueIsEmpty}</input>`, () => {
        testFn.getTextboxByPlaceholderTextExpectValueToBe(
          placeholder,
          inputValueIsEmpty
        );
      });

      test("should render a <button>Add</button>", () => {
        testFn.getButtonExpectToHaveTextContent("Add");
      });
    });

    describe("Functions call", () => {
      test("when the 'Add' button is clicked, it should call the 'handleClickAddBtn' function, which is passed to the component via the 'handleClickAddBtn' (onClick) prop.", async () => {
        renderInputWhen(inputValueIsEmpty);
        await testFn.getButtonClickExpectToHaveBeenCalled1Time(
          mockHandleClickAddBtn,
          "Add"
        );
      });
    });
  });

  describe(`if the inputValue prop is '${inputValueIsTruthy}'`, () => {
    describe("renders the expected elements", () => {
      beforeEach(() => {
        renderInputWhen(inputValueIsTruthy);
      });

      test(`should render a <label>${labelText}</label>`, () => {
        testFn.getLabelByTextExpectToBeInTheDocument(labelText);
      });

      test("should render an <input> with the role of 'textbox'.", () => {
        testFn.getTextboxExpectValueToBe(inputValueIsTruthy);
      });

      test(`should render an <input>${inputValueIsTruthy}</input>`, () => {
        testFn.getTextboxByPlaceholderTextExpectValueToBe(
          placeholder,
          inputValueIsTruthy
        );
      });

      test("should render a <button>Add</button>", () => {
        testFn.getButtonExpectToHaveTextContent("Add");
      });
    });

    describe("Functions call", () => {
      test("when the 'Add' button is clicked, it should call the 'handleClickAddBtn' function, which is passed to the component via the 'handleClickAddBtn' (onClick) prop.", async () => {
        renderInputWhen(inputValueIsTruthy);
        await testFn.getButtonClickExpectToHaveBeenCalled1Time(
          mockHandleClickAddBtn,
          "Add"
        );
      });
    });
  });
});
