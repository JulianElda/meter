context("Home", () => {
  specify("loads home page", () => {
    cy.visit("/");

    cy.get("h1").contains("meter");
  });
});
