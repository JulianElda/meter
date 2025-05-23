context("GUID generator", () => {
  beforeEach(() => {
    cy.visit("/guid");
  });

  specify("show elements", () => {
    cy.get("h2").contains("GUID generator");
  });

  specify("generate a GUID", () => {
    cy.getByTestId("guid-guid")
      .should("have.prop", "value")
      .should(
        "match",
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
      );
  });

  specify("generate a different GUID", () => {
    cy.getByTestId("guid-guid").as("initialGuid");

    cy.get<string>("@initialGuid").then((initialGuid: string) => {
      cy.getByTestId("guid-refresh").click();
      cy.getByTestId("guid-guid")
        .should("have.prop", "value")
        .should(
          "match",
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
        );

      cy.getByTestId("guid-guid").should("not.have.value", initialGuid);
    });
  });

  specify("show copy message", () => {
    // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__clipboard/cypress/e2e/permissions-spec.cy.js
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Browser.grantPermissions",
        params: {
          permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"],
          origin: window.location.origin,
        },
      })
    );

    cy.getByTestId("guid-copy").click();

    cy.contains("Password copied");
  });
});
