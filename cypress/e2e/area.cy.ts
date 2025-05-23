import { AreaUnits } from "./../../src/constants/area";

context("area conversion", () => {
  beforeEach(() => {
    cy.visit("/area");
  });

  specify("show elements", () => {
    cy.get("h2").contains("Area converter");
  });

  context("standard => standard", () => {
    specify("1 km²: 0.386 mile²", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.km);
      cy.getByTestId("result-select").select(AreaUnits.mile);

      cy.getByTestId("result-input").should("have.value", "0.386");
    });

    specify("1 m²: 10.764 ft²", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.m);
      cy.getByTestId("result-select").select(AreaUnits.ft);

      cy.getByTestId("result-input").should("have.value", "10.764");
    });
  });

  context("standard => non-standard", () => {
    specify("1 km²: 100 Hectare", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.km);
      cy.getByTestId("result-select").select(AreaUnits.hectare);

      cy.getByTestId("result-input").should("have.value", "100");
    });

    specify("1 km²: 247.105 Acre", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.km);
      cy.getByTestId("result-select").select(AreaUnits.acre);

      cy.getByTestId("result-input").should("have.value", "247.105");
    });

    specify("1 mi²: 258.999 Hectare", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.mile);
      cy.getByTestId("result-select").select(AreaUnits.hectare);

      cy.getByTestId("result-input").should("have.value", "258.999");
    });

    specify("1 mi²: 640 Hectare", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.mile);
      cy.getByTestId("result-select").select(AreaUnits.acre);

      cy.getByTestId("result-input").should("have.value", "640");
    });
  });

  context("non-standard => non-standard", () => {
    specify("1 Hectare: 2.471 Acre", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.hectare);
      cy.getByTestId("result-select").select(AreaUnits.acre);

      cy.getByTestId("result-input").should("have.value", "2.471");
    });

    specify("1 Acre: 0.405 Hectare", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(AreaUnits.acre);
      cy.getByTestId("result-select").select(AreaUnits.hectare);

      cy.getByTestId("result-input").should("have.value", "0.405");
    });
  });
});
