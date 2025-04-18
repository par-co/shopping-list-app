/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add(
  "seeTextbox",
  (labelText, placeholderText, textboxValue) => {
    return cy
      .seeLabel(labelText)
      .invoke("attr", "for")
      .then((textboxId) => {
        return cy
          .get(`#${textboxId}`)
          .should("have.length", 1)
          .should("have.value", `${textboxValue}`)
          .should("be.visible")
          .should("not.be.disabled")
          .should("have.attr", "placeholder", placeholderText)
          .should("have.attr", "type", "text");
      });
  }
);

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noTextbox", () => {
  cy.get('input[type="text"]').should("not.exist");
});
