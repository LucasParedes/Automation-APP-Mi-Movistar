import Url from '../../../Builder/urlBuilder';
import DatosClientes from '../../../Builder/datosClientesBuilder';
import SeleccionPacks from '../../../pageValidator/MTV/mtvSeleccionPacksValidator';
//pageObjects/MTV/mtvSeleccionDePacksPage";

const { softAssert, softExpect } = chai;
const urlAmbiente = Cypress.env('urlMiMovistar')

describe('Validar pantalla seleccion de packs', () => {

    const url = new Url().urlMtv().build();
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build();

    beforeEach('', () => {
        cy.clearCookies();
        cy.clearLocalStorage();

    // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv);
        cy.wait(3000);
        cy.visit(urlAmbiente + url.pantallaPacks);
    })
    it("Desktop", { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.wait(2000);
        cy.viewport(1360, 768);
        cy.wait(3000);
        // a los validaciones de la barra de navegación: NavBar se le debe pasar el ancho del viewport
        SeleccionPacks.validarPantallaSeleccionDePacksNavBar(1360);
        cy.wait(3000);
        SeleccionPacks.validarPantallaSeleccionDePacks();
    })

    it("Mobile", { tags: ['regresion', 'mtv', 'mtvPantalla'] }, () => {
        cy.viewport(375, 667)
        cy.wait(3000);
        SeleccionPacks.validarPantallaSeleccionDePacksNavBar(375);
        /*  Cuando se renderiza a Mobile no se observan los pack, se reporto el defecto: https://devops.movistar.com.ar/jira/browse/MIMO-4580
            Dicho defecto se desestimo por la probabilidad de ocurrencia de que alguien en el browser cambie el tamaño de la pantalla.
    
            SeleccionPacks.validarPantallaSeleccionDePacks();
        */
    })
})