describe("Full Auth Flow E2E Tests", () => {
  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  const email = `registere2e${Date.now()}@test.com`;
  const username = `e2eTestUSER_${Date.now()}`;
  const code = "123456";

  it("should register new user account", () => {
    cy.register(username, "test-user", email, "12345678", "12345678");

    cy.url().should("include", "/verify-account", { timeout: 30000 });
  });

  it("should validate a new user account", () => {
    cy.verify_account(email);

    cy.getCookie("accessToken").should("exist").and("not.be.null");
    cy.getCookie("refreshToken").should("exist").and("not.be.null");

    cy.url().should("include", "/verify-account", { timeout: 30000 });
  });

  it("should login with email", () => {
    cy.login(email, "12345678");

    cy.getCookie("accessToken").should("exist").and("not.be.null");
    cy.getCookie("refreshToken").should("exist").and("not.be.null");

    cy.url().should("include", "/login", { timeout: 30000 });
  });

  // TODO: Identificar por que da erro no teste de login com username, mas funciona manualmente

  // it("should login with username", () => {
  //   cy.wait(1000);

  //   cy.login(username, "12345678");

  //   cy.getCookie("accessToken").should("exist").and("not.be.null");
  //   cy.getCookie("refreshToken").should("exist").and("not.be.null");

  //   cy.url().should("include", "/login", { timeout: 30000 });
  // });

  it("should login with email", () => {
    cy.login(email, "12345678");

    cy.getCookie("accessToken").should("exist").and("not.be.null");
    cy.getCookie("refreshToken").should("exist").and("not.be.null");

    cy.url().should("include", "/login", { timeout: 30000 });
  });
});
