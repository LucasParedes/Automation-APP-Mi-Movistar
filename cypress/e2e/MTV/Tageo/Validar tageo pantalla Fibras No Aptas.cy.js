const { softAssert, softExpect } = chai;
import DatosClientes from '../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import SeleccionDeLinea from '../../../pageObjects/MTV/mtvSeleccionDeLineaPage';
import FibrasNoAptas from '../../../pageObjects/MTV/mtvFibrasNoAptasPage';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
const grillaPlanes = new GrillaPlanesPage()
const seleccionDeLinea = new SeleccionDeLinea()
const planNoApto = new FibrasNoAptas()
const datosClientes = new DatosClientes().build()
describe("Taggeo Fibras No Aptas -ingreso.OTP", function () {

  beforeEach("Carga de fixture e ingreso a la aplicación", function () {
    cy.clearCookies();

    // Parametros para un log mas limpio.
    cy.intercept({ resourceType: 'xhr' }, { log: false })
    cy.intercept({ resourceType: 'fetch' }, { log: false })

    //Entramos al archivo .json
    cy.fixture('dataLayerMtv').then((dataLayFixture) => {
      this.dataLFixture = dataLayFixture;
    })
    cy.loginOtp(urlAmbiente, datosClientes.convergente2(urlAmbiente).aniInternet)
    cy.irAFlujo(entryPointName)
  });

  it("01 - Fibras No Aptas - WebView", { tags: ['regresion', 'mtvTageo'] }, function () {
    cy.wait(2000)
    grillaPlanes.getBoton().click()
    cy.wait(2000)
    seleccionDeLinea.getPlanLinea().filter(':contains("Internet")').click();
    cy.wait(2000)
    cy.window().then(win => {
      cy.wait(2000)
      // "Espía" la función "push" del objeto "dataLayer" en el objeto "window" y se lo nombra como "@event".
      cy.spy(win.dataLayer, "push").as("event");
      // Obtiene el valor capturado por el "espía" y ejecuta una función.
      cy.get("@event").then((calledEvent) => {
        cy.log(JSON.stringify(win.dataLayer))

        // Define un OBJETO con propiedades.
        let dataL = {
          event: this.dataLFixture.landline_invalid.webview.event,
          pageName: this.dataLFixture.landline_invalid.webview.pageName,
          eventFunctionality: this.dataLFixture.landline_invalid.webview.eventFunctionality,
          eventOrder: this.dataLFixture.landline_invalid.webview.eventOrder
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


  /*   it("02 - Fibras No Aptas - Boton ver Planes Internet Hogar", { tags: ['regresion', 'mtvTageo'] }, function () {
      cy.wait(2000)
      grillaPlanes.getBoton().click()
      cy.wait(3000)
      seleccionLinea.getLinea().eq(0).click()
      cy.wait(3000)
      planNoApto.getBotonVerPlanesIH().click()
      cy.wait(5000);
      cy.window().then(win => {
        cy.spy(win.dataLayer, "push").as("event");
        // Obtiene el valor capturado por el "espía" y ejecuta una función.
        cy.get("@event").then((calledEvent) => {
          cy.log(JSON.stringify(win.dataLayer))
  
          // Define un OBJETO con propiedades.
          let dataL = {
            event                 : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.event,
            eventCategory         : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.eventCategory,
            eventAction           : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.eventAction,
            eventLabel            : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.eventLabel,
            eventFunctionality    : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.eventFunctionality,
            eventOrder            : this.dataLFixture.landline_invalid.landline_go_internet_home_plans.eventOrder
          };
  
          // Mapea(transformar) los elementos del "dataLayer" capturado y los reformatea en un nuevo arreglo llamado "winDatalayer".
          let winDatalayer = win.dataLayer.map(function (item) {
            return {
              event               : item.event,
              eventCategory       : item.eventCategory,
              eventAction         : item.eventAction,
              eventLabel          : item.eventLabel,
              eventFunctionality  : item.eventFunctionality,
              eventOrder          : item.eventOrder
            };
          });
  
          const resultado         = winDatalayer.find(data =>
            data.event              === dataL.event &&
            data.eventCategory      === dataL.eventCategory &&
            data.eventAction        === dataL.eventAction &&
            data.eventLabel         === dataL.eventLabel &&
            data.eventFunctionality === dataL.eventFunctionality &&
            data.eventOrder         === dataL.eventOrder
          );
          assert.deepEqual(dataL, resultado)
        })
      })
    }) */
})