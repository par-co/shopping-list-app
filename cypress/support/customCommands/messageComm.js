/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

Cypress.Commands.add("seeMessage", (messageText) => {
  return cy
    .contains(messageText)
    .should("have.length", 1)
    .should("have.text", messageText)
    .should("be.visible");
});

// ----------------------------- should NOT exist -----------------------------

Cypress.Commands.add("noMessageWithText", (messageText) => {
  cy.contains(messageText).should("not.exist");
});

Cypress.Commands.add(
  "noMessages",
  (messageText1, messageText2, messageText3) => {
    cy.noMessageWithText(messageText1);
    cy.noMessageWithText(messageText2);
    cy.noMessageWithText(messageText3);
  }
);

// ----------------------------- only see one message -----------------------------

Cypress.Commands.add(
  "onlySeeOneMessage",
  (seeMessageText, noMessageText1, noMessageText2) => {
    cy.seeMessage(seeMessageText);
    cy.noMessageWithText(noMessageText1);
    cy.noMessageWithText(noMessageText2);
  }
);
