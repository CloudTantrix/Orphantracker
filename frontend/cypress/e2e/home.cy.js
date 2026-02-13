describe('Home page smoke', () => {
  it('loads homepage and has hero', () => {
    cy.visit('/');
    cy.contains("Protecting Children's Future Across Nepal").should('be.visible');
    cy.get('a[href="/file-complaint"]').should('exist');
  });
});
