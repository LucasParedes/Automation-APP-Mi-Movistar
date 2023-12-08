const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMiMovistarTv from '../../../../../pageValidator/MTV/ADM/AdministarMiMovistarTv/mtvAdministrarMtvValidator';

const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla Administrar mi Movistar TV', () => {

    const entryPointName = 'Movistar TV'
    const datosClientes = new DatosClientes().convergente2(urlAmbiente)
    const grillaPlanes = new GrillaPlanesPage()

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
    })
    it('Desktop', { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.viewport(1360, 768)
        cy.wait(2000)
        // Validación pantalla
        AdministrarMiMovistarTv.validacionNavBar(1360)
        AdministrarMiMovistarTv.validarPantallaAdministrarMiMovistarTV()
    })
    it('Mobile', { tags: ['regresion', 'mtv', 'mtvPantalla', 'LITE'] }, () => {
        cy.viewport(375, 667)
        cy.wait(2000)
        // Validación pantalla
        AdministrarMiMovistarTv.validacionNavBar(375)
        AdministrarMiMovistarTv.validarPantallaAdministrarMiMovistarTV()
    })

})