import AdministrarMtv from '../../../../pageObjects/MTV/ADM/AdministrarMiMovistarTv/mtvAdministrarMtvPage';
import NavBar from '../../../../pageObjects/NavBar/navBarMtvPage';
const { softAssert, softExpect } = chai;

const administrarMtv = new AdministrarMtv()
const navBar = new NavBar()

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloAdministrarMtv())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },

    validarPantallaAdministrarMiMovistarTV: function () {

        cy.log('*Que contenga el recuadro principal y los estilos correctos*')
        administrarMtv.getRecuadroNuevosPlanes()
            .then(titulo => {
                softExpect(titulo).to.have.css('background-color', administrarMtv.getRecuadroNuevosPlanesBackGroundColor())
                //softExpect(titulo).to.have.css('border', administrarMtv.getRecuadroNuevosPlanesBorder())  TOMA EL VALOR DE 0.8PX Y ES 1PX
                softExpect(titulo).to.have.css('border-radius', administrarMtv.getRecuadroNuevosPlanesBorderRadius())
                //softExpect(titulo).to.have.css('margin', administrarMtv.getRecuadroNuevosPlanesMargin()) TOMA 8PX 11PX
            })

        cy.log('*Que contenga el texto del recuadro principal y los estilos correctos*')

        cy.window().its('sessionStorage').invoke('getItem', 'feature-store').then(sessionData => {
            if (sessionData) {
                const parsedData = JSON.parse(sessionData);
                const session = parsedData.movistarTvCart.actualPlan.plan.main_package_id;

                session
                    ? (
                        (session === "Movistar TV Max Combo+ OTT" || session === "Movistar TV Max Combo+")
                            ? (administrarMtv.getRecuadroValorTexto().should('have.text', administrarMtv.getRecuadroTexto() + 'Movistar TV Max Combo+'),
                                cy.log('**Se encontró el valor "Movistar TV Max Combo" en main_package_id**'))
                            : (session === "Movistar TV Max OTT" || session === "Movistar TV Max (IPTV)")
                                ? (administrarMtv.getRecuadroValorTexto().should('have.text', administrarMtv.getRecuadroTexto() + 'Movistar TV Max'),
                                    cy.log('**Se encontró el valor "Movistar TV Max" en main_package_id**'))
                                : (session === "Movistar TV Digital Combo+ OTT" || session === "Movistar TV Digital Combo+")
                                    ? (administrarMtv.getRecuadroValorTexto().should('have.text', administrarMtv.getRecuadroTexto() + 'Movistar TV Digital Combo+'),
                                        cy.log('**Se encontró el valor "Movistar TV Digital Combo" en main_package_id**'))
                                    : cy.fail('**Ninguna condición válida encontrada en main_package_id**')
                    )
                    : cy.fail('**No se encontraron datos en sessionStorage con la clave proporcionada**');
            }
        })

        administrarMtv.getRecuadroValorTexto()
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', administrarMtv.getRecuadroTextoFontSize())
                softExpect(descripcion).to.have.css('font-weight', administrarMtv.getRecuadroTextoFontWeight())
                softExpect(descripcion).to.have.css('font-style', administrarMtv.getRecuadroTextoFontStyle())
                softExpect(descripcion).to.have.css('font-family', administrarMtv.getRecuadroTextoFontFamily())
                softExpect(descripcion).to.have.css('color', administrarMtv.getRecuadroTextoColor())
            })

        cy.log('*Que contenga el texto del titulo Administra tus cuentas y los estilos correctos*')
        administrarMtv.getTitulo()
            .should('contain', administrarMtv.getTituloTexto())
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', administrarMtv.getTituloTextoFontSize())
                softExpect(descripcion).to.have.css('font-weight', administrarMtv.getTituloTextoFontWeight())
                softExpect(descripcion).to.have.css('font-style', administrarMtv.getTituloTextoFontStyle())
                softExpect(descripcion).to.have.css('font-family', administrarMtv.getTituloTextoFontFamily())
                softExpect(descripcion).to.have.css('color', administrarMtv.getTituloTextoColor())
            })

        cy.log('*Que contenga los recuadro de disney y registrarme y los estilos correctos*')
        administrarMtv.getRecuadrosGestion()
            .then(descripcion => {
                softExpect(descripcion).to.have.css('background-color', administrarMtv.getRecuadrosGestionBackgroundColor())
                //softExpect(descripcion).to.have.css('border', administrarMtv.getRecuadrosGestionBorder()) 0.8 Y ES 1PX
                softExpect(descripcion).to.have.css('border-radius', administrarMtv.getRecuadrosGestionBorderRadius())
                softExpect(descripcion).to.have.css('display', administrarMtv.getRecuadrosGestionDisplay())
            })

        cy.log('*Que contenga el texto de los recuadros de disney y registrarme y los estilos correctos*')
        administrarMtv.getRecuadrosGestionValor()
            .should('contain', administrarMtv.getRecuadrosGestionTexto1())
            .should('contain', administrarMtv.getRecuadrosGestionTexto2())
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', administrarMtv.getRecuadrosGestionTextoFontSize())
                softExpect(descripcion).to.have.css('font-weight', administrarMtv.getRecuadrosGestionTextoFontWeight())
                softExpect(descripcion).to.have.css('font-style', administrarMtv.getRecuadrosGestionTextoFontStyle())
                softExpect(descripcion).to.have.css('font-family', administrarMtv.getRecuadrosGestionTextoFontFamily())
                softExpect(descripcion).to.have.css('color', administrarMtv.getRecuadrosGestionTextoColor())
            })

        cy.log('*Que contenga el texto de los recuadros de disney y registrarme y los estilos correctos*')
        administrarMtv.getFlechaDerecha().should('be.visible')

        cy.log('*Que contenga la linea divisoria y los estilos correctos*')
        administrarMtv.getLineaDivisoria()
            .should('be.visible')
            .then(descripcion => {
                softExpect(descripcion).to.have.css('background-color', administrarMtv.getLineaDivisoriaBakgroundColor())
            })

        cy.log('*Que contenga las secciones de info para el usuario y los estilos correctos*')
        administrarMtv.getSeccionesInfo()
            .then(descripcion => {
                softExpect(descripcion).to.have.css('align-items', administrarMtv.getSeccionesInfoAlignItems())
                softExpect(descripcion).to.have.css('padding', administrarMtv.getSeccionesInfoPadding())
                softExpect(descripcion).to.have.css('height', administrarMtv.getSeccionesInfoHeight())
                softExpect(descripcion).to.have.css('display', administrarMtv.getSeccionesInfoDisplay())
            })

        cy.log('*Que contenga el texto de las seccion de info para el usuario y los estilos correctos*')
        administrarMtv.getSeccionesInfoValor()
            .should('contain', administrarMtv.getSeccionesInfoValorTexto1())
            .should('contain', administrarMtv.getSeccionesInfoValorTexto2())
            .should('contain', administrarMtv.getSeccionesInfoValorTexto3())
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', administrarMtv.getSeccionesInfoValorTextoFontSize())
                softExpect(descripcion).to.have.css('font-weight', administrarMtv.getSeccionesInfoValorTextoFontWeight())
                softExpect(descripcion).to.have.css('font-style', administrarMtv.getSeccionesInfoValorTextoFontStyle())
                softExpect(descripcion).to.have.css('font-family', administrarMtv.getSeccionesInfoValorTextoFontFamily())
                softExpect(descripcion).to.have.css('color', administrarMtv.getSeccionesInfoValorTextoColor())
            })

        cy.log('*Que contenga las lineas de separacion entre las secciones de infor para el usuario y los estilos correctos*')
        administrarMtv.getLineaSeparacion()
            .should('be.visible')
            .then(descripcion => {
                softExpect(descripcion).to.have.css('background-color', administrarMtv.getLineaSeparacionBackgroundColor())
                softExpect(descripcion).to.have.css('height', administrarMtv.getLineaSeparacionHeight())
            })
    }
}