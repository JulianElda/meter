context("color conversion", () => {
  beforeEach(() => {
    cy.visit("/color");
  });

  specify("show elements", () => {
    cy.get("h2").contains("Color converter");
  });

  specify("intial render: #DC143C rgb(220, 20, 60) hsl(348, 83%, 47%)", () => {
    cy.getByTestId("color-hex").should("have.value", "#DC143C");
    cy.getByTestId("color-rgb").should("have.value", "64, 75, 10");
    cy.getByTestId("color-hsl").should("have.value", "348, 83%, 47%");
  });

  specify("change rgb", () => {
    cy.getByTestId("color-rgb").clear();
    cy.getByTestId("color-rgb").type("175, 219, 246");

    cy.getByTestId("color-hex").should("have.value", "#AFDBF6");
    cy.getByTestId("color-rgb").should("have.value", "175, 219, 246");
    cy.getByTestId("color-hsl").should("have.value", "203, 80%, 83%");
  });

  specify("change hex", () => {
    cy.getByTestId("color-hex").clear();
    cy.getByTestId("color-hex").type("#AFDBF6");

    cy.getByTestId("color-hex").should("have.value", "#AFDBF6");
    cy.getByTestId("color-rgb").should("have.value", "175, 219, 246");
    cy.getByTestId("color-hsl").should("have.value", "203, 80%, 83%");
  });

  specify("change hsl", () => {
    cy.getByTestId("color-hsl").clear();
    cy.getByTestId("color-hsl").type("203, 80%, 83%");

    cy.getByTestId("color-hex").should("have.value", "#B1DCF6");
    cy.getByTestId("color-rgb").should("have.value", "177, 220, 246");
    cy.getByTestId("color-hsl").should("have.value", "203, 80%, 83%");
  });
});
