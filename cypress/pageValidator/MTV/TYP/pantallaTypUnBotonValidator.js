const { softAssert, softExpect } = chai;
import ConUnBoton from '../../../pageObjects/MTV/TyP/typConUnBotonPage';
import PantallaTyp from '../../../pageObjects/MTV/TYP/pantallaTypPage'

const conUnBoton = new ConUnBoton()
const pantallaTYP = new PantallaTyp()

module.exports = {
    validarPantallaTYP: function () {

        cy.log('*Que contenga el icono informativo*')
        pantallaTYP.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        pantallaTYP.getTituloTexto()
            .should('contain', conUnBoton.getTituloTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        pantallaTYP.getDescripcion()
            .should('contain', conUnBoton.getDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getDescripcionTextoColor())
            })

        cy.log('*Que contenga boton activa mi cuenta y los estilos correctos*')
        pantallaTYP.getBotonPrincipalUnBoton()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonPrincipalBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonPrincipalBackGroundColor())
            })

        cy.log('*Que contenga el texto del boton activa mi cuenta y los estilos correctos*')
        pantallaTYP.getBotonPrincipalTexto()
            .should('contain', conUnBoton.getBotonPrincipal())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonPrincipalTextoDescipcionColor())
            })
    },

    validarPantallaTypMobile: function () {

        cy.log('*Que contenga el icono informativo*')
        pantallaTYP.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        pantallaTYP.getTituloTextoMobile()
            .should('contain', conUnBoton.getTituloTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getTituloTextoDescripcionColorMobile())
            })

        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        pantallaTYP.getDescripcionMobile()
            .should('contain', conUnBoton.getDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getDescripcionTextoColorMobile())
            })

        cy.log('*Que contenga boton activa mi cuenta y los estilos correctos*')
        pantallaTYP.getBotonPrincipalUnBoton()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', pantallaTYP.getBotonPrincipalBorderRadius())
                softExpect(texto).to.have.css('background-color', pantallaTYP.getBotonPrincipalBackGroundColorMobile())
            })

        cy.log('*Que contenga el texto del boton activa mi cuenta y los estilos correctos*')
        pantallaTYP.getBotonPrincipalTextoMobile()
            .should('contain', conUnBoton.getBotonPrincipal())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', pantallaTYP.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', pantallaTYP.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', pantallaTYP.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', pantallaTYP.getBotonPrincipalTextoDescipcioncolorMobile())
            })
    }
}