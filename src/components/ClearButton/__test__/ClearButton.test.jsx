import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClearButton from "../ClearButton.jsx";
import generateArrayOfUniqueItemObjects from "../../../utilities/functions/generateArrayOfUniqueItemObjects.js";
import testFn from "../../../utilities/functions/testFn/index";

const mockResetShoppingListArr = vi.fn();

const renderClearButtonWhenShoppingListArrIsEmpty = () => {
  return render(
    <ClearButton
      shoppingListArr={[]}
      resetShoppingListArr={mockResetShoppingListArr}
    />
  );
};

const renderClearButtonWhenShoppingListArrHasNumberItems = (number) => {
  return render(
    <ClearButton
      shoppingListArr={generateArrayOfUniqueItemObjects(number)}
      resetShoppingListArr={mockResetShoppingListArr}
    />
  );
};

describe("ClearButton", () => {
  describe("should NOT Render the expected element", () => {
    test("should NOT render a <button>Clear the list</button> if the shoppingListArr prop is []", () => {
      renderClearButtonWhenShoppingListArrIsEmpty();
      testFn.queryButtonExpectNotToBeInTheDocument();
    });
  });

  describe("Renders the expected element", () => {
    describe("should render a <button>Clear the list</button>", () => {
      afterEach(() => {
        testFn.getButtonExpectToHaveTextContent("Clear the list");
      });

      test("if there is 'one' item in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(1);
      });

      test("if there are 'two' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(2);
      });

      test("if there are 'three' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(3);
      });

      test("if there are '20' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(20);
      });
    });
  });

  describe("Functions call", () => {
    describe("if the 'Clear the list' button is clicked, it should call the 'resetShoppingListArr' function, which is passed to the component via the 'resetShoppingListArr' (onClick) prop.", () => {
      afterEach(async () => {
        await testFn.getButtonClickExpectToHaveBeenCalled1Time(
          mockResetShoppingListArr,
          "Clear the list"
        );
      });

      test("When there is 'one' item in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(1);
      });

      test("When there are 'two' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(2);
      });

      test("When there are 'three' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(3);
      });

      test("When there are '20' items in the shoppingListArr prop", () => {
        renderClearButtonWhenShoppingListArrHasNumberItems(20);
      });
    });
  });
});
