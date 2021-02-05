import LandingsignupPage from '../integration/pageObjects/LandingPage'

const landingPage = new LandingsignupPage()

let userDetails
    beforeEach(function () {
        cy.fixture('Testdata').then((user)=>{
             userDetails = user
        })
    })

Cypress.Commands.add('NavigatetoURL', () => {
    cy.visit("")
    
})

Cypress.Commands.add('FillGeneralInformation', () =>{
    
    landingPage.businessEntity().type(userDetails.BusinessEntity)
    landingPage.legalEntity().type(userDetails.LegalEntityID)
    landingPage.Addressline1().type(userDetails.AddressLine1)
    landingPage.Addressline2().type(userDetails.AddressLine2)
    landingPage.Addressline3().type(userDetails.Line3)
    landingPage.City().type(userDetails.City)
    landingPage.State().type(userDetails.State)
    landingPage.Country().select(userDetails.Country,{force:true}).should('have.value',userDetails.Countryvalue)
    landingPage.PostCode().type(userDetails.PostCode)
    landingPage.MainPhone().type(userDetails.MainPhone)
    landingPage.Fax().type(userDetails.Fax)
    landingPage.Website().type(userDetails.Website)
    landingPage.BusinessEmail().type(userDetails.Email)
    landingPage.Source().select(userDetails.Howdidyouhearaboutus,{force:true}).should('have.value',userDetails.Sourcevalue)
    landingPage.IndustryType().select(userDetails.IndustryType,{force:true})

    
})

Cypress.Commands.add('useSameBillingAddressCheckboxunchecked',()=>{
    landingPage.Useanotheraddresscheckbox().should('not.be.checked')
})

Cypress.Commands.add('usedifferentBillingAddressCheckboxchecked',()=>{
    landingPage.Useanotheraddresscheckbox().check({force:true}).should('be.checked')
})

Cypress.Commands.add('UseAuthorisedSignatoryContactastheonlycontact',()=>{
    landingPage.usesamecontact_checkbox().should('be.checked')
})

Cypress.Commands.add('UseOtherContacts',()=>{
    landingPage.usesamecontact_checkbox().uncheck({force:true}).should('not.be.checked')
})

Cypress.Commands.add('fillbillingAddress',() =>{
    landingPage.BillingAddress1().type(userDetails.BillingAddress1)
    landingPage.BillingAddress2().type(userDetails.BillingAddress2)
    landingPage.BillingAddress3().type(userDetails.BillingAddress3)
    landingPage.Billingcity().type(userDetails.BillingCity)
    landingPage.Billingstate().type(userDetails.BillingState)
    landingPage.BillingCountry().select(userDetails.BillingCountry,{force:true})
    landingPage.Billingpostcode().type(userDetails.BillingPostcode)
})

Cypress.Commands.add('fillAuthorisedContact', ()=>{
    landingPage.ARCFirstname().type(userDetails.ASCFirstname)
    landingPage.ARCLastname().type(userDetails.ASCLastname)
    landingPage.ARCdirectphone().type(userDetails.ASCDirectphone)
    landingPage.ARCjobtitle().type(userDetails.ASCJObTitle)
    landingPage.ARCemail().type(userDetails.ASCEmail)

})

Cypress.Commands.add('fillUseageReportContact',()=>{
    landingPage.URCFirstname().type(userDetails.URCFirstname)
    landingPage.URCLastname().type(userDetails.URCLastname)
    landingPage.URCdirectphone().type(userDetails.URCDirectphone)
    landingPage.URCjobtitle().type(userDetails.URCJObTitle)
    landingPage.URCemail().type(userDetails.URCEmail)

})


Cypress.Commands.add('fillSalesContact',() =>{
    landingPage.SalesFirstname().type(userDetails.SalesFirstname)
    landingPage.SalesLastname().type(userDetails.SalesLastname)
    landingPage.Salesdirectphone().type(userDetails.SalesDirectphone)
    landingPage.Salesjobtitle().type(userDetails.SalesJObTitle)
    landingPage.Salesemail().type(userDetails.SalesEmail)

})

Cypress.Commands.add('fillAccountsContact',() =>{
    landingPage.AccountsFirstname().type(userDetails.AccountFirstname)
    landingPage.AccountsLastname().type(userDetails.AccountLastname)
    landingPage.Accountsdirectphone().type(userDetails.AccountDirectphone)
    landingPage.Accountsjobtitle().type(userDetails.AccountJObTitle)
    landingPage.Accountsemail().type(userDetails.AccountEmail)

})

Cypress.Commands.add('fillStatementContact',() =>{
    landingPage.StatementFirstname().type(userDetails.StatementFirstname)
    landingPage.StatementLastname().type(userDetails.StatementLastname)
    landingPage.Statementdirectphone().type(userDetails.StatementDirectphone)
    landingPage.Statementjobtitle().type(userDetails.StatementJObTitle)
    landingPage.Statementemail().type(userDetails.StatementEmail)

})

Cypress.Commands.add('fillTechnicalContact',() =>{
    landingPage.TechFirstname().type(userDetails.TechFirstname)
    landingPage.TechLastname().type(userDetails.TechLastname)
    landingPage.Techdirectphone().type(userDetails.TechDirectphone)
    landingPage.Techjobtitle().type(userDetails.TechJObTitle)
    landingPage.Techemail().type(userDetails.TechEmail)

})