import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingList from "../ShoppingList.jsx";
import generateArrayOfUniqueItemObjects from "../../../utilities/functions/generateArrayOfUniqueItemObjects.js";
import testFn from "../../../utilities/functions/testFn/index";

const mockHandleDeleteItem = vi.fn();
const mockHandleCheckbox = vi.fn();

const renderShoppingListWhenShoppingListArrIsEmpty = () => {
  return render(
    <ShoppingList
      shoppingListArr={[]}
      handleDeleteItem={mockHandleDeleteItem}
      handleCheckbox={mockHandleCheckbox}
    />
  );
};

const renderShoppingListWhenShoppingListArrHasNumberItems = (number) => {
  return render(
    <ShoppingList
      shoppingListArr={generateArrayOfUniqueItemObjects(number)}
      handleDeleteItem={mockHandleDeleteItem}
      handleCheckbox={mockHandleCheckbox}
    />
  );
};

const testOne = 1;
const testTwo = 2;
const testThree = 3;
const testTwenty = 20;

describe("ShoppingList", () => {
  describe("should NOT render, if the shoppingListArr prop is []", () => {
    beforeEach(() => {
      renderShoppingListWhenShoppingListArrIsEmpty();
    });

    test("should NOT render a <ul></ul>", () => {
      testFn.queryUlExpectNotToBeInTheDocument();
    });

    test("should NOT render a <li></li>", () => {
      testFn.queryLiExpectNotToBeInTheDocument();
    });

    test("should NOT render a 'checkbox'", () => {
      testFn.queryCheckboxExpectNotToBeInTheDocument();
    });

    test("should NOT render a <button>Delete</button>", () => {
      testFn.queryButtonExpectNotToBeInTheDocument();
    });
  });

  describe("renders the expected element", () => {
    describe(`if there is '${testOne}' item in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testOne);
      });

      test("should render a <ul></ul>", () => {
        testFn.getUlExpectToBeInTheDocument();
      });

      test("should render a <li></li>", () => {
        testFn.getLiExpectToBeInTheDocument();
      });

      test("should render a 'checkbox'", () => {
        testFn.getCheckboxByLabelTextExpectToBeInTheDocument("string1");
      });

      test("the 'checkbox' should be initially unchecked", () => {
        testFn.getCheckboxByLabelTextExpectNotToBeChecked("string1");
      });

      test("should render a <label>string1</label>", () => {
        testFn.getLabelByTextExpectToBeInTheDocument("string1");
      });

      test("should render a <label class='line-through-false'>string1</label>", () => {
        testFn.getLabelByTextExpectToHaveClass("string1", "line-through-false");
      });

      test("should render a <button>Delete</button>", () => {
        testFn.getButtonExpectToHaveTextContent("Delete");
      });
    });

    describe(`if there are '${testTwo}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testTwo);
      });

      test("should render a <ul></ul>", () => {
        testFn.getUlExpectToBeInTheDocument();
      });

      test(`should render ${testTwo} <li></li>`, () => {
        testFn.getAllLiElementsArrayExpectToHaveLength(testTwo);
      });

      test(`should render ${testTwo} 'checkbox'`, () => {
        testFn.getEachCheckboxByLabelTextExpectToBeInTheDocument(testTwo);
      });

      test("The 'checkbox' elements should be initially unchecked", () => {
        testFn.getEachCheckboxByLabelTextExpectNotToBeChecked(testTwo);
      });

      test(`should render ${testTwo} <label/> elements: <label>string1</label> and <label>string2</label>`, () => {
        testFn.getEachLabelByTextExpectToBeInTheDocument(testTwo);
      });

      test(`should render ${testTwo} <label class='line-through-false'></label>`, () => {
        testFn.getEachLabelByTextExpectToHaveClass(
          testTwo,
          "line-through-false"
        );
      });

      test(`should render ${testTwo} <button>Delete</button>`, () => {
        testFn.getAllBtnElementsArrayExpectToHaveLengthAndEachToHaveTextContent(
          testTwo,
          "Delete"
        );
      });
    });

    describe(`if there are '${testThree}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testThree);
      });

      test("should render a <ul></ul>", () => {
        testFn.getUlExpectToBeInTheDocument();
      });

      test(`should render ${testThree} <li></li>`, () => {
        testFn.getAllLiElementsArrayExpectToHaveLength(testThree);
      });

      test(`should render ${testThree} 'checkbox'`, () => {
        testFn.getEachCheckboxByLabelTextExpectToBeInTheDocument(testThree);
      });

      test("The 'checkbox' elements should be initially unchecked", () => {
        testFn.getEachCheckboxByLabelTextExpectNotToBeChecked(testThree);
      });

      test(`should render ${testThree} <label/> elements with text of 'string1', 'string2' and 'string3'`, () => {
        testFn.getEachLabelByTextExpectToBeInTheDocument(testThree);
      });

      test(`should render ${testThree} <label class='line-through-false'></label>`, () => {
        testFn.getEachLabelByTextExpectToHaveClass(
          testThree,
          "line-through-false"
        );
      });

      test(`should render ${testThree} <button>Delete</button>`, () => {
        testFn.getAllBtnElementsArrayExpectToHaveLengthAndEachToHaveTextContent(
          testThree,
          "Delete"
        );
      });
    });

    describe(`if there are '${testTwenty}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testTwenty);
      });

      test("should render a <ul></ul>", () => {
        testFn.getUlExpectToBeInTheDocument();
      });

      test(`should render ${testTwenty} <li></li>`, () => {
        testFn.getAllLiElementsArrayExpectToHaveLength(testTwenty);
      });

      test(`should render ${testTwenty} 'checkbox'`, () => {
        testFn.getEachCheckboxByLabelTextExpectToBeInTheDocument(testTwenty);
      });

      test("The 'checkbox' elements should be initially unchecked", () => {
        testFn.getEachCheckboxByLabelTextExpectNotToBeChecked(testTwenty);
      });

      test(`should render ${testTwenty} <label/> elements with text of 'string1', 'string2' and ...`, () => {
        testFn.getEachLabelByTextExpectToBeInTheDocument(testTwenty);
      });

      test(`should render ${testTwenty} <label class='line-through-false'></label>`, () => {
        testFn.getEachLabelByTextExpectToHaveClass(
          testTwenty,
          "line-through-false"
        );
      });

      test(`should render ${testTwenty} <button>Delete</button>`, () => {
        testFn.getAllBtnElementsArrayExpectToHaveLengthAndEachToHaveTextContent(
          testTwenty,
          "Delete"
        );
      });
    });
  });

  describe("Functions call", () => {
    describe(`if there is '${testOne}' item in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testOne);
      });

      test("if the 'checkbox' is clicked, it should call the 'handleCheckbox' function, which is passed to the component via the 'handleCheckbox' (onChange) prop.", async () => {
        await testFn.getCheckboxByLabelTextClickExpectToHaveBeenCalled1Time(
          "string1",
          mockHandleCheckbox
        );
      });

      test("if the 'Delete' button is clicked, it should call the 'handleDeleteItem' function, which is passed to the component via the 'handleDeleteItem' (onClick) prop.", async () => {
        await testFn.getButtonClickExpectToHaveBeenCalled1Time(
          mockHandleDeleteItem,
          "Delete"
        );
      });
    });

    describe(`if there are '${testTwo}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testTwo);
      });

      test("if the 'checkbox' elements are clicked, the 'handleCheckbox' function should be called, which is passed to the component via the 'handleCheckbox' (onChange) prop.", async () => {
        await testFn.getEachCheckboxByLabelTextClickExpectToHaveBeenCalledTimes(
          testTwo,
          mockHandleCheckbox
        );
      });

      test("if the 'Delete' buttons are clicked, the 'handleDeleteItem' function should be called, which is passed to the component via the 'handleDeleteItem' (onClick) prop.", async () => {
        await testFn.getAllBtnElementsArrayClickExpectToHaveBeenCalledTimes(
          testTwo,
          "Delete",
          mockHandleDeleteItem
        );
      });
    });

    describe(`if there are '${testThree}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testThree);
      });

      test("if the 'checkbox' elements are clicked, the 'handleCheckbox' function should be called, which is passed to the component via the 'handleCheckbox' (onChange) prop.", async () => {
        await testFn.getEachCheckboxByLabelTextClickExpectToHaveBeenCalledTimes(
          testThree,
          mockHandleCheckbox
        );
      });

      test("if the 'Delete' buttons are clicked, the 'handleDeleteItem' function should be called, which is passed to the component via the 'handleDeleteItem' (onClick) prop.", async () => {
        await testFn.getAllBtnElementsArrayClickExpectToHaveBeenCalledTimes(
          testThree,
          "Delete",
          mockHandleDeleteItem
        );
      });
    });

    describe(`if there are '${testTwenty}' items in the shoppingListArr prop`, () => {
      beforeEach(() => {
        renderShoppingListWhenShoppingListArrHasNumberItems(testTwenty);
      });

      test("if the 'checkbox' elements are clicked, the 'handleCheckbox' function should be called, which is passed to the component via the 'handleCheckbox' (onChange) prop.", async () => {
        await testFn.getEachCheckboxByLabelTextClickExpectToHaveBeenCalledTimes(
          testTwenty,
          mockHandleCheckbox
        );
      });

      test("if the 'Delete' buttons are clicked, the 'handleDeleteItem' function should be called, which is passed to the component via the 'handleDeleteItem' (onClick) prop.", async () => {
        await testFn.getAllBtnElementsArrayClickExpectToHaveBeenCalledTimes(
          testTwenty,
          "Delete",
          mockHandleDeleteItem
        );
      });
    });
  });
});
