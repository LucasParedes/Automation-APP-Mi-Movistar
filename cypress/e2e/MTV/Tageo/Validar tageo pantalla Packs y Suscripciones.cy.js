const { softAssert, softExpect } = chai;
import DatosClientes from '../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import SeleccionDeLinea from '../../../pageObjects/MTV/mtvSeleccionDeLineaPage';
import SeleccionDeco from '../../../pageObjects/MTV/Deco/mtvSeleccionDecoPage';
import SelecionPacks from '../../../pageObjects/MTV/mtvSeleccionDePacksPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
const grillaPlanes = new GrillaPlanesPage()
const seleccionLinea = new SeleccionDeLinea()
const datosClientes = new DatosClientes().build()
const seleccionDeco = new SeleccionDeco()
const seleccionPacks = new SelecionPacks()
describe("Taggeo Packs y Suscripciones -ingreso.OTP", function () {

  beforeEach("Carga de fixture e ingreso a la aplicación", function () {
    cy.clearCookies();

    // Parametros para un log mas limpio.
    cy.intercept({ resourceType: 'xhr' }, { log: false })
    cy.intercept({ resourceType: 'fetch' }, { log: false })

    //Entramos al archivo .json
    cy.fixture('dataLayerMtv').then((dataLayFixture) => {
      this.dataLFixture = dataLayFixture;
    })
    cy.loginOtp(urlAmbiente, datosClientes.convergente(urlAmbiente).aniFull)
    cy.irAFlujo(entryPointName)
  });

  it("01 - Packs y Suscripciones - WebView", { tags: ['regresion', 'mtvTageo'] }, function () {
    cy.wait(2000)
    grillaPlanes.getBoton().click()
    cy.wait(2000)
    seleccionLinea.getPlanLinea().filter(':contains("Internet")').click();
    cy.wait(2000)
    seleccionDeco.getBotonContinuarSinDeco().click()
    cy.wait(5000);
    // Accede al objeto "window" del navegador y ejecuta una función cuando esté disponible.
    cy.window().then(win => {
      // "Espía" la función "push" del objeto "dataLayer" en el objeto "window" y se lo nombra como "@event".
      cy.spy(win.dataLayer, "push").as("event");
      // Obtiene el valor capturado por el "espía" y ejecuta una función.
      cy.get("@event").then((calledEvent) => {
        cy.log(JSON.stringify(win.dataLayer))

        // Define un OBJETO con propiedades.
        let dataL = {
          event: this.dataLFixture.offer_packs.webview.event,
          pageName: this.dataLFixture.offer_packs.webview.pageName,
          eventFunctionality: this.dataLFixture.offer_packs.webview.eventFunctionality,
          eventOrder: this.dataLFixture.offer_packs.webview.eventOrder
        };

        // Mapea(transformar) los elementos del "dataLayer" capturado y los reformatea en un nuevo arreglo llamado "winDatalayer".
        let winDatalayer = win.dataLayer.map(function (item) {
          return {
            event: item.event,
            pageName: item.pageName,
            eventFunctionality: item.eventFunctionality,
            eventOrder: item.eventOrder
          };
        });

        const resultado = winDatalayer.find(data =>
          data.event === dataL.event &&
          data.pageName === dataL.pageName &&
          data.eventFunctionality === dataL.eventFunctionality &&
          data.eventOrder === dataL.eventOrder
        );
        assert.deepEqual(dataL, resultado)
      })
    })
  })


  it("02 - Packs y Suscripciones - Boton Continuar - Todos los Packs", { tags: ['regresion', 'mtvTageo'] }, function () {
    cy.wait(2000)
    grillaPlanes.getBoton().click()
    cy.wait(3000)
    seleccionLinea.getPlanLinea().filter(':contains("Internet")').click();
    cy.wait(3000)
    seleccionDeco.getBotonContinuarSinDeco().click()
    cy.wait(2000)
    cy.get('button.f1qfg8wk').as('botones').click({ multiple: true });
    cy.wait(2000)
    seleccionPacks.getBotonContinuar().click()
    cy.wait(5000);
    cy.window().then(win => {
      cy.spy(win.dataLayer, "push").as("event");
      // Obtiene el valor capturado por el "espía" y ejecuta una función.
      cy.get("@event").then((calledEvent) => {
        cy.log(JSON.stringify(win.dataLayer))

        // Define un OBJETO con propiedades.
        let dataL = {
          event: this.dataLFixture.offer_packs.button_offer_continue_all_packs.event,
          eventCategory: this.dataLFixture.offer_packs.button_offer_continue_all_packs.eventCategory,
          eventAction: this.dataLFixture.offer_packs.button_offer_continue_all_packs.eventAction,
          eventLabel: this.dataLFixture.offer_packs.button_offer_continue_all_packs.eventLabel,
          eventFunctionality: this.dataLFixture.offer_packs.button_offer_continue_all_packs.eventFunctionality,
          eventOrder: this.dataLFixture.offer_packs.button_offer_continue_all_packs.eventOrder
        };

        // Mapea(transformar) los elementos del "dataLayer" capturado y los reformatea en un nuevo arreglo llamado "winDatalayer".
        let winDatalayer = win.dataLayer.map(function (item) {
          return {
            event: item.event,
            eventCategory: item.eventCategory,
            eventAction: item.eventAction,
            eventLabel: item.eventLabel,
            eventFunctionality: item.eventFunctionality,
            eventOrder: item.eventOrder
          };
        });

        const resultado = winDatalayer.find(data =>
          data.event === dataL.event &&
          data.eventCategory === dataL.eventCategory &&
          data.eventAction === dataL.eventAction &&
          data.eventLabel === dataL.eventLabel &&
          data.eventFunctionality === dataL.eventFunctionality &&
          data.eventOrder === dataL.eventOrder
        );
        assert.deepEqual(dataL, resultado)
      })
    })
  })

  it("03 - Packs y Suscripciones - Boton Continuar - Ningun Pack", { tags: ['regresion', 'mtvTageo'] }, function () {
    cy.wait(2000)
    grillaPlanes.getBoton().click()
    cy.wait(3000)
    seleccionLinea.getPlanLinea().filter(':contains("Internet")').click();
    cy.wait(3000)
    seleccionDeco.getBotonContinuarSinDeco().click()
    cy.wait(2000)
    seleccionPacks.getBotonContinuar().click()
    cy.wait(5000);
    cy.window().then(win => {
      cy.spy(win.dataLayer, "push").as("event");
      // Obtiene el valor capturado por el "espía" y ejecuta una función.
      cy.get("@event").then((calledEvent) => {
        cy.log(JSON.stringify(win.dataLayer))

        // Define un OBJETO con propiedades.
        let dataL = {
          event: this.dataLFixture.offer_packs.button_offer_continue_not_packs.event,
          eventCategory: this.dataLFixture.offer_packs.button_offer_continue_not_packs.eventCategory,
          eventAction: this.dataLFixture.offer_packs.button_offer_continue_not_packs.eventAction,
          eventLabel: this.dataLFixture.offer_packs.button_offer_continue_not_packs.eventLabel,
          eventFunctionality: this.dataLFixture.offer_packs.button_offer_continue_not_packs.eventFunctionality,
          eventOrder: this.dataLFixture.offer_packs.button_offer_continue_not_packs.eventOrder
        };

        // Mapea(transformar) los elementos del "dataLayer" capturado y los reformatea en un nuevo arreglo llamado "winDatalayer".
        let winDatalayer = win.dataLayer.map(function (item) {
          return {
            event: item.event,
            eventCategory: item.eventCategory,
            eventAction: item.eventAction,
            eventLabel: item.eventLabel,
            eventFunctionality: item.eventFunctionality,
            eventOrder: item.eventOrder
          };
        });

        const resultado = winDatalayer.find(data =>
          data.event === dataL.event &&
          data.eventCategory === dataL.eventCategory &&
          data.eventAction === dataL.eventAction &&
          data.eventLabel === dataL.eventLabel &&
          data.eventFunctionality === dataL.eventFunctionality &&
          data.eventOrder === dataL.eventOrder
        );
        assert.deepEqual(dataL, resultado)
      })
    })
  })
})