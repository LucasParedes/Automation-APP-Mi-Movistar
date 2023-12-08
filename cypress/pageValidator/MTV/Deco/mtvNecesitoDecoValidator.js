const { softAssert, softExpect } = chai;
import InfoDeco from "../../../pageObjects/MTV/Deco/mtvNecesitoDecoPage";
import NavBar from "../../../pageObjects/NavBar/navBarMtvPage";

const infoDeco = new InfoDeco()
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

    validarPantallaNecesitoDeco: function () {

        cy.log('*Que contenga el navbar los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloDeco())
            .then(banner => {
                //softExpect(banner).to.have.css('border', infoDeco.getBannerDecoBorder())
                softExpect(banner).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(banner).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(banner).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(banner).to.have.css('color', navBar.getTituloColor())
            })

        cy.log('*Que contenga el icono informativo*')
        infoDeco.getBannerDecoIcono()
            .should('exist')
            .and('be.visible')

        cy.log('*Que contenga el banner de info deco y los estilos correctos*')
        infoDeco.getBannerInfoDeco()
            .then(banner => {
                //softExpect(banner).to.have.css('border', infoDeco.getBannerDecoBorder())
                softExpect(banner).to.have.css('border-radius', infoDeco.getBannerDecoBorderRadius())
                softExpect(banner).to.have.css('background-color', infoDeco.getBannerDecoBackgroundColor())
            })

        cy.log('*Que contenga texto de descripcion del banner y los estilos correctos*')
        infoDeco.getBannerDescripcion()
            .should('contain', infoDeco.getBannerDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getBannerDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getBannerDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getBannerDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getBannerDescripcionTextoColor())
            })

        cy.log('*Que contenga texto de titulo y los estilos correctos*')
        infoDeco.getTituloComoSeSiNecesitoDeco()
            .should('contain', infoDeco.getTituloComoSeSiNecesitoDecoTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getTituloComoSeSiNecesitoDecoTextoColor())
            })

        cy.log('*Que contenga texto de titulo y los estilos correctos*')
        infoDeco.getItemsIcono()
            .should('exist')
            .and('be.visible')


        cy.log('*Que contenga textos de los iconos y los estilos correctos*')
        infoDeco.getItemsTexto()
            .should('contain', infoDeco.getItemsTextoUno())
            .should('contain', infoDeco.getItemsTextoDos())
            .should('contain', infoDeco.getItemsTextoTres())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getItemsTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getItemsTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getItemsTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getItemsTextoColor())
            })
    },

    validarPantallaNecesitoDecoMobile: function (width) {

        cy.log('*Que contenga el icono informativo*')
        infoDeco.getBannerDecoIcono()
            .should('exist')
            .and('be.visible')

        cy.log('*Que contenga el banner de info deco y los estilos correctos*')
        infoDeco.getBannerInfoDeco()
            .then(banner => {
                //softExpect(banner).to.have.css('border', infoDeco.getBannerDecoBorder())
                softExpect(banner).to.have.css('border-radius', infoDeco.getBannerDecoBorderRadius())
                softExpect(banner).to.have.css('background-color', infoDeco.getBannerDecoBackgroundColor())
            })

        cy.log('*Que contenga texto de descripcion del banner y los estilos correctos*')
        infoDeco.getBannerDescripcion()
            .should('contain', infoDeco.getBannerDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getBannerDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getBannerDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getBannerDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getBannerDescripcionTextoColor())
            })

        cy.log('*Que contenga texto de titulo y los estilos correctos*')
        infoDeco.getTituloComoSeSiNecesitoDeco()
            .should('contain', infoDeco.getTituloComoSeSiNecesitoDecoTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getTituloComoSeSiNecesitoDecoTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getTituloComoSeSiNecesitoDecoTextoColor())
            })

        cy.log('*Que contenga texto de titulo y los estilos correctos*')
        infoDeco.getItemsIcono()
            .should('exist')
            .and('be.visible')


        cy.log('*Que contenga textos de los iconos y los estilos correctos*')
        infoDeco.getItemsTexto()
            .should('contain', infoDeco.getItemsTextoUno())
            .should('contain', infoDeco.getItemsTextoDos())
            .should('contain', infoDeco.getItemsTextoTres())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', infoDeco.getItemsTextoFontSize())
                softExpect(texto).to.have.css('font-style', infoDeco.getItemsTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', infoDeco.getItemsTextoFontWeight())
                softExpect(texto).to.have.css('color', infoDeco.getItemsTextoColor())
            })
    }
}