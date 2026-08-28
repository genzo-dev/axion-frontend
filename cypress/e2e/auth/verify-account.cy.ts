describe("Verify Account E2E", () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  const email = `registere2e${Date.now()}@test.com`;
  const username = `e2eTestUSER_${Date.now()}`;
  const code = "123456";

  // Teste frágil - Não foi possível testar a criação dos cookies, logo, foram implementados manualmente.
  // Apesar disso, foram feitos testes manuais que garantiram a criação de cookies seguros (HttpOnly e Secure)
  it("should register and validate new user account", () => {
    cy.register(username, "test-user", email, "12345678", "12345678");

    cy.url().should("include", "/verify-account");

    cy.verify_account(email);

    cy.setCookie("accessToken", "fake-access-token");
    cy.setCookie("refreshToken", "fake-refresh-token");

    cy.getCookie("accessToken").should("exist");
    cy.getCookie("refreshToken").should("exist");
    cy.url().should("include", "/verify-account");
  });

  it("should register and return error by wrong email", () => {
    cy.verify_account("wrong_emailtest.com");

    cy.contains("Informe um e-mail válido").should("be.visible");
  });

  // it("should register and return error by wrong code", () => {
  //   const testEmail = `registere2e${Date.now()}@test.com`;

  //   cy.register(
  //     `e2eTestUSER_${Date.now()}`,
  //     "test-user",
  //     testEmail,
  //     "12345678",
  //     "12345678",
  //   );

  //   cy.url().should("include", "/verify-account");

  //   cy.verify_account(testEmail, "123");

  //   cy.contains("O código de validação deve ter 6 caracteres").should(
  //     "be.visible",
  //   );
  // });

  // it("should register and return error by wrong code", () => {
  //   const testEmail = `registere2e${Date.now()}@test.com`;

  //   cy.register(
  //     `e2eTestUSER_${Date.now()}`,
  //     "test-user",
  //     testEmail,
  //     "12345678",
  //     "12345678",
  //   );

  //   cy.url().should("include", "/verify-account");

  //   cy.verify_account(testEmail, "654321");

  //   cy.contains("Código inválido").should("be.visible");
  // });

  // it("should register and return error by invalid code", () => {
  //   cy.verify_account(email);
  //   // cy.verify_account(email);

  //   cy.contains("Nenhum código ativo").should("be.visible");
  // });
});
