/// <reference types="cypress" />

// title
const h1HomePage = "Shopping List";

// image
const imgAlt = "groceries";

// textbox
const labelText = "Add an item to the list:";
const placeholderText = "type here...";
const initialValue = "";
const space = " ";
const firstItem = "cake";
const secondItem = "rice";
const thirdItem = "bread";
const initialItemClass = "line-through-false";
const itemClassAfterChecking = "line-through-true";

// buttons
const addBtn = "Add";
const deleteBtn = "Delete";
const clearBtn = "Clear the list";

// messages
const empty =
  "Please type something and then click the Add button or press Enter.";
const duplicate = "The item is already in the list.";
const success = "You're done!";

describe("Home page is correctly rendered.", () => {
  context("Initially", () => {
    it("should see", () => {
      cy.visit("/");
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );
    });

    it("should NOT exist", () => {
      cy.visit("/");
      cy.noMessages(empty, duplicate, success);
      cy.noShoppingList(deleteBtn);
      cy.noBtn(clearBtn);
    });
  });

  context("when the input is invalid", () => {
    it("click Add btn without typing anything", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        "",
        deleteBtn,
        initialItemClass,
        clearBtn
      );
    });

    it("press space and then click Add btn", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        space,
        deleteBtn,
        initialItemClass,
        clearBtn
      );
    });
  });

  context("when the input is valid", () => {
    it("add one item, then delete it", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn
      );
    });

    it("add one item, check the item, then uncheck it", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn
      );

      cy.seeCheckbox(firstItem)
        .should("not.be.checked")
        .click()
        .should("be.checked");
      cy.seeLabel(firstItem).should("have.class", itemClassAfterChecking);
      cy.onlySeeOneMessage(success, duplicate, empty);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );

      cy.seeCheckbox(firstItem).click().should("not.be.checked");
      cy.seeLabel(firstItem).should("have.class", initialItemClass);
      cy.noMessages(empty, duplicate, success);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );
    });

    it("add one item, check the item, then delete it", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn
      );
      cy.seeCheckbox(firstItem)
        .should("not.be.checked")
        .click()
        .should("be.checked");
      cy.seeLabel(firstItem).should("have.class", itemClassAfterChecking);
      cy.onlySeeOneMessage(success, duplicate, empty);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );

      cy.clickDeleteBtn(firstItem, deleteBtn);
      cy.noShoppingList(deleteBtn);
      cy.noBtn(clearBtn);
      cy.noMessages(empty, duplicate, success);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );
    });

    it("add one item, then clear the list", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn
      );
      cy.seeBtn(clearBtn).click();
      cy.noShoppingList(deleteBtn);
      cy.noBtn(clearBtn);
      cy.noMessages(empty, duplicate, success);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );
    });

    it("add one item, check the item, then clear the list", () => {
      cy.visit("/");
      cy.tryToAddFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn
      );
      cy.seeCheckbox(firstItem)
        .should("not.be.checked")
        .click()
        .should("be.checked");
      cy.seeLabel(firstItem).should("have.class", itemClassAfterChecking);
      cy.onlySeeOneMessage(success, duplicate, empty);
      cy.seeBtn(clearBtn).click();
      cy.noShoppingList(deleteBtn);
      cy.noBtn(clearBtn);
      cy.noMessages(empty, duplicate, success);
      cy.seeConstElements(
        h1HomePage,
        imgAlt,
        labelText,
        placeholderText,
        initialValue,
        addBtn
      );
    });
  });

  context("after failing to add another item", () => {
    it(`click Add btn, see '${empty}' msg, click Add btn, see '${empty}' msg again`, () => {
      cy.visit("/");
      cy.tryToAddSecondItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn,
        ""
      );

      cy.clickAddSeeEmptyMsg(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success
      );
      cy.seeItem(firstItem, deleteBtn, initialItemClass);
      cy.seeBtn(clearBtn);
    });

    it(`press space, click Add btn see '${empty}' msg, press space, click Add btn, see '${empty}' msg`, () => {
      cy.visit("/");
      cy.tryToAddSecondItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn,
        space
      );

      cy.spaceAddSeeEmptyMsg(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        space
      );
      cy.seeItem(firstItem, deleteBtn, initialItemClass);
      cy.seeBtn(clearBtn);
    });

    it(`type '${firstItem}' again then click Add btn, two times, see '${duplicate}' msg again`, () => {
      cy.visit("/");
      cy.tryToAddSecondItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn,
        firstItem
      );

      cy.typeSameAddSeeDuplicateMsg(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem
      );
      cy.seeItem(firstItem, deleteBtn, initialItemClass);
      cy.seeBtn(clearBtn);
    });

    it(`'${duplicate}' msg changes to '${empty}' msg, then to '${duplicate}' msg`, () => {
      cy.visit("/");
      cy.tryToAddSecondItem(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        initialItemClass,
        clearBtn,
        firstItem
      );

      cy.clickAddSeeEmptyMsg(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success
      );
      cy.seeItem(firstItem, deleteBtn, initialItemClass);
      cy.seeBtn(clearBtn);

      cy.typeSameAddSeeDuplicateMsg(
        labelText,
        placeholderText,
        initialValue,
        h1HomePage,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem
      );
      cy.seeItem(firstItem, deleteBtn, initialItemClass);
      cy.seeBtn(clearBtn);
    });
  });
});

