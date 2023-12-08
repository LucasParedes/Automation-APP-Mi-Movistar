const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import Url from '../../../../Builder/urlBuilder';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
describe('Planes disponibles para MTV', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().build()
    const grilla = new GrillaPlanesPage()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('Validar los tres planes', { tags: ['regresion', 'mtv'] }, () => {
        cy.loginOtp(urlAmbiente, datosClientes.pantalla(urlAmbiente).ani)
        //cy.visit(Cypress.env(urlAmbiente) + Cypress.env('urlDashboard') + datosClientes.movilFull().token)
        cy.irAFlujo(entryPointName)
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)

        grilla.getChipTexto().eq(0)
            .invoke('text')
            .should('include', grilla.getChipTextoTvDigiCombo());

        grilla.getChipTexto().eq(1)
            .invoke('text')
            .should('include', grilla.getChipTextoTvMax());

        grilla.getChipTexto().eq(2)
            .invoke('text')
            .should('include', grilla.getChipTextoTvMaxCombo());
    })
})


describe('AltaDeMovistarTV_EntryPoint Por Producto', () => {

    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('Producto Linea Fija', { tags: ['regresion', 'mtv'] }, () => {
        //cy.loginOtp(datosClientes.movilFull().ani)
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(datosClientes.aniFijo)
        cy.noEntryPoint(entryPointName)
        cy.url().should('eq', urlAmbiente + url.pantallaServicios)
    })
    it('Producto Internet Fibra', { tags: ['regresion', 'mtv'] }, () => {
        //cy.loginOtp(datosClientes.movilFull().ani)
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
    })
})



