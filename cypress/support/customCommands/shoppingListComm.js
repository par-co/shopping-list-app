/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeItem", (item, deleteBtnText, labelclass) => {
  cy.seeLi(item).within(() => {
    cy.seeCheckbox(item);
    cy.seeLabel(item).should("have.class", labelclass);
    cy.seeBtn(deleteBtnText);
  });
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noItems", () => {
  cy.get("label").should("have.length", 1);
});

Cypress.Commands.add("noShoppingList", (deleteBtnText) => {
  cy.noUl();
  cy.noLi();
  cy.noCheckbox();
  cy.noItems();
  cy.noBtn(deleteBtnText);
});
