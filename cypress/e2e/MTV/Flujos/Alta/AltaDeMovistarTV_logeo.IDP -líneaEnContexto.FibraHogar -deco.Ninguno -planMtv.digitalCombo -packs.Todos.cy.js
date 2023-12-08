const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import SeleccionDeco from '../../../../pageObjects/MTV/Deco/mtvSeleccionDecoPage'
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import PreciosMtvBuilder from '../../../../Builder/preciosMtvBuilder';
import TypUnBoton from '../../../../pageObjects/MTV/TYP/pantallaTypPage'
import TypUnBotonTextos from '../../../../pageObjects/MTV/TYP/typConUnBotonPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('AltaDeMovistarTV_producto.FibraHogar -deco.Ninguno -planMtv.digitalCombo -packs.Todos', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const seleccionDeco = new SeleccionDeco()
    const preciosBuilder = new PreciosMtvBuilder()
    //const loginMock = new LoginMock()
    const typUnBoton = new TypUnBoton()
    const typUnBotonTextos = new TypUnBotonTextos()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.irAFlujo(entryPointName)
    })
    it('Dar de alta MTV', { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        //Grilla de planes
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvDigiCombo()).click();// PLAN DIGITAL COMBO+
        // Se valida el precio del plan a seleccionar
        grillaPlanes.getValor().invoke('text').should('equal', preciosBuilder.precioPlanes('grilla').digitalCombo)
        grillaPlanes.getBoton().click()
        cy.wait(3000)

        //Validar precio de decos
        seleccionDeco.getDecoInputPrecio().invoke('text').should('equal', preciosBuilder.precioDecos('deco').uno)
        //Sin ningun deco
        seleccionDeco.getBotonContinuarSinDeco().click()

        //Selecciona todos los packs
        cy.url().should('eq', urlAmbiente + url.pantallaPacks)
        const packs = [0, 1, 3]; // Todos los packs menos Prime que seria el 2
        for (const index of packs) {
            cy.get('button.f1qfg8wk')
            .eq(index)
            .click();
        }

        cy.get('.f1mibvjw').click() // CONTINUAR

        cy.wait(3000)
        cy.validacionIdentidadMock(urlAmbiente + url.pantallaIdentitySuccess)

        //cy.visit(urlAmbiente + url.pantallaResumen)
        cy.verificarPedidoResumen([preciosBuilder.precioPlanes('resumen').digitalCombo
                                , preciosBuilder.precioPacks('resumen').futbol
                                , preciosBuilder.precioPacks('resumen').hbo
                                , preciosBuilder.precioPacks('resumen').paramount
                                ])

        cy.visit(urlAmbiente + url.thankyoupage)
        cy.url().should('eq', urlAmbiente + url.thankyoupage);
        typUnBoton.getTituloTexto().should('have.text', typUnBotonTextos.getTituloTexto() + 'TV Digital Combo+')
        typUnBoton.getDescripcion().should('have.text', typUnBotonTextos.getDescripcionTexto())
        typUnBoton.getBotonPrincipalTexto().should('have.text', typUnBotonTextos.getBotonPrincipal())

        //Validar todo el session storage que se cargo en la contratación
        cy.validarSessionStorageMTV('alta')
    })
})



