describe('API Test', () => {
    it('should find objects with property "Category: Authentication & Authorization" compare them, and veryfy the number of objects found', () =>{
        cy.filterAndValidateObjectsByCategory('Authentication & Authorization', 1);
    });
});