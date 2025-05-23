context("base conversion", () => {
  beforeEach(() => {
    cy.visit("/base");
  });

  specify("show elements", () => {
    cy.get("h2").contains("Base converter");
  });

  specify("initial render: 1100100, 100, 64", () => {
    cy.getByTestId("base-binary").should("have.value", "1100100");
    cy.getByTestId("base-decimal").should("have.value", "100");
    cy.getByTestId("base-hex").should("have.value", "64");
  });

  specify("change binary", () => {
    cy.getByTestId("base-binary").clear();
    cy.getByTestId("base-binary").type("1110110001010");

    cy.getByTestId("base-binary").should("have.value", "1110110001010");
    cy.getByTestId("base-decimal").should("have.value", "7562");
    cy.getByTestId("base-hex").should("have.value", "1d8a");
  });

  specify("change decimal", () => {
    cy.getByTestId("base-decimal").clear();
    cy.getByTestId("base-decimal").type("7562");

    cy.getByTestId("base-binary").should("have.value", "1110110001010");
    cy.getByTestId("base-decimal").should("have.value", "7562");
    cy.getByTestId("base-hex").should("have.value", "1d8a");
  });

  specify("change hex", () => {
    cy.getByTestId("base-hex").clear();
    cy.getByTestId("base-hex").type("1d8a");

    cy.getByTestId("base-binary").should("have.value", "1110110001010");
    cy.getByTestId("base-decimal").should("have.value", "7562");
    cy.getByTestId("base-hex").should("have.value", "1d8a");
  });
});
