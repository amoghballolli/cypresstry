///<reference types ="cypress"/>
//upload document
describe('Uplad Document',()=>{
    it('upload',()=>{
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('[type="file"]').selectFile('cypress/fixtures/upload.png')
    })

//Download document and verify
const path = require("path");

    it('Verify the downloaded file', () => {
        cy.visit('https://sample-videos.com/')
        cy.get('#sample-mp4-video > .table > tbody > :nth-child(1) > :nth-child(4)').click()
    
const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, "SampleVideo_1280x720_1mb.mp4")).should("exist");
});

})