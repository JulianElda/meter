context("currency conversion", () => {
  beforeEach(() => {
    cy.visit("/currency");

    cy.intercept("https://api.frankfurter.app/currencies", {
      EUR: "Euro",
      GBP: "British Pound",
      JPY: "Japanese Yen",
      USD: "United States Dollar",
    });

    cy.intercept("https://api.frankfurter.app/latest?from=EUR", {
      amount: 1.0,
      base: "EUR",
      date: "2025-05-22",
      rates: {
        GBP: 0.8427,
        JPY: 162.19,
        USD: 1.1309,
      },
    });

    cy.intercept("https://api.frankfurter.app/latest?from=GBP", {
      amount: 1.0,
      base: "GBP",
      date: "2025-05-22",
      rates: {
        EUR: 1.1867,
        JPY: 192.46,
        USD: 1.342,
      },
    });

    cy.intercept("https://api.frankfurter.app/latest?from=JPY", {
      amount: 1.0,
      base: "JPY",
      date: "2025-05-22",
      rates: {
        EUR: 0.00629,
        GBP: 0.00541,
        USD: 0.00688,
      },
    });

    cy.intercept("https://api.frankfurter.app/latest?from=USD", {
      amount: 1.0,
      base: "USD",
      date: "2025-05-22",
      rates: {
        EUR: 0.88425,
        GBP: 0.74516,
        JPY: 143.42,
      },
    });
  });

  specify("show elements", () => {
    cy.get("h2").contains("Currency");
  });

  specify("convert target amount when base currency changes", () => {
    // JPY -> USD
    cy.getByTestId("base-currency").select("JPY");
    cy.getByTestId("target-currency").select("USD");
    cy.getByTestId("target-amount").should("have.value", "0.688");

    // JPY -> EUR
    cy.getByTestId("base-currency").select("JPY");
    cy.getByTestId("target-currency").select("EUR");
    cy.getByTestId("target-amount").should("have.value", "0.629");

    // USD -> USD
    cy.getByTestId("base-currency").select("USD");
    cy.getByTestId("target-currency").select("USD");
    cy.getByTestId("target-amount").should("have.value", "100");
  });

  specify("convert target amount when base amount changes", () => {
    // 10000 JPY -> 68.8 USD
    cy.getByTestId("base-currency").select("JPY");
    cy.getByTestId("base-amount").clear();
    cy.getByTestId("base-amount").type("10000");
    cy.getByTestId("target-amount").should("have.value", "68.8");
  });

  specify("convert base amount when target amount changes", () => {
    // 100 USD -> 68.8 USD
    cy.getByTestId("base-currency").select("JPY");
    cy.getByTestId("target-amount").clear();
    cy.getByTestId("target-amount").type("100");
    cy.getByTestId("base-amount").should("have.value", "14534.884");
  });
});
