/// <reference types="cypress" />

// -------------------------------- should see --------------------------------

// elements that are always present
Cypress.Commands.add(
  "seeConstElements",
  (h1text, imgAlt, labelText, placeholderText, textboxValue, addBtn) => {
    cy.seeH1(h1text);
    cy.seeImg(imgAlt);
    cy.seeLabel(labelText);
    cy.seeTextbox(labelText, placeholderText, textboxValue);
    cy.seeBtn(addBtn);
  }
);
