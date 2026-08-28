describe("Login E2E", () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  const email = `registere2e${Date.now()}@test.com`;
  const username = `e2eTestUSER_${Date.now()}`;
  const code = "123456";

  it("should register, validate and login account", () => {
    cy.register(username, "test-user", email, "12345678", "12345678");

    cy.url().should("include", "/verify-account");

    cy.verify_account(email);

    // cy.clearCookies();

    cy.login(email, "12345678");

    cy.getCookie("accessToken").should("exist");
    cy.getCookie("refreshToken").should("exist");
  });
});
