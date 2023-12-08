const { softAssert, softExpect } = chai;
import Url from '../../../../Builder/urlBuilder';
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import MasDeUnDecoValidator from '../../../../pageValidator/MTV/Deco/mtvMasDeUnDecoValidator'
const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla información Mas De Un Deco', () => {

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
        cy.visit(urlAmbiente + url.pantallaMasDeDosDecos)
    })

    it('Desktop', { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.wait(2000)
        cy.viewport(1360, 768)
        cy.wait(2000)
        //Validacion de pantalla
        MasDeUnDecoValidator.validacionNavBar(1360)
        MasDeUnDecoValidator.validarPantallaMasDeUnDeco();
    })

    it('Mobile', { tags: ['regresion', 'mtv', 'mtvPantalla', 'LITE'] }, () => {
        cy.wait(2000)
        cy.viewport(375, 667)
        cy.wait(2000)
        //Validacion de pantalla
        MasDeUnDecoValidator.validacionNavBar(375)
        MasDeUnDecoValidator.validarPantallaMasDeUnDeco();
    })
})