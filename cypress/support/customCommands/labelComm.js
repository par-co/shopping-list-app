/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeLabel", (labelText) => {
  return cy
    .contains("label", labelText)
    .should("have.length", 1)
    .should("have.text", labelText)
    .should("be.visible");
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noLabel", (labelText) => {
  cy.contains("label", labelText).should("not.exist");
});

Cypress.Commands.add("noLabelAtAll", () => {
  cy.get("label").should("not.exist");
});
