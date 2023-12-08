const { softAssert, softExpect } = chai;
import MasDeUnDeco from "../../../pageObjects/MTV/Deco/mtvMasDeUnDecoPage";
import NavBar from "../../../pageObjects/NavBar/navBarMtvPage";

const masDeUnDeco = new MasDeUnDeco()
const navBar = new NavBar()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar y los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloUnDeco())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },
    validarPantallaMasDeUnDeco: function () {

        cy.log('*Que contenga el texto del titulo y los estilos correctos*')
        masDeUnDeco.getTitulo()
            .should('contain', masDeUnDeco.getTituloTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getTituloTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getTituloTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getTituloTextoFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getTituloTextoColor())
            })

        cy.log('*Que contenga el recuadro donde se ingresa el telefono y los estilos correctos*')
        masDeUnDeco.getRecuadroTelefono()
            .then(recuadro => {
                softExpect(recuadro).to.have.css('border-radius', masDeUnDeco.getRecuadroTelefonoBorderRadius())
                //softExpect(recuadro).to.have.css('border', masDeUnDeco.getRecuadroTelefonoBorder())
                //softExpect(recuadro).to.have.css('background-color', masDeUnDeco.getRecuadroTelefonoBackGroundColor())
            })

        cy.log('*Que contenga el texto del prefijo del celular y los estilos correctos*')
        masDeUnDeco.getPrefijoTelefono()
            .should('contain', masDeUnDeco.getPrefijoTelefonoTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getPrefijoTelefonoTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getPrefijoTelefonoTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getPrefijoTelefonoTextoFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getPrefijoTelefonoTextoColor())
            })

        cy.log('*Que contenga el texto del Place Holder y los estilos correctos*')
        masDeUnDeco.getPlaceHolder()
            .should('contain', masDeUnDeco.getPlaceHolderTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getPlaceHolderTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getPlaceHolderTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getPlaceHolderTextoFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getPlaceHolderTextoColor())
            })

        cy.log('*Que contenga el texto de ayuda como ingresar el numero y los estilos correctos*')
        masDeUnDeco.getTextoAyuda()
            .should('contain', masDeUnDeco.getTextoAyudaComoIngresarlo())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getTextoAyudaComoIngresarloFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getTextoAyudaComoIngresarloFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getTextoAyudaComoIngresarloFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getTextoAyudaComoIngresarloColor())
            })

        cy.log('*Que contenga el boton inactivo y los estilos correctos*')
        masDeUnDeco.getBotonInactivo()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', masDeUnDeco.getBotonInactivoBorderRadius())
                softExpect(texto).to.have.css('background-color', masDeUnDeco.getBotonInactivoBackGroundColor())
            })

        cy.log('*Que contenga el texto del boton y los estilos correctos*')
        masDeUnDeco.getBotonTexto()
            .should('contain', masDeUnDeco.getBotonTextoAgregar())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getBotonTextoAgregarFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getBotonTextoAgregarFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getBotonTextoAgregarFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getBotonTextoAgregarColor())
            })

        masDeUnDeco.getInput().type('622662640')
        cy.log('*Que contenga el label de Telefono fijo FOCUS y los estilos correctos*')
        masDeUnDeco.getLabel()
            .should('contain', masDeUnDeco.getLabelTexto())
            .then(texto => {
                //softExpect(texto).to.have.css('font-size', masDeUnDeco.getLabelTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getLabelTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getLabelTextoFontWeight())
                //softExpect(texto).to.have.css('color', masDeUnDeco.getLabelFocusTextoColor())
            })

        masDeUnDeco.getInput().clear().type('6226626401')
        masDeUnDeco.getTitulo().click()
        cy.log('*Que contenga el label de Telefono fijo ACTIVO y los estilos correctos*')
        masDeUnDeco.getLabel()
            .should('contain', masDeUnDeco.getLabelTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getLabelTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getLabelTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getLabelTextoFontWeight())
                //softExpect(texto).to.have.css('color', masDeUnDeco.getLabelActivoTextoColor())
            })

        cy.log('*Que contenga el icono valido y los estilos correctos*')
        masDeUnDeco.getIconoValido().should('be.visible').should('exist')

        cy.log('*Que contenga el boton activo y los estilos correctos*')
        masDeUnDeco.getBotonActivo()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', masDeUnDeco.getBotonActivoBorderRadius())
                softExpect(texto).to.have.css('background-color', masDeUnDeco.getBotonActivoBackGroundColor())
            })

        masDeUnDeco.getInput().clear().type('622662640')
        masDeUnDeco.getTitulo().click()
        cy.log('*Que contenga el label de Telefono fijo ERROR y los estilos correctos*')
        masDeUnDeco.getLabelError()
            .should('contain', masDeUnDeco.getLabelTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getLabelTextoFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getLabelTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getLabelTextoFontWeight())
                //softExpect(texto).to.have.css('color', masDeUnDeco.getLabelErrorTextoColor())
            })

        cy.log('*Que contenga el texto de ayuda numero invalido y los estilos correctos*')
        masDeUnDeco.getTextoAyuda2()
            .should('contain', masDeUnDeco.getTextoAyudaError())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', masDeUnDeco.getTextoAyudaComoIngresarloFontSize())
                softExpect(texto).to.have.css('font-style', masDeUnDeco.getTextoAyudaComoIngresarloFontStyle())
                softExpect(texto).to.have.css('font-weight', masDeUnDeco.getTextoAyudaComoIngresarloFontWeight())
                softExpect(texto).to.have.css('color', masDeUnDeco.getTextoAyudaErrorColor())
            })

        cy.log('*Que contenga el icono de error y los estilos correctos*')
        masDeUnDeco.getIconoValido().should('be.visible').should('exist')
    }
}
