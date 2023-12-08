const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMtv from '../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage'
import MtvComboActivo from '../../../../pageObjects/MTV/ADM/ActivarDisneyYStar/mtvComboActivoPage';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('ActivarSuscripcionCombo_logeo.IDP -producto.Internet -estado.Activa', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const administrarMtv = new AdministrarMtv()
    const mtvComboActivo = new MtvComboActivo()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

    // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.irAFlujo(entryPointName)
        cy.wait(2000)
    })
    it('01 - Validar Cliente Sin MTV - Aun No tenes un Plan', { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
        cy.wait(2000)
        grillaPlanes.getAdministrarPlanMtvRecuadro().click({ force: true })

        cy.wait(3000)

        cy.url().should('eq', urlAmbiente + url.pantallaAdministrar)
        administrarMtv.getRecuadrosGestion().eq(0).click()
        cy.wait(3000)

        cy.url().should('eq', urlAmbiente + url.comboActivo)
        mtvComboActivo.getTituloTexto(1360).should('contain', mtvComboActivo.getTituloTextoValor())
    })
})



