const { softAssert, softExpect } = chai;
import Url from '../../../../../Builder/urlBuilder';
import DatosClientes from '../../../../../Builder/datosClientesBuilder';
import ComboSinActivar from '../../../../../pageValidator/MTV/ADM/ActivarDisneyYStar/mtvComboSinActivarValidator';

const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla Combo Sin Activar', () => {

    const url = new Url().urlMtv()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente)

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.wait(3000)
        cy.visit(urlAmbiente + url.comboSinActivar)
    })
    it('Desktop', { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.wait(2000)
        cy.viewport(1360, 768)
        cy.wait(2000)
        // Validación pantalla
        ComboSinActivar.validacionNavBar(1360)
        ComboSinActivar.validarPantallaMtvComboSinActivar(1360)
    })
    it('Mobile', { tags: ['regresion', 'mtv', 'mtvPantalla', 'LITE'] }, () => {
        cy.wait(2000)
        cy.viewport(375, 667)
        cy.wait(2000)
        // Validación pantalla
        ComboSinActivar.validacionNavBar(375)
        ComboSinActivar.validarPantallaMtvComboSinActivar(375)
    })
})