class LandingsignupPage{

    businessEntity(){
        return cy.get('input[id="CustomerName"]')
    }

    legalEntity(){
        return cy.get('input[id="RegistrationNumber"]')
    }

    Addressline1(){
        return cy.get('input[id="Street1"]')
    }

    Addressline2(){
        return cy.get('input[id="Street2"]')
    }

    Addressline3(){
        return cy.get('input[id="Street3"]')
    }
    City(){
        return cy.get('input[id="City"]')
    }
    State(){
        return cy.get('input[id="State"]')
    }

    Country(){
        return cy.get('select[id="Country"]')
    }

    PostCode(){
        return cy.get('input[id="Postcode"]')
    }

    MainPhone(){
        return cy.get('input[id="MainPhone"]')
    }

    Fax(){
        return cy.get('input[id="Fax"]')
    }

    BusinessEmail(){
        return cy.get('input[id="Email"]')
    }

    Website(){
        return cy.get('input[id="WebUrl"]')
    }

    Source(){
        return cy.get('select[id="Source"]')
    }

    IndustryType(){
        return cy.get('select[id="IndustryType"]')
    }

    Useanotheraddresscheckbox(){
        return cy.get('input[id="useanotheraddress"]')
    }

    BillingAddress1(){
        return cy.get('input[id="BillingAddressLine1"]')
    }

    BillingAddress2(){
        return cy.get('input[id="BillingAddressLine2"]')
    }

    BillingAddress3(){
        return cy.get('input[id="BillingAddressLine3"]')
    }

    Billingcity(){
        return cy.get('input[id="BillingCity"]')
    }

    Billingstate(){
        return cy.get('input[id="BillingState"]')
    }

    BillingCountry(){
        return cy.get('select[id="BillingCountry"]')
    }

    Billingpostcode(){
        return cy.get('input[id="BillingPostcode"]')
    }

    ARCFirstname(){
        return cy.get('input[id="PrimaryContactFirstName"]')
    }

    ARCLastname(){
        return cy.get('input[id="PrimaryContactLastName"]')
    }

    ARCdirectphone(){
        return cy.get('input[id="PrimaryContactPhone"]')
    }
    ARCjobtitle(){
        return cy.get('input[id="PrimaryContactJobTitle"]')
    }
    ARCemail(){
        return cy.get('input[id="PrimaryContactEmail"]')
    }

    usesamecontact_checkbox(){
        return cy.get('input[id = "usesamecontact"]')
    }

    URCFirstname(){
        return cy.get('input[id="UsageContactFirstName"]')
    }

    URCLastname(){
        return cy.get('input[id="UsageContactLastName"]')
    }

    URCdirectphone(){
        return cy.get('input[id="UsageContactPhone"]')
    }
    URCjobtitle(){
        return cy.get('input[id="UsageContactJobTitle"]')
    }
    URCemail(){
        return cy.get('input[id="UsageContactEmail"]')
    }

    SalesFirstname(){
        return cy.get('input[id="SalesContactFirstName"]')
    }

    SalesLastname(){
        return cy.get('input[id="SalesContactLastName"]')
    }

    Salesdirectphone(){
        return cy.get('input[id="SalesContactPhone"]')
    }
    Salesjobtitle(){
        return cy.get('input[id="SalesContactJobTitle"]')
    }
    Salesemail(){
        return cy.get('input[id="SalesContactEmail"]')
    }

    AccountsFirstname(){
        return cy.get('input[id="AccountsContactFirstName"]')
    }

    AccountsLastname(){
        return cy.get('input[id="AccountsContactLastName"]')
    }

    Accountsdirectphone(){
        return cy.get('input[id="AccountsContactPhone"]')
    }
    Accountsjobtitle(){
        return cy.get('input[id="AccountsContactJobTitle"]')
    }
    Accountsemail(){
        return cy.get('input[id="AccountsContactEmail"]')
    }
    
    StatementFirstname(){
        return cy.get('input[id="StatementContactFirstName"]')
    }

    StatementLastname(){
        return cy.get('input[id="StatementContactLastName"]')
    }

    Statementdirectphone(){
        return cy.get('input[id="StatementContactPhone"]')
    }
    Statementjobtitle(){
        return cy.get('input[id="StatementContactJobTitle"]')
    }
    Statementemail(){
        return cy.get('input[id="StatementContactEmail"]')
    }

    TechFirstname(){
        return cy.get('input[id="TechnicalContactFirstName"]')
    }

    TechLastname(){
        return cy.get('input[id="TechnicalContactLastName"]')
    }

    Techdirectphone(){
        return cy.get('input[id="TechnicalContactPhone"]')
    }
    Techjobtitle(){
        return cy.get('input[id="TechnicalContactJobTitle"]')
    }
    Techemail(){
        return cy.get('input[id="TechnicalContactEmail"]')
    }

}

export default LandingsignupPage
