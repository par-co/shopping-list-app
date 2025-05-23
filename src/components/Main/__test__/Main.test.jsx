import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../Main.jsx";
import testFn from "../../../utilities/functions/testFn/index";
import enterFn from "../../../utilities/functions/enterFn/index";
import addFn from "../../../utilities/functions/addFn/index";

const placeholderText = "type here...";

const duplicate = "The item is already in the list.";
const empty =
  "Please type something and then click the Add button or press Enter.";
const success = "You're done!";

const firstItem = "string1";
const secondItem = "string2";
const thirdItem = "string3";

const add = "Add";
const del = "Delete";
const clear = "Clear the list";

describe("Main component", () => {
  beforeEach(() => {
    render(<Main />);
  });

  describe("renders the expected elements", () => {
    test("should render <main></main>", () => {
      testFn.getMainExpectToBeInTheDocument();
    });

    test("should render a <img alt='groceries' />", () => {
      testFn.getImgExpectToHaveAlt("groceries");
    });

    test("should render a textbox and the initial value should be ''", () => {
      testFn.getTextboxByPlaceholderTextExpectValueToBe(placeholderText, "");
    });

    test("should NOT render the message initially", () => {
      testFn.queryH2ExpectNotToBeInTheDocument();
    });

    test("should NOT render the ShoppingList initially", () => {
      testFn.queryUlExpectNotToBeInTheDocument();
    });

    test("should NOT render the ClearButton initially", () => {
      testFn.queryClearButtonNotToBe(clear);
    });
  });

  describe("functionalities", () => {
    describe("Input component", () => {
      describe("typing into the textbox", () => {
        test("when the user types 'string1' the input value should be changed to 'string1'", async () => {
          await testFn.typeSomething(placeholderText, firstItem);
        });

        test("when the user types ' ' (space) the input value should be changed to ' '", async () => {
          await testFn.typeSomething(placeholderText, " ");
        });
      });

      describe("reset textbox value", () => {
        describe("using Add btn", () => {
          test("when the user click the Add btn, without typing, the input value should be ''", async () => {
            await addFn.withoutTypingAddBtn(placeholderText, add);
          });

          test("when the user types 'string1' then click the Add btn the input value should be changed to ''", async () => {
            await addFn.typeAddBtnResetTextbox(placeholderText, firstItem, add);
          });

          test("when the user types ' ' (space) then click the Add btn the input value should be changed to ''", async () => {
            await addFn.typeAddBtnResetTextbox(placeholderText, " ", add);
          });
        });

        describe("using Enter", () => {
          test("when the user clicks on the textbox then presses Enter, without typing, the input value should be ''", async () => {
            await enterFn.withoutTypingEnter(placeholderText);
          });

          test("when the user types 'string1' then presses Enter the input value should be changed to ''", async () => {
            await enterFn.typeEnterResetTextbox(placeholderText, firstItem);
          });

          test("when the user types ' ' (space) then presses Enter the input value should be changed to ''", async () => {
            await enterFn.typeEnterResetTextbox(placeholderText, " ");
          });
        });
      });

      describe("typing again after reset", () => {
        describe("using Add btn", () => {
          test("when the user click the Add btn, without typing, then types 'string1' the input value should be changed to 'string1'", async () => {
            await addFn.addBtnTypeSth(placeholderText, add, firstItem);
          });

          test("when the user types 'string1' then click Add btn, then types 'string2' the input value should be changed to 'string2'", async () => {
            await addFn.typeSthAddBtnTypeSthElse(
              placeholderText,
              firstItem,
              add,
              secondItem
            );
          });
        });

        describe("using Enter", () => {
          test("when the user clicks on textbox, presses Enter, without typing, then types 'string1' the input value should be changed to 'string1'", async () => {
            await enterFn.enterTypeSth(placeholderText, firstItem);
          });

          test("when the user types 'string1' then presses Enter, then types 'string2' the input value should be changed to 'string2'", async () => {
            await enterFn.typeSthEnterTypeSthElse(
              placeholderText,
              firstItem,
              secondItem
            );
          });
        });
      });
    });

    describe("Message component", () => {
      describe("shows the Message correctly or does NOT show any messages", () => {
        describe("without typing", () => {
          test(`when the user click the Add btn, there should be a message with text of '${empty}'`, async () => {
            await addFn.withoutTypingAddBtnMsg(placeholderText, add, empty);
          });

          test(`when the user clicks on textbox, presses Enter, there should be a message with text of '${empty}'`, async () => {
            await enterFn.withoutTypingEnterMsg(placeholderText, empty);
          });
        });

        describe("typing ' ' (space)", () => {
          test(`when the user click the Add btn, there should be a message with text of '${empty}'`, async () => {
            await addFn.spaceAddBtnMsg(placeholderText, " ", add, empty);
          });

          test(`when the user click the Add btn, there should be a message with text of '${empty}'`, async () => {
            await addFn.spaceAddBtnMsg(placeholderText, "      ", add, empty);
          });

          test(`when the user presses Enter, there should be a message with text of '${empty}'`, async () => {
            await enterFn.spaceEnterMsg(placeholderText, " ", empty);
          });

          test(`when the user presses Enter, there should be a message with text of '${empty}'`, async () => {
            await enterFn.spaceEnterMsg(placeholderText, "      ", empty);
          });
        });

        describe("typing a valid input", () => {
          test("when the user click the Add btn, there should NOT be a Message", async () => {
            await addFn.typeSthAddBtnNoMsg(placeholderText, firstItem, add);
          });

          test("when the user presses Enter, there should NOT be a Message", async () => {
            await enterFn.typeSthEnterNoMsg(placeholderText, firstItem);
          });
        });

        describe("typing two different valid inputs", () => {
          test("when the user click the Add btn, there should NOT be a Message", async () => {
            await addFn.typeDifferentAddBtnNoMsg(
              placeholderText,
              firstItem,
              secondItem,
              add
            );
          });

          test("when the user presses Enter, there should NOT be a Message", async () => {
            await enterFn.typeDifferentEnterNoMsg(
              placeholderText,
              firstItem,
              secondItem
            );
          });
        });

        describe("typing the same thing again", () => {
          test(`when the user click the Add btn, there should be a message with text of '${duplicate}'`, async () => {
            await addFn.typeSameAddBtnMsg(
              placeholderText,
              firstItem,
              add,
              duplicate
            );
          });

          test(`when the user clicks on textbox, presses Enter, there should be a message with text of '${duplicate}'`, async () => {
            await enterFn.typeSameEnterMsg(
              placeholderText,
              firstItem,
              duplicate
            );
          });
        });

        describe("the message changes", () => {
          describe("using Add btn", () => {
            test(`message should change from '${duplicate}' to '${empty}' to '${duplicate}' to '${empty}'`, async () => {
              await addFn.duplicateEmpty(
                placeholderText,
                firstItem,
                add,
                duplicate,
                empty
              );
            });

            test(`message should change from '${duplicate}' to NOT showing any messages to '${duplicate}' to NOT showing any messages`, async () => {
              await addFn.duplicateNoMsg(
                placeholderText,
                firstItem,
                secondItem,
                thirdItem,
                add,
                duplicate
              );
            });

            test(`should change from NOT showing any messages to '${empty}' to NOT showing any messages to '${empty}'`, async () => {
              await addFn.noMsgEmpty(
                placeholderText,
                firstItem,
                secondItem,
                add,
                empty
              );
            });
          });

          describe("using Enter", () => {
            test(`message should change from '${duplicate}' to '${empty}' to '${duplicate}' to '${empty}'`, async () => {
              await enterFn.duplicateEmpty(
                placeholderText,
                firstItem,
                duplicate,
                empty
              );
            });

            test(`message should change from '${duplicate}' to NOT showing any messages to '${duplicate}' to NOT showing any messages`, async () => {
              await enterFn.duplicateNoMsg(
                placeholderText,
                firstItem,
                secondItem,
                thirdItem,
                duplicate
              );
            });

            test(`should change from NOT showing any messages to '${empty}' to NOT showing any messages to '${empty}'`, async () => {
              await enterFn.noMsgEmpty(
                placeholderText,
                firstItem,
                empty,
                secondItem
              );
            });
          });
        });
      });
    });

    describe("ShoppingList component", () => {
      describe("should NOT render ShoppingList", () => {
        afterEach(() => {
          testFn.queryClearButtonNotToBe(clear);
        });

        describe("without typing", () => {
          test("if the user click the Add btn", async () => {
            await addFn.addBtnNoShoppingList(add);
          });

          test("if the user clicks on textbox, presses Enter", async () => {
            await enterFn.enterNoShoppingList(placeholderText);
          });
        });

        describe("typing ' ' (space)", () => {
          test("if the user click the Add btn", async () => {
            await addFn.spaceAddBtnNoShoppingList(placeholderText, " ", add);
          });

          test("if the user presses Enter", async () => {
            await enterFn.spaceEnterNoShoppingList(placeholderText, " ");
          });
        });
      });

      describe("should render ShoppingList correctly", () => {
        describe("after typing a valid item", () => {
          describe("click the Add btn", () => {
            test(`should render a checkbox, the item and a '${del}' btn`, async () => {
              await addFn.addOneItem(placeholderText, firstItem, add, del);
            });

            test("the 'checkbox' should be initially unchecked", async () => {
              await addFn.initiallyUnchecked(
                placeholderText,
                firstItem,
                add,
                del
              );
            });

            test("the item should initially have 'line-through-false' class", async () => {
              await addFn.initialClassOfItem(
                placeholderText,
                firstItem,
                add,
                del,
                "line-through-false"
              );
            });

            test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
              await addFn.addOneItemDelete(
                placeholderText,
                firstItem,
                add,
                del,
                clear
              );
            });

            describe("after clicking on the checkbox", () => {
              test("the 'checkbox' should be checked", async () => {
                await addFn.check(placeholderText, firstItem, add, del);
              });

              test("the item should have 'line-through-true' class", async () => {
                await addFn.checkClassOfItem(
                  placeholderText,
                  firstItem,
                  add,
                  del,
                  "line-through-true"
                );
              });

              test(`should render the '${success}' message`, async () => {
                await addFn.showSuccessMsg(
                  placeholderText,
                  firstItem,
                  add,
                  del,
                  success
                );
              });

              test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
                await addFn.addOneCheckDelete(
                  placeholderText,
                  firstItem,
                  add,
                  del,
                  clear
                );
              });

              test(`should NOT render any messages after clicking on the '${del}' btn`, async () => {
                await addFn.addOneCheckDeleteNoMsg(
                  placeholderText,
                  firstItem,
                  add,
                  del,
                  clear
                );
              });

              describe("after clicking on the checkbox to uncheck it", () => {
                test("the 'checkbox' should be unchecked", async () => {
                  await addFn.uncheck(placeholderText, firstItem, add, del);
                });

                test("the item should have 'line-through-false' class", async () => {
                  await addFn.uncheckClassOfItem(
                    placeholderText,
                    firstItem,
                    add,
                    del,
                    "line-through-false"
                  );
                });

                test("should NOT render any messages", async () => {
                  await addFn.checkUncheckNoMsg(
                    placeholderText,
                    firstItem,
                    add,
                    del
                  );
                });

                test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
                  await addFn.addOneCheckUncheckDelete(
                    placeholderText,
                    firstItem,
                    add,
                    del,
                    clear
                  );
                });

                test(`should NOT render any messages after clicking on the '${del}' btn`, async () => {
                  await addFn.addOneCheckUncheckDeleteNoMsg(
                    placeholderText,
                    firstItem,
                    add,
                    del,
                    clear
                  );
                });
              });
            });
          });

          describe("press Enter", () => {
            test(`should render a checkbox, the item and a '${del}' btn`, async () => {
              await enterFn.addOneItem(placeholderText, firstItem, del);
            });

            test("the 'checkbox' should be initially unchecked", async () => {
              await enterFn.initiallyUnchecked(placeholderText, firstItem, del);
            });

            test("the item should initially have 'line-through-false' class", async () => {
              await enterFn.initialClassOfItem(
                placeholderText,
                firstItem,
                del,
                "line-through-false"
              );
            });

            test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
              await enterFn.addOneItemDelete(
                placeholderText,
                firstItem,
                del,
                clear
              );
            });

            describe("after clicking on the checkbox", () => {
              test("the 'checkbox' should be checked", async () => {
                await enterFn.check(placeholderText, firstItem, del);
              });

              test("the item should have 'line-through-true' class", async () => {
                await enterFn.checkClassOfItem(
                  placeholderText,
                  firstItem,
                  del,
                  "line-through-true"
                );
              });

              test(`should render the '${success}' message`, async () => {
                await enterFn.showSuccessMsg(
                  placeholderText,
                  firstItem,
                  del,
                  success
                );
              });

              test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
                await enterFn.addOneCheckDelete(
                  placeholderText,
                  firstItem,
                  del,
                  clear
                );
              });

              test(`should NOT render any messages after clicking on the '${del}' btn`, async () => {
                await enterFn.addOneCheckDeleteNoMsg(
                  placeholderText,
                  firstItem,
                  del,
                  clear
                );
              });

              describe("after clicking on the checkbox to uncheck it", () => {
                test("the 'checkbox' should be unchecked", async () => {
                  await enterFn.uncheck(placeholderText, firstItem, del);
                });

                test("the item should have 'line-through-false' class", async () => {
                  await enterFn.uncheckClassOfItem(
                    placeholderText,
                    firstItem,
                    del,
                    "line-through-false"
                  );
                });

                test("should NOT render any messages", async () => {
                  await enterFn.checkUncheckNoMsg(
                    placeholderText,
                    firstItem,
                    del
                  );
                });

                test(`the item should be deleted after clicking on the '${del}' btn and should NOT render the '${clear}' btn`, async () => {
                  await enterFn.addOneCheckUncheckDelete(
                    placeholderText,
                    firstItem,
                    del,
                    clear
                  );
                });

                test(`should NOT render any messages after clicking on the '${del}' btn`, async () => {
                  await enterFn.addOneCheckUncheckDeleteNoMsg(
                    placeholderText,
                    firstItem,
                    del,
                    clear
                  );
                });
              });
            });
          });
        });

        describe("after typing two valid items", () => {
          describe("click the Add btn", () => {
            test(`should render two checkbox, the items and two '${del}' btns`, async () => {
              await addFn.addTwoItems(
                placeholderText,
                firstItem,
                add,
                del,
                secondItem
              );
            });

            test("the checkboxes should be initially unchecked", async () => {
              await addFn.bothInitiallyUnchecked(
                placeholderText,
                firstItem,
                secondItem,
                add,
                del
              );
            });

            test("the items should initially have 'line-through-false' class", async () => {
              await addFn.initialClassOfBothItems(
                placeholderText,
                firstItem,
                secondItem,
                add,
                del,
                "line-through-false"
              );
            });

            test("can check the first checkbox", async () => {
              await addFn.checkFirstCheckbox(
                placeholderText,
                firstItem,
                secondItem,
                add,
                del
              );
            });

            describe("after checking the first checkbox", () => {
              test("the first item should have 'line-through-true' class", async () => {
                await addFn.checkFirstClassOfItem(
                  placeholderText,
                  firstItem,
                  secondItem,
                  add,
                  del,
                  "line-through-true"
                );
              });

              test("should NOT render any messages", async () => {
                await addFn.checkFirstNoMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  add,
                  del
                );
              });

              test("can delete the 2nd item", async () => {
                await addFn.checkFirstDeleteSecond(
                  placeholderText,
                  firstItem,
                  secondItem,
                  add,
                  del,
                  clear
                );
              });

              test(`after deleting the 2nd item, should render the '${success}' message`, async () => {
                await addFn.checkFirstDeleteSecondSuccessMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  add,
                  del,
                  clear,
                  success
                );
              });

              test("after adding the 3rd item, should NOT render any messages", async () => {
                await addFn.add3rdItemNoMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  thirdItem,
                  add,
                  del,
                  clear
                );
              });
            });
          });

          describe("press Enter", () => {
            test(`should render two checkbox, the items and two '${del}' btns`, async () => {
              await enterFn.addTwoItems(
                placeholderText,
                firstItem,
                del,
                secondItem
              );
            });

            test("the checkboxes should be initially unchecked", async () => {
              await enterFn.bothInitiallyUnchecked(
                placeholderText,
                firstItem,
                secondItem,
                del
              );
            });

            test("the items should initially have 'line-through-false' class", async () => {
              await enterFn.initialClassOfBothItems(
                placeholderText,
                firstItem,
                secondItem,
                del,
                "line-through-false"
              );
            });

            test("can check the first checkbox", async () => {
              await enterFn.checkFirstCheckbox(
                placeholderText,
                firstItem,
                secondItem,
                del
              );
            });

            describe("after checking the first checkbox", () => {
              test("the first item should have 'line-through-true' class", async () => {
                await enterFn.checkFirstClassOfItem(
                  placeholderText,
                  firstItem,
                  secondItem,
                  del,
                  "line-through-true"
                );
              });

              test("should NOT render any messages", async () => {
                await enterFn.checkFirstNoMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  del
                );
              });

              test("can delete the 2nd item", async () => {
                await enterFn.checkFirstDeleteSecond(
                  placeholderText,
                  firstItem,
                  secondItem,
                  del,
                  clear
                );
              });

              test(`after deleting the 2nd item, should render the '${success}' message`, async () => {
                await enterFn.checkFirstDeleteSecondSuccessMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  del,
                  clear,
                  success
                );
              });

              test("after adding the 3rd item, should NOT render any messages", async () => {
                await enterFn.add3rdItemNoMsg(
                  placeholderText,
                  firstItem,
                  secondItem,
                  thirdItem,
                  del,
                  clear
                );
              });
            });
          });
        });
      });
    });

    describe("ClearButton component", () => {
      describe("after adding one item to the list", () => {
        describe("using Add btn", () => {
          test(`should render the '${clear}' btn`, async () => {
            await addFn.addOneFindClearBtn(
              placeholderText,
              firstItem,
              add,
              del,
              clear
            );
          });

          test(`after clicking on the '${clear}' btn, should NOT render any items and the '${clear}' btn`, async () => {
            await addFn.addOneItemClear(
              placeholderText,
              firstItem,
              add,
              del,
              clear
            );
          });
        });

        describe("press Enter", () => {
          test(`should render the '${clear}' btn`, async () => {
            await enterFn.addOneFindClearBtn(
              placeholderText,
              firstItem,
              del,
              clear
            );
          });

          test(`after clicking on the '${clear}' btn, should NOT render any items and the '${clear}' btn`, async () => {
            await enterFn.addOneItemClear(
              placeholderText,
              firstItem,
              del,
              clear
            );
          });
        });
      });

      describe("after adding two items to the list", () => {
        describe("using Add btn", () => {
          test(`should render the '${clear}' btn`, async () => {
            await addFn.addTwoItemsFindClearBtn(
              placeholderText,
              firstItem,
              secondItem,
              add,
              del,
              clear
            );
          });

          test(`after clicking on the '${clear}' btn, should NOT render any items and the '${clear}' btn`, async () => {
            await addFn.addTwoItemsClear(
              placeholderText,
              firstItem,
              secondItem,
              add,
              del,
              clear
            );
          });
        });

        describe("press Enter", () => {
          test(`should render the '${clear}' btn`, async () => {
            await enterFn.addTwoItemsFindClearBtn(
              placeholderText,
              firstItem,
              secondItem,
              del,
              clear
            );
          });

          test(`after clicking on the '${clear}' btn, should NOT render any items and the '${clear}' btn`, async () => {
            await enterFn.addTwoItemsClear(
              placeholderText,
              firstItem,
              secondItem,
              del,
              clear
            );
          });
        });
      });
    });
  });
});
