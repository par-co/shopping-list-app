/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("oneHeader", () => {
  return cy.get("header").should("have.length", 1);
});

Cypress.Commands.add("seeH1", (h1text) => {
  cy.oneHeader().within(() => {
    cy.contains("h1", h1text)
      .should("have.length", 1)
      .should("have.text", h1text)
      .should("be.visible");
  });
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noHomePageH1", (h1HomePage) => {
  cy.contains("h1", h1HomePage).should("not.exist");
});
