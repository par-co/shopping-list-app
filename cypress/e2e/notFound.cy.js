/// <reference types="cypress" />

// title
const h1HomePage = "Shopping List";
const h1PageNotFound = "Page not found!";

// image
const imgAlt = "groceries";

// textbox
const labelText = "Add an item to the list:";
const placeholderText = "type here...";
const initialValue = "";

// buttons
const addBtn = "Add";
const deleteBtn = "Delete";
const clearBtn = "Clear the list";
const shoppingListAppBtn = "Shopping List App";

// messages
const empty =
  "Please type something and then click the Add button or press Enter.";
const duplicate = "The item is already in the list.";
const success = "You're done!";

//NotFound page text
const notFoundPageText =
  "When you click the button, you will be directed to the app's page.";

describe("NotFound page is correctly rendered.", () => {
  it("wrong url, go to the NotFound page", () => {
    cy.visit("/1");
    cy.seeNotFoundPage(h1PageNotFound, notFoundPageText, shoppingListAppBtn);
    cy.noHomePage(
      h1HomePage,
      addBtn,
      empty,
      duplicate,
      success,
      deleteBtn,
      clearBtn
    );
  });

  it("go to Home page from NotFound page", () => {
    cy.visit("/random");
    cy.seeNotFoundPage(h1PageNotFound, notFoundPageText, shoppingListAppBtn);
    cy.noHomePage(
      h1HomePage,
      addBtn,
      empty,
      duplicate,
      success,
      deleteBtn,
      clearBtn
    );

    cy.seeBtn(shoppingListAppBtn).click();

    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.noMessages(empty, duplicate, success);
    cy.noShoppingList(deleteBtn);
    cy.noBtn(clearBtn);
  });

  it("go from Home page to NotFound page", () => {
    cy.visit("/");
    cy.seeConstElements(
      h1HomePage,
      imgAlt,
      labelText,
      placeholderText,
      initialValue,
      addBtn
    );
    cy.noMessages(empty, duplicate, success);
    cy.noShoppingList(deleteBtn);
    cy.noBtn(clearBtn);

    cy.visit("/help");
    cy.seeNotFoundPage(h1PageNotFound, notFoundPageText, shoppingListAppBtn);
    cy.noHomePage(
      h1HomePage,
      addBtn,
      empty,
      duplicate,
      success,
      deleteBtn,
      clearBtn
    );
  });
});
