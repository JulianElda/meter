context("Home", () => {
  specify("loads home page, common elements", () => {
    cy.visit("/");

    // title
    cy.get("h1").contains("meter");

    // sidenav
    cy.getByTestId("sidenav").within(() => {
      cy.contains("Converters");
      cy.contains("Area");
      cy.contains("Base");
      cy.contains("Length");
      cy.contains("Temperature");
      cy.contains("Volume");
      cy.contains("Weight");

      cy.contains("Utilities");
      cy.contains("Currency");
      cy.contains("Lorem Ipsum");
      cy.contains("GUID");
      cy.contains("Password");
    });

    cy.contains("Julius Polar");
    cy.contains("GitHub");
  });
});
