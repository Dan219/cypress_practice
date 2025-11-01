export class BasePage {
  visit(path: string): void {
    cy.visit(path);
  }

  click(selector: string): void {
    cy.get(selector).click({ force: true });
  }

  type(selector: string, text: string): void {
    cy.get(selector).clear();
    if (text) cy.get(selector).type(text);
  }

  getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  shouldBeVisible(selector: string): void {
    cy.get(selector).should("be.visible");
  }

  shouldContainText(selector: string, text: string): void {
    cy.get(selector).should("contain.text", text);
  }
}