context("after adding another item", () => {
  it(`add '${secondItem}', check it, then delete '${firstItem}', should see '${success}' msg`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);

    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });

  it(`add '${secondItem}', check it, try to add '${secondItem}' again, then delete '${firstItem}', should see '${success}' msg`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.typeSameAddSeeDuplicateMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      secondItem
    );
    cy.seeItem(firstItem, deleteBtn, initialItemClass);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });

  it(`add '${secondItem}', check it, click Add again, then delete '${firstItem}', should see '${success}' msg`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickAddSeeEmptyMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success
    );
    cy.seeItem(firstItem, deleteBtn, initialItemClass);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });

  it(`add '${secondItem}', check it, then delete '${firstItem}', add '${thirdItem}', msgs should not exist`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.typeAddNoMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      thirdItem
    );
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeItem(thirdItem, deleteBtn, initialItemClass);
    cy.seeBtn(clearBtn);
  });

  it(`add '${secondItem}', check it, then delete '${firstItem}', click Add again, should see '${empty}' msg`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickAddSeeEmptyMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success
    );
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
  });

  it(`add '${secondItem}', check it, then delete '${firstItem}', click Add again, uncheck '${secondItem}', msgs should not exist`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickAddSeeEmptyMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success
    );
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);

    cy.seeCheckbox(secondItem)
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.seeLabel(secondItem).should("have.class", initialItemClass);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });

  it(`add '${secondItem}', check it, then delete '${firstItem}', try to add '${secondItem}'again, should see '${duplicate}' msg`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.typeSameAddSeeDuplicateMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      secondItem
    );
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
  });

  it(`add '${secondItem}', check it, then delete '${firstItem}', try to add '${secondItem}'again, uncheck '${secondItem}', msgs should not exist`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.seeCheckbox(secondItem)
      .should("not.be.checked")
      .click()
      .should("be.checked");
    cy.seeLabel(secondItem).should("have.class", itemClassAfterChecking);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.clickDeleteBtn(firstItem, deleteBtn);
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);
    cy.onlySeeOneMessage(success, duplicate, empty);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );

    cy.typeSameAddSeeDuplicateMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      secondItem
    );
    cy.seeItem(secondItem, deleteBtn, itemClassAfterChecking);
    cy.seeBtn(clearBtn);

    cy.seeCheckbox(secondItem)
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.seeLabel(secondItem).should("have.class", initialItemClass);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });

  it(`add '${firstItem}', '${secondItem}' and '${thirdItem}', clear the list`, () => {
    cy.visit("/");
    cy.tryToAddSecondItem(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      initialItemClass,
      clearBtn,
      secondItem
    );

    cy.typeAddNoMsg(
      labelText,
      placeholderText,
      initialValue,
      h1HomePage,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      thirdItem
    );
    cy.seeItem(firstItem, deleteBtn, initialItemClass);
    cy.seeItem(secondItem, deleteBtn, initialItemClass);
    cy.seeItem(thirdItem, deleteBtn, initialItemClass);

    cy.seeBtn(clearBtn).click();
    cy.noShoppingList(deleteBtn);
    cy.noBtn(clearBtn);
    cy.noMessages(empty, duplicate, success);
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
  });
});
