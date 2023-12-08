const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import TelefonoFijo from '../../../../pageObjects/MTV/Validaciones/mtvPantallaTelefonoFijoPage'
import Url from '../../../../Builder/urlBuilder';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
describe('AltaDeMovistarTV_producto.FijaHogar', () => {
    const grillaPlanes = new GrillaPlanesPage()
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const telefono = new TelefonoFijo()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.loginIdp(urlAmbiente, datosClientes.email, usuario.pass)
        cy.lineaEnContexto(datosClientes.aniFijo)
        cy.irAFlujo(entryPointName)
    })

    it('validar si tengo solo lineas fijas en el parque', { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        grillaPlanes.getBoton().click({ force: true })
        cy.wait(2000)
        cy.url().should('eq', urlAmbiente + url.pantallaSoloLineaFija)

        telefono.getTituloTexto()
            .should('contain', telefono.getTituloTextoValor())

        telefono.getDescripcion()
            .should('contain', telefono.getDescripcionTexto())
    })
})