const { softAssert, softExpect } = chai;
import Url from '../../../../Builder/urlBuilder';
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import GrillaPlanesValidator from '../../../../pageValidator/MTV/GrillaPlanes/mtvGrillaPlanesValidator';
const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla Grilla de planes', () => {

    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

    // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.wait(3000)
    })

    it('Desktop', { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.visit(urlAmbiente + url.pantallaGrillaPlanes)
        cy.wait(2000)
        cy.viewport(1360, 768)
        //Validacion de los planes
        GrillaPlanesValidator.validacionNavBar(1360)
        GrillaPlanesValidator.validarPantallaGrillaPlanes();
        GrillaPlanesValidator.validarPlanTvMax();
        GrillaPlanesValidator.validarPlanTvMaxCombo();
    })

    it('Mobile', { tags: ['regresion', 'mtv', 'mtvPantalla', 'LITE'] }, () => {
        cy.visit(urlAmbiente + url.pantallaGrillaPlanes)
        cy.wait(2000)
        cy.viewport(375, 640)
        //Validacion de los planes
        GrillaPlanesValidator.validacionNavBar(375)
        GrillaPlanesValidator.validarPantallaGrillaPlanes();
        GrillaPlanesValidator.validarPlanTvMaxMobile();
        GrillaPlanesValidator.validarPlanTvMaxComboMobile();
    })
})