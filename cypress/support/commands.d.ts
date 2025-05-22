/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(testId: string): Chainable<HTMLElement>;
    }
  }
}
