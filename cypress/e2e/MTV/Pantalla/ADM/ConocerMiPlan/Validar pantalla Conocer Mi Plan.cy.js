const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../../Builder/datosClientesBuilder';
import ConocerMiPlan from '../../../../../pageValidator/MTV/ADM/ConocerMiPlan/mtvConocerMiPlanValidator';
import GrillaPlanesPage from '../../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMtv from '../../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage'

const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla Conocer Mi Plan', () => {


    const entryPointName = 'Movistar TV'
    const datosClientes = new DatosClientes().convergente2(urlAmbiente)
    const grillaPlanes = new GrillaPlanesPage()
    const administrarMtv = new AdministrarMtv()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

    // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.wait(3000)
        cy.irAFlujo(entryPointName)
        cy.wait(3000)
        grillaPlanes.getAdministrarPlanMtvRecuadro().eq(0).click()
        cy.wait(4000)
        administrarMtv.getBoton().click()
    })

    //TODAVIA NO ESTA EN CERT
    it('Desktop', {tags:['regresion', 'mtv', 'mtvPantalla']}, () => {
        cy.wait(2000)
        cy.viewport(1360, 768)
        cy.wait(2000)
        // Validación pantalla
        ConocerMiPlan.validacionNavBar(1360)
        ConocerMiPlan.validarPantallaConocerMiPlan()
    })
    it('Mobile',  {tags:['regresion', 'mtv', 'mtvPantalla','LITE']}, () => {
        cy.wait(2000)
        cy.viewport(375, 667)
        cy.wait(2000)
        // Validación pantalla
        ConocerMiPlan.validacionNavBar(375)
        ConocerMiPlan.validarPantallaConocerMiPlan()
    })

})