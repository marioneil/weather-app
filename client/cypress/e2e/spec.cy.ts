describe("template spec", () => {
  // let searchedCity;

  it("passes", () => {
    cy.visit("http://localhost:5173");
    //  cy.findByText("Today").should("exist").click();
    cy.get("a").contains("Today").should("exist").click();
    //cy.get("a").contains("Today").should("exist").click();
    cy.get('[data-testid="today-card"]').should("exist");
    cy.url().should("equal", "http://localhost:5173/today");
  });

  it("Today card should not exist ", () => {
    cy.visit("http://localhost:5173");
    //  cy.findByText("Today").should("exist").click();
    cy.get('[data-testid="today-card"]').should("not.exist");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Search", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:5173");
    cy.get(".navbar").click();
    cy.get(".form-control").clear("s");
    cy.get(".form-control").type("scarb");
    cy.wait(2000);
    cy.get(".list-group > :nth-child(1)").click();
    /* ==== End Cypress Studio ==== */

    cy.get(".form-control")
      .invoke("text")
      .as("searchedCity")
      .then((sometext) => {
        //cy.log(sometext);
        // cy.get('[data-testid="navbar2"]').contains(sometext);
      });
    console.log("city- " + this.searchedCity);
    cy.get('[data-testid="navbar2"]').contains(this.searchedCity);
  });
});
