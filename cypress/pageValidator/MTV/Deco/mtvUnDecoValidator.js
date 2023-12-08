const { softAssert, softExpect } = chai;
import UnDeco from "../../../pageObjects/MTV/Deco/mtvUnDecoPage";
import NavBar from "../../../pageObjects/NavBar/navBarMtvPage";

const unDeco = new UnDeco()
const navBar = new NavBar()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloDeco())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },
    validarPantallaUnDeco: function () {

        cy.log('*Que contenga la imagen*')
        unDeco.getImagen()
            .should('exist')
            .and('be.visible')

        cy.log('*Que contenga texto de la descripcion y los estilos correctos*')
        unDeco.getDescripcion()
            .should('contain', unDeco.getDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', unDeco.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', unDeco.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', unDeco.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', unDeco.getDescripcionTextoColor())
            })

        cy.log('*Que contenga el boton continuar y los estilos correctos*')
        unDeco.getBotonContinuar()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', unDeco.getBotonContinuarBorderRadius())
                softExpect(texto).to.have.css('background-color', unDeco.getBotonContinuarBackgroundColor())
            })

        cy.log('*Que contenga el texto del boton continuar y los estilos correctos*')
        unDeco.getBotonContinuarTexto()
            .should('contain', unDeco.getBotonContinuarDescripcion())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', unDeco.getBotonContinuarDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', unDeco.getBotonContinuarDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', unDeco.getBotonContinuarDescripcionFontWeight())
                softExpect(texto).to.have.css('color', unDeco.getBotonContinuarDescripcionColor())
            })
    }
}