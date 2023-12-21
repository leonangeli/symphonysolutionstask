const cypress = require("cypress");

// ***********************************************
//This commands are meant to GET and filter the API response respectively 
Cypress.Commands.add('getApiEntries', () =>{
return cy.request('GET', 'https://api.publicapis.org/entries').then((response)=>{
    expect(response.status).to.eq(200);
    return response.body.entries;
 });
});

Cypress.Commands.add('filterAndValidateObjectsByCategory', (category, expectedCount ) => {
    cy.getApiEntries().then((entries) => {
        const filteredObjects = entries.filter((entry) => entry.Category == category);
        expect(filteredObjects.lenght).to.eq(expectedCount);

        cy.log('Found Objects:', filteredObjects)
    });
});


