/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeCheckbox", (labelText) => {
  return cy
    .seeLabel(labelText)
    .invoke("attr", "for")
    .then((checkboxId) => {
      return cy
        .get(`#${checkboxId}`)
        .should("have.length", 1)
        .should("be.visible")
        .should("not.be.disabled")
        .should("have.attr", "type", "checkbox");
      //.should("not.be.checked")
    });
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noCheckbox", () => {
  cy.get('input[type="checkbox"]').should("not.exist");
});
