const { softAssert, softExpect } = chai;
import ConDosBotones from '../../../pageObjects/MTV/TyP/typConDosBotonesPage';
import PantallaTyp from '../../../pageObjects/MTV/TYP/pantallaTypPage'

const conDosBotones = new ConDosBotones()
const pantallaTYP = new PantallaTyp()

module.exports = {
    validarPantallaTYP: function () {

        cy.log('*Que contenga el icono informativo*')
        pantallaTYP.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        pantallaTYP.getTituloTexto()
            .should('contain', conDosBotones.getTituloTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-family', pantallaTYP.getTituloTextoDescripcionFontFamily())
                softExpect(texto).to.have.css('font-size', pantallaTYP.getTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        pantallaTYP.getDescripcion()
            .invoke('text')
            .should('eq', conDosBotones.getDescripcionTexto())

        // Validación de las caracteristas del texto
        pantallaTYP.getDescripcion()
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getDescripcionTextoColor())
            })
        // Botón Principal
        cy.log('*Que contenga boton Administrar mi Movistar TV y los estilos correctos*')
        pantallaTYP.getBotonPrincipal()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonPrincipalBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonPrincipalBackGroundColor())
            })
        cy.log('*Que contenga el texto del boton Administrar mi Movistar TV y los estilos correctos*')
        pantallaTYP.getBotonPrincipalTexto()
            .should('contain', conDosBotones.getBotonPrincipal())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonPrincipalTextoDescipcionColor())
            })
        // Botón Secundario
        cy.log('*Que contenga boton Volver a mi línea y los estilos correctos*')
        pantallaTYP.getBotonSecundario()
            .then(texto => {
                // softExpect(texto).to.have.css('border', pantallaTYP.getBotonSecundarioBorder())
                softExpect(texto).to.have.css('border-color', pantallaTYP.getBotonSecundarioBorderColor())
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonSecundarioBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonSecundarioBackGroundColor())
            })
        cy.log('*Que contenga el texto del boton secundario Volver a mi línea y los estilos correctos*')
        pantallaTYP.getBotonSecundarioTexto()
            .should('contain', conDosBotones.getBotonSecundario())
            .then(texto => {
                softExpect(texto).to.have.css('font-family', pantallaTYP.getBotonSecundarioTextoFontFamily())
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonSecundarioTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonSecundarioTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonSecundarioTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonSecundarioTextoColor())
            })
    },

    validarPantallaTypMobile: function () {

        // Icono
        cy.log('*Que contenga el icono informativo*')
        pantallaTYP.getIconoAlert().should('exist')

        // Titulo
        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        pantallaTYP.getTituloTextoMobile()
            .should('contain', conDosBotones.getTituloTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getTituloTextoDescripcionColorMobile())
            })

        // Descripción
        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        pantallaTYP.getDescripcionMobile()
            .invoke('text')
            .should('eq', conDosBotones.getDescripcionTexto())

        // Validación de las caracteristas del texto
        pantallaTYP.getDescripcionMobile()
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getDescripcionTextoColorMobile())
            })

        // Botón Principal
        cy.log('*Que contenga boton Administrar mi Movistar TV y los estilos correctos*')
        pantallaTYP.getBotonPrincipal()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonPrincipalBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonPrincipalBackGroundColorMobile())
            })
        cy.log('*Que contenga el texto del boton Administrar mi Movistar TV y los estilos correctos*')
        pantallaTYP.getBotonPrincipalTextoMobile()
            .should('contain', conDosBotones.getBotonPrincipal())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonPrincipalTextoDescipcioncolorMobile())
            })

        // Botón Secundario
        cy.log('*Que contenga boton Volver a mi línea y los estilos correctos*')
        pantallaTYP.getBotonSecundarioMobile()
            .then(texto => {
                // softExpect(texto).to.have.css('border', pantallaTYP.getBotonSecundarioBorder())
                softExpect(texto).to.have.css('border-color', pantallaTYP.getBotonSecundarioBorderColorMobile())
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonSecundarioBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonSecundarioBackGroundColor())
            })
        cy.log('*Que contenga el texto del boton secundario Volver a mi línea y los estilos correctos*')
        pantallaTYP.getBotonSecundarioTextoMobile()
            .should('contain', conDosBotones.getBotonSecundario())
            .then(texto => {
                softExpect(texto).to.have.css('font-family', pantallaTYP.getBotonSecundarioTextoFontFamily())
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonSecundarioTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonSecundarioTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonSecundarioTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonSecundarioTextoColorMobile())
            })
    }
}