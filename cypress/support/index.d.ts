declare namespace Cypress {
  interface Chainable {
    seedUser(): Chainable<void>;
    login(email: string, password: string): Chainable<void>;
    logout(): Chainable<void>;
    register(
      username: string,
      name: string,
      email: string,
      password: string,
      confirmPassword: string,
    ): Chainable<void>;
  }
}
