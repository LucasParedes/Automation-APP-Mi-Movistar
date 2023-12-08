const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMtv from '../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage'
import ConocerMiPlanPage from '../../../../pageObjects/MTV/ADM/ConocerMiPlan/mtvConocerMiPlanPage';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('VerMiPlanActual_logeo.IDP -producto.Movil -líneaConMtv.Si -plan.DigitalCombo', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const administrarMtv = new AdministrarMtv()
    const conocerMiPlanPage = new ConocerMiPlanPage()

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
        administrarMtv.getBoton().click()
        cy.wait(3000)

        cy.url().should('eq', urlAmbiente + url.conocerMiPlanActual)
        conocerMiPlanPage.getTituloPlanTexto(1360).should('contain', conocerMiPlanPage.getTituloPLanTextoTvDigiCP())
    })
})



