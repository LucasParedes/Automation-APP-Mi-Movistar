const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import SeleccionDeLinea from '../../../../pageObjects/MTV/mtvSeleccionDeLineaPage';
import SeleccionDeco from '../../../../pageObjects/MTV/Deco/mtvSeleccionDecoPage'
import MasDecos from '../../../../pageObjects/MTV/Deco/mtvMasDeUnDecoPage';
import SelecionPacks from '../../../../pageObjects/MTV/mtvSeleccionDePacksPage';
import PreciosMtvBuilder from '../../../../Builder/preciosMtvBuilder';
import TypUnBoton from '../../../../pageObjects/MTV/TYP/pantallaTypPage'
import TypUnBotonTextos from '../../../../pageObjects/MTV/TYP/typConUnBotonPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('AltaDeMovistarTV_líneaEnContexto.FijaHogar -líneaSeleccionada.FibraHogar -deco.Tres -planMtv.max', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const seleccionDeLinea = new SeleccionDeLinea()
    const seleccionDeco = new SeleccionDeco()
    const masDecos = new MasDecos()
    const seleccionPacks = new SelecionPacks()
    const preciosBuilder = new PreciosMtvBuilder()
    const typUnBoton = new TypUnBoton()
    const typUnBotonTextos = new TypUnBotonTextos()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.wait(3000)
        cy.lineaEnContexto(datosClientes.aniFijo)
        cy.wait(2000)
        cy.irAFlujo(entryPointName)
    })
    it('Dar de alta MTV',  { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        //Grilla de Planes
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMax()).click();
        // Se valida el precio del plan a seleccionar
        grillaPlanes.getValor().invoke('text').should('equal', preciosBuilder.precioPlanes('grilla').max)
        grillaPlanes.getBoton().click({ force: true })

        cy.wait(3000)

        //Distributiva de linea
        seleccionDeLinea.getPlanLinea().filter(':contains("Internet")').click();
        cy.wait(3000)

        //Se selecciona los decos (3)
        for (let i = 0; i < 3; i++) {
            seleccionDeco.getCantidadDecosBotonAumentar().click()
            cy.wait(1000);
        }
        seleccionDeco.getBotonAgregarDecoActivo().click()
        //Validar precio de decos
        seleccionDeco.getDecoInputPrecio().invoke('text').should('equal', preciosBuilder.precioDecos('deco').uno)
        //Pantalla de un deco
        masDecos.getInput().type(datosClientes.convergente(urlAmbiente).aniFijo)
        masDecos.getBotonActivo().click()

        cy.wait(3000)

        //Ningun pack
        cy.url().should('eq', urlAmbiente + url.pantallaPacks)
        seleccionPacks.getBotonContinuar().click()

        //Resumen
        cy.verificarPedidoResumen([preciosBuilder.precioPlanes('resumen').max, preciosBuilder.precioDecos('resumen').tres])

        //Typ un boton
        cy.visit(urlAmbiente + url.thankyoupage)
        cy.url().should('eq', urlAmbiente + url.thankyoupage);
        typUnBoton.getTituloTexto().should('have.text', typUnBotonTextos.getTituloTexto() + 'TV Max')
        typUnBoton.getDescripcion().should('have.text', typUnBotonTextos.getDescripcionTexto())
        typUnBoton.getBotonPrincipalTexto().should('have.text', typUnBotonTextos.getBotonPrincipal())

        //Validar todo el session storage que se cargo en la contratación
        cy.validarSessionStorageMTV('alta')
    })
})



