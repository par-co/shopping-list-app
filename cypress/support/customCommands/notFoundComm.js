/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeText", (text) => {
  return cy
    .contains(text)
    .should("have.length", 1)
    .should("have.text", text)
    .should("be.visible");
});

Cypress.Commands.add(
  "seeNotFoundPage",
  (h1PageNotFound, notFoundPageText, shoppingListAppBtn) => {
    cy.seeH1(h1PageNotFound);
    cy.seeText(notFoundPageText);
    cy.seeBtn(shoppingListAppBtn);
  }
);

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add(
  "noHomePage",
  (h1HomePage, addBtn, empty, duplicate, success, deleteBtn, clearBtn) => {
    cy.noHomePageH1(h1HomePage);
    cy.noImg();
    cy.noLabelAtAll();
    cy.noTextbox();
    cy.noBtn(addBtn);
    cy.noMessages(empty, duplicate, success);
    cy.noUl();
    cy.noLi();
    cy.noCheckbox();
    cy.noBtn(deleteBtn);
    cy.noBtn(clearBtn);
  }
);
