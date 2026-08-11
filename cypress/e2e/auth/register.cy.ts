describe("Register E2E", () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  const email = `registere2e${Date.now()}@test.com`;
  const username = `e2eTestUSER_${Date.now()}`;
  it("should register with valid credentials", () => {
    cy.register(username, "test-user", email, "12345678", "12345678");
    cy.url().should("include", "/verify-account", { timeout: 30000 });
  });

  it("should not register with registered email", () => {
    cy.register(
      `e2eUser2_${Date.now()}`,
      "test-user",
      email,
      "12345678",
      "12345678",
    );
    cy.contains("Já existe uma conta com este e-mail", {
      timeout: 10000,
    }).should("be.visible");
    cy.url().should("include", "/register");
  });

  it("should not register with invalid email", () => {
    cy.register(
      username,
      "test-user",
      `invalidRegistere2e${Date.now()}test.com`,
      "12345678",
      "12345678",
    );
    cy.contains("Informe um e-mail válido").should("be.visible");
    cy.url().should("include", "/register");
  });

  it("should not register with invalid password", () => {
    cy.register(username, "test-user", email, "12345678", "78654321");
    cy.contains("As senhas não coincidem").should("be.visible");
    cy.url().should("include", "/register");
  });
});
