/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeBtn", (btnText) => {
  return cy
    .contains("button", btnText)
    .should("have.length", 1)
    .should("have.text", btnText)
    .should("be.visible")
    .should("not.be.disabled");
});

Cypress.Commands.add("clickDeleteBtn", (item, deleteBtnText) => {
  cy.seeLi(item).within(() => {
    cy.seeBtn(deleteBtnText).click();
  });
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noBtn", (btnText) => {
  cy.contains("button", btnText).should("not.exist");
});
