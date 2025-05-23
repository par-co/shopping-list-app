/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeImg", (imgAlt) => {
  cy.get("img")
    .should("have.length", 1)
    .should("have.attr", "alt", `${imgAlt}`)
    .should("be.visible")
    .should("have.prop", "naturalWidth")
    .should("be.greaterThan", 0);
});

// cy.get(`img[alt="${imgAlt}"]`)

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noImg", () => {
  cy.get("img").should("not.exist");
});
