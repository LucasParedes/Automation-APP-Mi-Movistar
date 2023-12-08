const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder'

describe("Api Perfilado", () => {
    const endpointPerfilado = Cypress.env("endpointApiPerfiladoSubd")
                            + Cypress.env("endpointApiPerfiladoDom")
                            + Cypress.env("endpointApiPerfiladoRuta")


    it('Obtener el token para el servicio', () => {
        cy.obtenerElToken()
    });                        
    it(`01 - Cliente Rossana Dalpra`, { tags: ['regresion', 'api'] }, () => {
        const datosClientes = new DatosClientes().convergente().aniInternetConMtv
        cy.request({
            method: 'GET', 
            url: endpointPerfilado + datosClientes,
            failOnStatusCode: false,
            headers: {
                'Authorization': 'Bearer ' + Cypress.env('accessToken'),
                'Referer': 'https://app.movistar.com.ar/',
            },})
            .then((res) => {
                cy.validarResponsePerfilado1(res)
            })
    });

    it(`02 - Cliente Lucas Paredes`, { tags: ['regresion', 'api'] }, () => {
        const datosClientes = new DatosClientes().convergente2().aniInternetConMtv
        cy.request({
            method: 'GET', 
            url: endpointPerfilado + datosClientes,
            failOnStatusCode: false,
            headers: {
                'Authorization': 'Bearer ' + Cypress.env('accessToken'),
                'Referer': 'https://app.movistar.com.ar/',
            },})
            .then((res) => {
                cy.validarResponsePerfilado1(res)
            })
    });

    it(`03- Cliente Ani Invalido - Tiene que devolver 404 (el cliente no existe)`, { tags: ['regresion','api'] }, function () {
        const datosClientes = '1154120151'
        cy.request({
        method: 'GET', 
        url: endpointPerfilado + datosClientes,
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + Cypress.env('accessToken'),
            'Referer': 'https://app.movistar.com.ar/',
        },})
            .then((res) => {
                cy.log(JSON.stringify(res.body))
                expect(res.body.code).to.equal("NOT_FOUND")
                expect(res.body.message).to.equal("Specified resource not found")
                expect(res.body.status).to.equal(404)
            })
    });

    it(`04- Cliente Ani Formato Invalido `, { tags: ['regresion', 'api'] }, function () {

        const datosClientes = '4505'
        cy.request({
        method: 'GET', 
        url: endpointPerfilado + datosClientes,
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + Cypress.env('accessToken'),
            'Referer': 'https://app.movistar.com.ar/',
        },})
            .then((res) => {
                cy.log(JSON.stringify(res.body))
                expect(res.body.code).to.equal("INVALID_ARGUMENT")
                expect(res.body.message).to.equal("Invalid specified parameter")
                expect(res.body.status).to.equal(400)
            })
    })
})










