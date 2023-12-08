const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import CambioDePlanMtv from '../../../../pageObjects/MTV/CambioDePlan/mtvCambioDePlanPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
const grillaPlanes = new GrillaPlanesPage()
const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
const cambioDePlanMtv = new CambioDePlanMtv()
describe("Taggeo Cambio de Plan -ingreso.OTP", function () {

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
    });

    it("01 - Cambio de Plan - WebView", { tags: ['regresion', 'mtvTageo'] }, function () {
        cy.wait(2000)
        grillaPlanes.getBoton().click()
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
                    event: this.dataLFixture.change_of_plan.webview.event,
                    pageName: this.dataLFixture.change_of_plan.webview.pageName,
                    eventFunctionality: this.dataLFixture.change_of_plan.webview.eventFunctionality,
                    eventOrder: this.dataLFixture.change_of_plan.webview.eventOrder,
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
    it("02 - Cambio de Plan - Botón Ver mi plan actual", { tags: ['regresion', 'mtvTageo'] }, function () {
        cy.wait(2000)
        grillaPlanes.getBoton().click()
        cy.wait(4000)
        cambioDePlanMtv.getLinkPlanActualRecuadro().click()
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
                    event: this.dataLFixture.change_of_plan.button_see_current_plan.event,
                    eventCategory: this.dataLFixture.change_of_plan.button_see_current_plan.eventCategory,
                    eventAction: this.dataLFixture.change_of_plan.button_see_current_plan.eventAction,
                    eventLabel: this.dataLFixture.change_of_plan.button_see_current_plan.eventLabel,
                    eventFunctionality: this.dataLFixture.change_of_plan.button_see_current_plan.eventFunctionality,
                    eventOrder: this.dataLFixture.change_of_plan.button_see_current_plan.eventOrder
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
    it("03 - Cambio de Plan - Botón Cambiar de Plan", { tags: ['regresion', 'mtvTageo'] }, function () {
        cy.wait(2000)
        grillaPlanes.getBoton().click()
        cy.wait(2000)
        cambioDePlanMtv.getBotonPrincipal().click()
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
                    event: this.dataLFixture.change_of_plan.button_change_plan.event,
                    eventCategory: this.dataLFixture.change_of_plan.button_change_plan.eventCategory,
                    eventAction: this.dataLFixture.change_of_plan.button_change_plan.eventAction,
                    eventLabel: this.dataLFixture.change_of_plan.button_change_plan.eventLabel,
                    eventFunctionality: this.dataLFixture.change_of_plan.button_change_plan.eventFunctionality,
                    eventOrder: this.dataLFixture.change_of_plan.button_change_plan.eventOrder
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
    it("04 - Cambio de Plan - Botón Conserlet mi Plan Actual", { tags: ['regresion', 'mtvTageo'] }, function () {
        cy.wait(2000)
        grillaPlanes.getBoton().click()
        cy.wait(2000)
        cambioDePlanMtv.getBotonSecundario().click()
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
                    event: this.dataLFixture.change_of_plan.button_keep_current_plan.event,
                    eventCategory: this.dataLFixture.change_of_plan.button_keep_current_plan.eventCategory,
                    eventAction: this.dataLFixture.change_of_plan.button_keep_current_plan.eventAction,
                    eventLabel: this.dataLFixture.change_of_plan.button_keep_current_plan.eventLabel,
                    eventFunctionality: this.dataLFixture.change_of_plan.button_keep_current_plan.eventFunctionality,
                    eventOrder: this.dataLFixture.change_of_plan.button_keep_current_plan.eventOrder
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
