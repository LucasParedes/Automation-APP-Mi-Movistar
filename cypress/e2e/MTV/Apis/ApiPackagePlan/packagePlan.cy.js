const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder'

describe("Api Package Plan", () => {
    function endpointPackagePlan(ani) {
        return    Cypress.env("endpointApiPackageSubd")
                + Cypress.env("endpointApiPackageDom")
                + Cypress.env("endpointApiPackageRuta")
                + ani
                + Cypress.env("endpointApiPackage")
    }

    it('Obtener el token para el servicio', () => {
        cy.obtenerElToken()
    });
    it(`01 - Cliente Rossana Dalpra`, { tags: ['regresion', 'api'] }, () => {

        const ani = new DatosClientes().convergente().aniInternetConMtv
        cy.validarApiPackagePlan(endpointPackagePlan(ani), 'Rossana')
    });

    it(`02 - Cliente Lucas Paredes`, { tags: ['regresion', 'api'] }, () => {

        const ani = new DatosClientes().convergente2().aniInternetConMtv
        cy.validarApiPackagePlan(endpointPackagePlan(ani), 'Lucas')
    });
})










