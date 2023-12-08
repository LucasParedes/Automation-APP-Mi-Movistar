const { softAssert, softExpect } = chai;
import Url from '../../../../Builder/urlBuilder';
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import DosBotonesValidator from '../../../../pageValidator/MTV/TYP/pantallaTypDosBotonesValidator';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV' //'Movistar TV' // 

describe('Validar pantalla Typ Con Dos Botones', () => {

    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

    // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.wait(6000)
        cy.irAFlujo(entryPointName)
        grillaPlanes.getChipTexto().contains(grillaPlanes.getChipTextoTvMax()).click()
        grillaPlanes.getBoton().click()
        cy.visit(urlAmbiente + url.thankyoupage)
    })

    it('Desktop', { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.viewport(1360, 768)
        cy.wait(2000)
        //Validacion de los planes
        DosBotonesValidator.validarPantallaTYP();
    })

    it('Mobile', { tags: ['regresion', 'mtv', 'mtvPantalla', 'LITE'] }, () => {
        cy.viewport(375, 667)
        cy.wait(2000)
        //Validacion de los planes
        DosBotonesValidator.validarPantallaTypMobile();
    })
})