

Given ('I open rhipe Signup page',()=>{
    cy.NavigatetoURL()
})
When ('I fillup the general information section',()=>{
    cy.FillGeneralInformation()

})

When('I use same delivery address',()=>{
    cy.useSameBillingAddressCheckboxunchecked()

})
When('I use different delivery address',()=>{
    cy.usedifferentBillingAddressCheckboxchecked()
})

When ('I fill up delivery address', ()=>{
    cy.fillbillingAddress()
})

When ('I use only authorised contact',()=>{
    cy.UseAuthorisedSignatoryContactastheonlycontact()
})

When('I use other authorised contacts',()=>{
    cy.UseOtherContacts()
})

When('I fill up the authorised signatory contact section',()=>{
    cy.fillAuthorisedContact()
})

When('I fill Usage Report Contact section',()=>{
    cy.fillUseageReportContact()

})

When('I fill Sales contact section',()=>{
    cy.fillSalesContact()

})
When('I fill Accounts contact section',()=>{
    cy.fillAccountsContact()

})
When('I fill statement contact section',()=>{
    cy.fillStatementContact()

})
When('I fill technical contact section',()=>{
    cy.fillTechnicalContact()

})
