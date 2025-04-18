/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("oneUl", () => {
  return cy.get("ul").should("have.length", 1);
});

Cypress.Commands.add("seeLi", (liText) => {
  return cy.oneUl().within(() => {
    return (
      cy
        .contains("li", liText)
        .should("have.length", 1)
        // .should("have.text", liText)
        .should("be.visible")
    );
  });
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noUl", () => {
  cy.get("ul").should("not.exist");
});

Cypress.Commands.add("noLi", () => {
  cy.get("li").should("not.exist");
});
