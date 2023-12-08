const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import SeleccionDeLinea from '../../../../pageObjects/MTV/mtvSeleccionDeLineaPage';
import SeleccionDeco from '../../../../pageObjects/MTV/Deco/mtvSeleccionDecoPage'
import UnDeco from '../../../../pageObjects/MTV/Deco/mtvUnDecoPage'
import SelecionPacks from '../../../../pageObjects/MTV/mtvSeleccionDePacksPage';
import PreciosMtvBuilder from '../../../../Builder/preciosMtvBuilder';
import TypUnBoton from '../../../../pageObjects/MTV/TYP/pantallaTypPage'
import TypUnBotonTextos from '../../../../pageObjects/MTV/TYP/typConUnBotonPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('AltaDeMovistarTV_logeo.IDP -líneaEnContexto.FijaHogar -líneaSeleccionada.FibraHogar -deco.Dos -planMtv.maxCombo.', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const seleccionDeLinea = new SeleccionDeLinea()
    const seleccionDeco = new SeleccionDeco()
    const unDeco = new UnDeco()
    const seleccionPacks = new SelecionPacks()
    const preciosBuilder = new PreciosMtvBuilder()
    const typUnBoton = new TypUnBoton()
    const typUnBotonTextos = new TypUnBotonTextos()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.loginIdp(urlAmbiente, datosClientes.email, usuario.pass)
        cy.lineaEnContexto(datosClientes.aniFijo)
        cy.irAFlujo(entryPointName)
    })
    it('Dar de alta MTV', { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        //Grilla de Planes
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMaxCombo()).click();
        // Se valida el precio del plan a seleccionar
        grillaPlanes.getValor().invoke('text').should('equal', preciosBuilder.precioPlanes('grilla').maxCombo)
        grillaPlanes.getBoton().click()

        cy.wait(3000)

        //Distributiva de linea
        seleccionDeLinea.getPlanLinea().filter(':contains("Internet")').click();

        //Se selecciona los decos (1)
        for (let i = 0; i < 2; i++) {
            seleccionDeco.getCantidadDecosBotonAumentar().click()
            cy.wait(1000);
        }
        //Validar precio de decos
        seleccionDeco.getDecoInputPrecio().invoke('text').should('equal', preciosBuilder.precioDecos('deco').uno)
        //Agregar y continuar
        seleccionDeco.getBotonAgregarDecoActivo().click()
        unDeco.getBotonContinuar().click()

        cy.wait(3000)

        //Ningun pack
        cy.url().should('eq', urlAmbiente + url.pantallaPacks)
        seleccionPacks.getBotonContinuar().click()

        //Resumen
        cy.verificarPedidoResumen([preciosBuilder.precioPlanes('resumen').maxCombo, preciosBuilder.precioDecos('resumen').dos])

        //Typ un boton
        cy.visit(urlAmbiente + url.thankyoupage)
        cy.url().should('eq', urlAmbiente + url.thankyoupage);
        typUnBoton.getTituloTexto().should('have.text', typUnBotonTextos.getTituloTexto() + 'TV Max Combo+')
        typUnBoton.getDescripcion().should('have.text', typUnBotonTextos.getDescripcionTexto())
        typUnBoton.getBotonPrincipalTexto().should('have.text', typUnBotonTextos.getBotonPrincipal())

        //Validar todo el session storage que se cargo en la contratación
        cy.validarSessionStorageMTV('alta')
    })
})



