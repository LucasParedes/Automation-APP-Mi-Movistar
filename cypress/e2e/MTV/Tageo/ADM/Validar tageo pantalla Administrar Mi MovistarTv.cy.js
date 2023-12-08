const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import AdministrarMtv from '../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'
const grillaPlanes = new GrillaPlanesPage()
const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
const administrarMtv = new AdministrarMtv()
describe("Taggeo Administrar Mi Movistar TV -ingreso.OTP", function () {

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

    it("01 - Administrar Mi Movistar TV - WebView", { tags: ['regresion', 'mtvTageo'] }, function () {
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
                    event: this.dataLFixture.manage_with_mtv.webview.event,
                    pageName: this.dataLFixture.manage_with_mtv.webview.pageName,
                    eventFunctionality: this.dataLFixture.manage_with_mtv.webview.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_with_mtv.webview.eventOrder,
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
    it("02 - Administrar Mi Movistar TV - Botón Ver mi plan actual", { tags: ['regresion', 'mtvTageo'] }, function () {
        administrarMtv.getBoton().click()
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
                    event: this.dataLFixture.manage_with_mtv.button_see_current_plan.event,
                    eventCategory: this.dataLFixture.manage_with_mtv.button_see_current_plan.eventCategory,
                    eventAction: this.dataLFixture.manage_with_mtv.button_see_current_plan.eventAction,
                    eventLabel: this.dataLFixture.manage_with_mtv.button_see_current_plan.eventLabel,
                    eventFunctionality: this.dataLFixture.manage_with_mtv.button_see_current_plan.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_with_mtv.button_see_current_plan.eventOrder
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
    it("03 - Administrar Mi Movistar TV - Botón Actilet Disney+ y Star+", { tags: ['regresion', 'mtvTageo'] }, function () {
        administrarMtv.getRecuadrosGestionValor().eq(0).should('have.text',administrarMtv.getRecuadrosGestionTexto1()).click()
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
                    event: this.dataLFixture.manage_with_mtv.button_activate_combo.event,
                    eventCategory: this.dataLFixture.manage_with_mtv.button_activate_combo.eventCategory,
                    eventAction: this.dataLFixture.manage_with_mtv.button_activate_combo.eventAction,
                    eventLabel: this.dataLFixture.manage_with_mtv.button_activate_combo.eventLabel,
                    eventFunctionality: this.dataLFixture.manage_with_mtv.button_activate_combo.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_with_mtv.button_activate_combo.eventOrder
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
    it("04 - Administrar Mi Movistar TV - Botón Registrarme en Mtv", { tags: ['regresion', 'mtvTageo'] }, function () {
        administrarMtv.getRecuadrosGestionValor().eq(1).should('have.text',administrarMtv.getRecuadrosGestionTexto2()).click()
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
                    event: this.dataLFixture.manage_with_mtv.button_register_mtv.event,
                    eventCategory: this.dataLFixture.manage_with_mtv.button_register_mtv.eventCategory,
                    eventAction: this.dataLFixture.manage_with_mtv.button_register_mtv.eventAction,
                    eventLabel: this.dataLFixture.manage_with_mtv.button_register_mtv.eventLabel,
                    eventFunctionality: this.dataLFixture.manage_with_mtv.button_register_mtv.eventFunctionality,
                    eventOrder: this.dataLFixture.manage_with_mtv.button_register_mtv.eventOrder
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
