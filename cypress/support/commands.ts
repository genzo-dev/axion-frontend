/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("seedUser", () => {
  cy.env(["apiUrl"]).then(({ apiUrl }) => {
    cy.request({
      method: "POST",
      url: `${apiUrl}/test/seed-user`,
      failOnStatusCode: false,
    });
  });
});

Cypress.Commands.add("logout", () => {
  cy.get('button[type="submit"][name="logout"]').click();
});

Cypress.Commands.add(
  "register",
  (
    username: string,
    name: string,
    email: string,
    password: string,
    password2: string,
  ) => {
    cy.visit("/register");

    cy.get('input[name="username"]').should("not.be.disabled").type(username);
    cy.get('input[name="name"]').should("not.be.disabled").type(name);
    cy.get('input[name="email"]').should("not.be.disabled").type(email);
    cy.get('input[name="password"]').should("not.be.disabled").type(password);
    cy.get('input[name="confirmPassword"]')
      .should("not.be.disabled")
      .type(password2);

    cy.get('button[type="submit"]').click();
  },
);

Cypress.Commands.add("verify_account", (email: string) => {
  cy.visit(`/verify-account?email=${email}`);

  cy.get('[data-cy="verify-account-form"]')
    .find('input[name="validateEmail"]')
    .should("not.be.disabled")
    .invoke("val", email);

  cy.get('[data-cy="otp-input-0"]').focus().type("1");
  cy.get('[data-cy="otp-input-1"]').focus().type("2");
  cy.get('[data-cy="otp-input-2"]').focus().type("3");
  cy.get('[data-cy="otp-input-3"]').focus().type("4");
  cy.get('[data-cy="otp-input-4"]').focus().type("5");
  cy.get('[data-cy="otp-input-5"]').focus().type("6");

  cy.get('[data-cy="verify-account-form"]')
    .find('button[type="submit"]')
    .click();
});

Cypress.Commands.add("login", (indentifier: string, password: string) => {
  cy.visit("/login");

  cy.get('[data-cy="login-form"]')
    .find('input[name="indentifier"]')
    .should("not.be.disabled")
    .type(indentifier);

  cy.get('[data-cy="login-form"]')
    .find('input[name="password"]')
    .should("not.be.disabled")
    .type(password);

  cy.get('[data-cy="login-form"]').find('button[type="submit"]').click();

  cy.setCookie("accessToken", "fake-access-token");
  cy.setCookie("refreshToken", "fake-refresh-token");
});
