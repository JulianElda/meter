import { LengthUnits } from "../../src/constants/length";

context("length conversion", () => {
  beforeEach(() => {
    cy.visit("/length");
  });

  specify("show elements", () => {
    cy.get("h2").contains("Length converter");
  });

  context("Metric units", () => {
    specify("1 km: 1000 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "1000");
    });

    specify("1 km: 100000 cm", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.cm);

      cy.getByTestId("result-input").should("have.value", "100000");
    });

    specify("1 m: 0.001 km", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.m);
      cy.getByTestId("result-select").select(LengthUnits.km);

      cy.getByTestId("result-input").should("have.value", "0.001");
    });

    specify("1 m: 100 cm", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.m);
      cy.getByTestId("result-select").select(LengthUnits.cm);

      cy.getByTestId("result-input").should("have.value", "100");
    });

    specify("1 cm: 0.01 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.cm);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "0.01");
    });
  });

  context("Imperial units", () => {
    specify("1 feet: 12 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.ft);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "12");
    });

    specify("1 yard: 36 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.yard);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "36");
    });

    specify("1 yard: 3 feet", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.yard);
      cy.getByTestId("result-select").select(LengthUnits.ft);

      cy.getByTestId("result-input").should("have.value", "3");
    });

    specify("1 mile: 63360 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.mile);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "63360");
    });

    specify("1 mile: 5280 ft", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.mile);
      cy.getByTestId("result-select").select(LengthUnits.ft);

      cy.getByTestId("result-input").should("have.value", "5280");
    });

    specify("1 mile: 1760 yard", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.mile);
      cy.getByTestId("result-select").select(LengthUnits.yard);

      cy.getByTestId("result-input").should("have.value", "1760");
    });
  });

  context("Imperial to Metric", () => {
    specify("1 mile: 1.609 km", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.mile);
      cy.getByTestId("result-select").select(LengthUnits.km);

      cy.getByTestId("result-input").should("have.value", "1.609");
    });

    specify("1 mile: 1609.344 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.mile);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "1609.344");
    });

    specify("1 yard: 0.914 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.yard);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "0.914");
    });

    specify("1 yard: 0.914 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.yard);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "0.914");
    });

    specify("1 yard: 91.440 cm", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.yard);
      cy.getByTestId("result-select").select(LengthUnits.cm);

      cy.getByTestId("result-input").should("have.value", "91.44");
    });

    specify("1 ft: 0.305 m", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.ft);
      cy.getByTestId("result-select").select(LengthUnits.m);

      cy.getByTestId("result-input").should("have.value", "0.305");
    });

    specify("1 inch: 2.540 cm", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.inch);
      cy.getByTestId("result-select").select(LengthUnits.cm);

      cy.getByTestId("result-input").should("have.value", "2.54");
    });
  });

  context("Metric to Imperial", () => {
    specify("1 km: 0.621 mile", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.mile);

      cy.getByTestId("result-input").should("have.value", "0.621");
    });

    specify("1 km: 1093.613 yard", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.yard);

      cy.getByTestId("result-input").should("have.value", "1093.613");
    });

    specify("1 km: 3280.840 ft", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.ft);

      cy.getByTestId("result-input").should("have.value", "3280.84");
    });

    specify("1 km: 39370.079 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.km);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "39370.079");
    });

    specify("1 m: 1.094 yard", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.m);
      cy.getByTestId("result-select").select(LengthUnits.yard);

      cy.getByTestId("result-input").should("have.value", "1.094");
    });

    specify("1 m: 3.281 feet", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.m);
      cy.getByTestId("result-select").select(LengthUnits.ft);

      cy.getByTestId("result-input").should("have.value", "3.281");
    });

    specify("1 m: 39.370 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.m);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "39.37");
    });

    specify("1 cm: 0.394 inch", () => {
      cy.getByTestId("from-input").clear();
      cy.getByTestId("from-input").type("1");

      cy.getByTestId("from-select").select(LengthUnits.cm);
      cy.getByTestId("result-select").select(LengthUnits.inch);

      cy.getByTestId("result-input").should("have.value", "0.394");
    });
  });
});
