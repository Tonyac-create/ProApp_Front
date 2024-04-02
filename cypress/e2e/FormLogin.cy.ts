/// <reference types="cypress" /> 

describe('Test Form Zod LoginPage', () => {
    it('Display ErrorInputs Message', () => {
      cy.visit("/");
      
      cy.get("div[id='role']").contains("Apprenti").click();
      cy.get("input[name='usermail").type("angemail.fr")
      cy.get("input[name='password").type("ange")
      cy.get("button").contains("Se connecter").click()
      cy.get("p").contains("Email invalide")
      cy.get("p").contains("Min. 5 caractères, dont au moins un chiffre")
    })
  })
  
  describe('Test Form Zod LoginPage', () => {
    it('Login Success', () => {
      cy.visit("/");
      
      cy.get("div[id='role']").contains("Apprenti").click();
      cy.get("input[name='usermail").type("ange@mail.fr")
      cy.get("input[name='password").type("ange5")
      cy.get("button").contains("Se connecter").click()
    })
  })