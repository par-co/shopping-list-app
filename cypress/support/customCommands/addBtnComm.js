/// <reference types="cypress" />

Cypress.Commands.add(
  "clickAddSeeEmptyMsg",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success
  ) => {
    cy.seeBtn(addBtn).click();
    cy.seeConstElements(
      h1text,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.onlySeeOneMessage(empty, duplicate, success);
  }
);

Cypress.Commands.add(
  "spaceAddSeeEmptyMsg",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    space
  ) => {
    cy.seeTextbox(labelText, placeholderText, initialValue).type(space);
    cy.seeTextbox(labelText, placeholderText, space);
    cy.seeBtn(addBtn).click();
    cy.seeConstElements(
      h1text,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.onlySeeOneMessage(empty, duplicate, success);
  }
);

Cypress.Commands.add(
  "typeAddNoMsg",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    item
  ) => {
    cy.seeTextbox(labelText, placeholderText, initialValue).type(item);
    cy.seeTextbox(labelText, placeholderText, item);
    cy.seeBtn(addBtn).click();
    cy.seeConstElements(
      h1text,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.noMessages(empty, duplicate, success);
  }
);

Cypress.Commands.add(
  "addFirstItem",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    firstItem,
    deleteBtn,
    itemClass,
    clearBtn
  ) => {
    cy.typeAddNoMsg(
      labelText,
      placeholderText,
      initialValue,
      h1text,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem
    );
    cy.seeItem(firstItem, deleteBtn, itemClass);
    cy.seeBtn(clearBtn);
  }
);

Cypress.Commands.add(
  "typeSameAddSeeDuplicateMsg",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    same
  ) => {
    cy.seeTextbox(labelText, placeholderText, initialValue).type(same);
    cy.seeTextbox(labelText, placeholderText, same);
    cy.seeBtn(addBtn).click();
    cy.seeConstElements(
      h1text,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.onlySeeOneMessage(duplicate, empty, success);
  }
);

Cypress.Commands.add(
  "tryToAddFirstItem",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    firstItem,
    deleteBtn,
    itemClass,
    clearBtn
  ) => {
    if (firstItem === "" || firstItem.trim() === "") {
      cy.clickAddSeeEmptyMsg(
        labelText,
        placeholderText,
        initialValue,
        h1text,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success
      );
      cy.noShoppingList(deleteBtn);
      cy.noBtn(clearBtn);
    } else {
      cy.addFirstItem(
        labelText,
        placeholderText,
        initialValue,
        h1text,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        firstItem,
        deleteBtn,
        itemClass,
        clearBtn
      );
    }
  }
);

Cypress.Commands.add(
  "tryToAddSecondItem",
  (
    labelText,
    placeholderText,
    initialValue,
    h1text,
    imgAlt,
    addBtn,
    empty,
    duplicate,
    success,
    firstItem,
    deleteBtn,
    itemClass,
    clearBtn,
    nextItem
  ) => {
    cy.tryToAddFirstItem(
      labelText,
      placeholderText,
      initialValue,
      h1text,
      imgAlt,
      addBtn,
      empty,
      duplicate,
      success,
      firstItem,
      deleteBtn,
      itemClass,
      clearBtn
    );
    if (nextItem === "" || nextItem.trim() === "") {
      cy.clickAddSeeEmptyMsg(
        labelText,
        placeholderText,
        initialValue,
        h1text,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success
      );
      cy.seeItem(firstItem, deleteBtn, itemClass);
      cy.seeBtn(clearBtn);
    } else if (
      nextItem.trim().toLowerCase() === firstItem.trim().toLowerCase()
    ) {
      cy.typeSameAddSeeDuplicateMsg(
        labelText,
        placeholderText,
        initialValue,
        h1text,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        nextItem
      );
      cy.seeItem(firstItem, deleteBtn, itemClass);
      cy.seeBtn(clearBtn);
    } else {
      cy.typeAddNoMsg(
        labelText,
        placeholderText,
        initialValue,
        h1text,
        imgAlt,
        addBtn,
        empty,
        duplicate,
        success,
        nextItem
      );
      cy.seeItem(firstItem, deleteBtn, itemClass);
      cy.seeItem(nextItem, deleteBtn, itemClass);
      cy.seeBtn(clearBtn);
    }
  }
);
