/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("getByTestId", (testId: string) => {
  return cy.get(`[data-testid=${testId}]`);
});
