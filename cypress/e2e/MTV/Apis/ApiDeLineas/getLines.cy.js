const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder'

describe("Api de Líneas", ()=> {
    function endpointLineas (cliente) { 
        return  Cypress.env("endpointApiLineasSubd")
                        + Cypress.env("endpointApiLineasDom")
                        + Cypress.env("endpointApiLineasRuta")
                        + Cypress.env("endpointApiLineasQueryDNI")
                        + cliente.getDni()
                        + Cypress.env("endpointApiLineasQueryTipoDNI")
                        + cliente.getDocumentType()
                        + Cypress.env("endpointApiLineasQueryGenero")
                        + cliente.getGenero()
}
    it('Obtener el token para el servicio', () => {
        cy.obtenerElToken()
    });
    it("01 - Cliente Rossana Dalpra ", { tags: ['regresion', 'api'] }, function () {
        const datosClientes = new DatosClientes().convergente().build();

        cy.request({
        method: 'GET', 
        url: endpointLineas(datosClientes),
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + Cypress.env('accessToken'),
            'Referer': 'https://app.movistar.com.ar/',
        },}) 
            .then((response) => {

                let size = Object.keys(response.body.identities).length
                cy.wrap(size).should('be.gt', 0)

                for (let i = 0; i < size; i++) {

                    expect(response.body.identities[i]).have.property('id')
                    expect(response.body.identities[i].id).to.have.length.greaterThan(0)
                    expect(response.body.identities[i]).have.property('paymentType')
                    expect(response.body.identities[i]).have.property('subscriptionType')
                    expect(response.body.identities[i].subscriptionType).to.have.length.greaterThan(0)

                    if (response.body.identities[i].subscriptionType > ! 'internet') {
                        expect(response.body.identities[i]).have.property('formatNumber')
                        expect(response.body.identities[i].formatNumber).to.have.length.greaterThan(0)
                        expect(response.body.identities[i]).have.property('description')
                        expect(response.body.identities[i].description).to.have.length.greaterThan(0)
                    }

                    expect(response.body.identities[i]).have.property('originalSubscriptionType')
                    expect(response.body.identities[i].originalSubscriptionType).to.have.length.greaterThan(0)
                }
                assert.equal(size, 5)
            })
    })

    it("02 - Cliente Lucas Paredes", { tags: ['regresion', 'api'] }, function () {
        const datosClientes = new DatosClientes().convergente2().build();

        cy.request({
        method: 'GET', 
        url: endpointLineas(datosClientes),
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + Cypress.env('accessToken'),
            'Referer': 'https://app.movistar.com.ar/',
        },}) 
            .then((response) => {

                let size = Object.keys(response.body.identities).length
                cy.wrap(size).should('be.gt', 0)

                for (let i = 0; i < size; i++) {

                    expect(response.body.identities[i]).have.property('id')
                    expect(response.body.identities[i].id).to.have.length.greaterThan(0)
                    expect(response.body.identities[i]).have.property('paymentType')
                    expect(response.body.identities[i]).have.property('subscriptionType')
                    expect(response.body.identities[i].subscriptionType).to.have.length.greaterThan(0)

                    if (response.body.identities[i].subscriptionType > ! 'internet') {
                        expect(response.body.identities[i]).have.property('formatNumber')
                        expect(response.body.identities[i].formatNumber).to.have.length.greaterThan(0)
                        expect(response.body.identities[i]).have.property('description')
                        expect(response.body.identities[i].description).to.have.length.greaterThan(0)
                    }

                    expect(response.body.identities[i]).have.property('originalSubscriptionType')
                    expect(response.body.identities[i].originalSubscriptionType).to.have.length.greaterThan(0)
                }
                assert.equal(size, 2)
            })
    })
})