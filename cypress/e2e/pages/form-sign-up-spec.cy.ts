/// <reference types="cypress" />
describe("Form Validator", () => {
  beforeEach(() => {
    // Assume the page is served at localhost:3000
    cy.visit("http://127.0.0.1:5500/");
  });

  it("should display the form fields correctly", () => {
    cy.get("[data-cy=h1-form-header-text]")
      .should("be.visible")
      .and("have.text", "Sign Up Today!");
    cy.get("[data-cy=input-full-name]").should("be.visible");
    cy.get("[data-cy=input-phone-number]").should("be.visible");
    cy.get("[data-cy=input-email-address]").should("be.visible");
    cy.get("[data-cy=input-website]").should("be.visible");
    cy.get("[data-cy=input-password1]").should("be.visible");
    cy.get("[data-cy=input-password2]").should("be.visible");
    cy.get("[data-cy=btn-submit]").should("be.visible");
  });

  it("should validate the phone number format", () => {
    cy.get("[data-cy=input-phone-number]").type("1234567890");
    // Add validation error check here
    cy.get("[data-cy=input-phone-number]").clear().type("123-456-7890");
    // Add validation success check here
  });

  it("should validate the password criteria", () => {
    cy.get("[data-cy=input-password1]").type("testPass");
    // Add validation error check here
    cy.get("[data-cy=input-password1]").clear().type("Test1Pass");
    // Add validation success check here
  });

  it("should validate that both passwords match", () => {
    cy.get("[data-cy=input-password1]").type("Test1Pass");
    cy.get("[data-cy=input-password2]").type("Different1Pass");
    // Add validation error check for non-matching passwords here
  });

  it("should submit the form", () => {
    cy.get("[data-cy=input-full-name]").type("John Doe");
    cy.get("[data-cy=input-phone-number]").type("123-456-7890");
    cy.get("[data-cy=input-email-address]").type("john@example.com");
    cy.get("[data-cy=input-website]").type("http://example.com");
    cy.get("[data-cy=input-password1]").type("Test1Pass");
    cy.get("[data-cy=input-password2]").type("Test1Pass");
    cy.get("[data-cy=btn-submit]").click();

    // Check for success or error message after form submission.
    // This will depend on how the backend or front-end handles the form submission.
    // E.g., you could check if a success or error message becomes visible.
  });
});
