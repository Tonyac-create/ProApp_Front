describe("Test Form Zod SignUp", () => {
  it("Display AllErrorInputs Message", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Apprenti").click();
    cy.get("a").contains("Inscription").click();
    cy.get("input[name='usermail").type("angemail.fr");
    cy.get("input[name='password").type("ange");
    cy.get("input[name='repeatPassword").type("ange5");
    cy.get("button").contains("Valider").click();
    cy.get("p").contains("Email invalide");
    cy.get("p").contains("Min. 5 caractères, dont au moins un chiffre");
    cy.get("p").contains("Les mots de passe ne correspondent pas");
  });
});

describe("Test Form Zod SignUp", () => {
  it("Display ErrorInputRepeatPassword Message", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Apprenti").click();
    cy.get("a").contains("Inscription").click();
    cy.get("input[name='usermail").type("ange@mail.fr");
    cy.get("input[name='password").type("ange5");
    cy.get("input[name='repeatPassword").type("ange50");
    cy.get("button").contains("Valider").click();
    cy.get("p").contains("Les mots de passe ne correspondent pas");
  });
});

describe("Test Form Zod LoginPage", () => {
  it("Login Success", () => {
    cy.visit("/");

    cy.get("div[id='role']").contains("Apprenti").click();
    cy.get("a").contains("Inscription").click();
    cy.get("input[name='usermail").type("ange@mail.fr");
    cy.get("input[name='password").type("ange5");
    cy.get("input[name='repeatPassword").type("ange5");
    cy.get("button").contains("Valider").click();
  });
});
