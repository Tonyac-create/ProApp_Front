/// <reference types="cypress" />

describe("LoginPage", () => {
  it("Choice Role Professionnal and Register", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Professionnel").click();
    cy.contains("Inscription").click();
  });
});

describe("LoginPage", () => {
  it("Choice Role Professionnal to Login and Password Forgot", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Professionnel").click();
    cy.get("a").contains("Mot de passe perdu").click();
    cy.get("div").contains("Modifier votre mot de passe");
    cy.get("button").contains("Cancel").click();
  });
});

describe("LoginPage", () => {
  it("Choice Role Apprenti and Register", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Apprenti").click();
    cy.get("a").contains("Inscription").click();
  });
});

describe("LoginPage", () => {
  it("Choice Role Apprenti to Login and Password Forgot", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Apprenti").click();
    cy.get("a").contains("Mot de passe perdu").click();
    cy.get("div").contains("Modifier votre mot de passe");
    cy.get("button").contains("Cancel").click();
  });
});


