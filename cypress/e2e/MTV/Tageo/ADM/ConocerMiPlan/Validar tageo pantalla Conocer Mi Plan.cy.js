const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMtv from '../../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage'
import ConocerMiPlanPage from '../../../../../pageObjects/MTV/ADM/ConocerMiPlan/mtvConocerMiPlanPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
const grillaPlanes = new GrillaPlanesPage()
const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
const administrarMtv = new AdministrarMtv()
const conocerMiPlan = new ConocerMiPlanPage()
describe("Taggeo Conocer Mi Plan -ingreso.OTP", function () {

    beforeEach("Carga de fixture e ingreso a la aplicación", function () {
        cy.clearCookies();

        // Parametros para un log mas limpio.
        cy.intercept({ resourceType: 'xhr' }, { log: false })
        cy.intercept({ resourceType: 'fetch' }, { log: false })

        //Entramos al archivo .json
        cy.fixture('dataLayerMtv').then((dataLayFixture) => {
            this.dataLFixture = dataLayFixture;
        })

        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.wait(2000)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.irAFlujo(entryPointName)
        cy.wait(2000)
        grillaPlanes.getAdministrarPlanMtvRecuadro().click()
        cy.wait(3000)
    });

    it("01 - Conocer Mi Plan - WebView", { tags: ['regresion', 'mtvTageo'] }, function () {
        administrarMtv.getBoton().click()
        // Accede al objeto "window" del navegador y ejecuta una función cuando esté disponible.
        cy.window().then(win => {
            cy.wait(4000)
            // "Espía" la función "push" del objeto "dataLayer" en el objeto "window" y se lo nombra como "@event".
            cy.spy(win.dataLayer, "push").as("event");
            // Obtiene el valor capturado por el "espía" y ejecuta una función.
            cy.get("@event").then((calledEvent) => {
                cy.log(JSON.stringify(win.dataLayer))

                // Define un OBJETO con propiedades.
                let dataL = {
                    event: this.dataLFixture.manage_see_current_plan.webview.event,
                    pageName: this.dataLFixture.manage_see_current_plan.webview.pageName,
                    eventFunctionality: this.dataLFixture.manage_see_current_plan.webview.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_see_current_plan.webview.eventOrder,
                };

                // Mapea(transformar) los elementos del "dataLayer" capturado y los reformatea en un nuevo arreglo llamado "winDatalayer".
                let winDatalayer = win.dataLayer.map(function (item) {
                    return {
                        event: item.event,
                        pageName: item.pageName,
                        eventFunctionality: item.eventFunctionality,
                        eventOrder: item.eventOrder,
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
    it("02 - Conocer Mi Plan - Botón Conocer otros Planes", { tags: ['regresion', 'mtvTageo'] }, function () {
        administrarMtv.getBoton().click()
        conocerMiPlan.getBoton().click()
        // Accede al objeto "window" del navegador y ejecuta una función cuando esté disponible.
        cy.window().then(win => {
            cy.wait(2000)
            // "Espía" la función "push" del objeto "dataLayer" en el objeto "window" y se lo nombra como "@event".
            cy.spy(win.dataLayer, "push").as("event");
            // Obtiene el valor capturado por el "espía" y ejecuta una función.
            cy.get("@event").then((calledEvent) => {
                cy.log(JSON.stringify(win.dataLayer))

                // Define un OBJETO con propiedades.
                let dataL = {
                    event: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.event,
                    eventCategory: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.eventCategory,
                    eventAction: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.eventAction,
                    eventLabel: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.eventLabel,
                    eventFunctionality: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_see_current_plan.button_meet_other_plans.eventOrder
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
