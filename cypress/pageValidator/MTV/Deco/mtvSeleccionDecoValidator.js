const { softAssert, softExpect } = chai;
import SeleccionDeco from "../../../pageObjects/MTV/Deco/mtvSeleccionDecoPage";
import NavBar from "../../../pageObjects/NavBar/navBarMtvPage";

const seleccionDeco = new SeleccionDeco()
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

    validarPantallaSeleccionDeco: function () {

        cy.log('*Que contenga el banner de info deco y los estilos correctos*')
        seleccionDeco.getBannerDeco()
            .then(banner => {
                //softExpect(banner).to.have.css('border-radius', seleccionDeco.getBannerDecoBorderRadius())
                //softExpect(banner).to.have.css('border', seleccionDeco.getBannerDecoBorder())
                softExpect(banner).to.have.css('background-color', seleccionDeco.getBannerDecoBackgroundColor())
            })

        cy.log('*Que contenga texto de descripcion del banner y los estilos correctos*')
        seleccionDeco.getBannerDescripcion()
            .should('contain', seleccionDeco.getBannerDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getBannerDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getBannerDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getBannerDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getBannerDescripcionTextoColor())
            })

        cy.log('*Que contenga el boton como se si necesito un deco y los estilos correctos*')
        seleccionDeco.getBannerDecoBotonNecesitoDeco()
            .should('contain', seleccionDeco.getBannerDecoBotonNecesitoDecoTexto())
            .then(boton => {
                softExpect(boton).to.have.css('font-size', seleccionDeco.getBannerDecoBotonNecesitoDecoTextoFontSize())
                softExpect(boton).to.have.css('font-style', seleccionDeco.getBannerDecoBotonNecesitoDecoTextoFontStyle())
                softExpect(boton).to.have.css('font-weight', seleccionDeco.getBannerDecoBotonNecesitoDecoTextoFontWeight())
                softExpect(boton).to.have.css('color', seleccionDeco.getBannerDecoBotonNecesitoDecoTextoColor())
            })

        cy.log('*Que contenga el recuadro de ideal si tu tv no es smart y los estilos correctos*')
        seleccionDeco.getSmartRecuadro()
            .then(recuadro => {
                softExpect(recuadro).to.have.css('border-radius', seleccionDeco.getSmartRecuadroBorderRadius())
                softExpect(recuadro).to.have.css('background-color', seleccionDeco.getSmartRecuadroBackGroundColor())
            })

        cy.log('*Que contenga el texto del recuadro de ideal si tu tv no es smart y los estilos correctos*')
        seleccionDeco.getSmartRecuadro()
            .should('contain', seleccionDeco.getSmartRecuadroTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getSmartRecuadroTextoFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getSmartRecuadroTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getSmartRecuadroTextoFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getSmartRecuadroTextoColor())
            })

        cy.log('*Que contenga el texto del titulo principal y los estilos correctos*')
        seleccionDeco.getTituloTexto()
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga el subtitulo principal y los estilos correctos*')
        seleccionDeco.getSubTitulo()
            .then(texto => {
                softExpect(texto).to.have.css('padding', seleccionDeco.getSubTituloPadding())
                softExpect(texto).to.have.css('background-color', seleccionDeco.getSubTituloBackGroundColor())
            })

        cy.log('*Que contenga el texto del subtitulo principal y los estilos correctos*')
        seleccionDeco.getSubTituloTexto()
            .should('contain', seleccionDeco.getSubTituloTextoDescripcion())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getSubTituloTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getSubTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getSubTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga los bullets*')
        seleccionDeco.getBulletIcono()
            .should('exist')
            .and('be.visible')

        cy.log('*Que contenga el texto de los bullets y los estilos correctos*')
        seleccionDeco.getBulletTexto()
            .should('contain', seleccionDeco.getBulletTextoDescripcion())
            .should('contain', seleccionDeco.getBulletTextoDescripcionDos())
            .then(texto => {
                //softExpect(texto).to.have.css('font-size', seleccionDeco.getBulletTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getBulletTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getBulletTextoDescripcionFontWeight())
                //softExpect(texto).to.have.css('color', seleccionDeco.getBulletTextoDescripcionColor())
            })

        cy.log('*Que contenga la imagen*')
        seleccionDeco.getImagenInfo()
            .should('exist')
            .and('be.visible')

        cy.log('*Que contenga el input del valor del deco y los estilos correctos*')
        seleccionDeco.getDecoInputPrecio()
            .should('contain', seleccionDeco.getDecoInputPrecioTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getDecoInputPrecioTextoFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getDecoInputPrecioTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getDecoInputPrecioTextoFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getDecoInputPrecioTextoColor())
            })

        cy.log('*Que contenga el texto x deco al mes y los estilos correctos*')
        seleccionDeco.getDecoAlMesTexto()
            .should('contain', seleccionDeco.getDecoAlMesTextoDescripcion())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getDecoAlMesTextoDescripcionFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getDecoAlMesTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getDecoAlMesTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getDecoAlMesTextoDescripcionColor())
            })

        cy.log('*Que contenga boton de sacar decos y los estilos correctos*')
        seleccionDeco.getCantidadDecosBotonSacar()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', seleccionDeco.getCantidadDecosBotonSacarBakgroundColor())
                //softExpect(boton).to.have.css('border', seleccionDeco.getCantidadDecosBotonSacarBorder())
                softExpect(boton).to.have.css('border-radius', seleccionDeco.getCantidadDecosBotonSacarBorderRadius())
            })

        cy.log('*Que contenga el texto de cantidad de decos que agrega y los estilos correctos*')
        seleccionDeco.getCantidadDecosNumero()
            .then(boton => {
                softExpect(boton).to.have.css('font-size', seleccionDeco.getCantidadDecosNumeroFontSize())
                softExpect(boton).to.have.css('color', seleccionDeco.getCantidadDecosNumeroColor())
            })

        cy.log('*Que contenga boton de aumentar decos y los estilos correctos*')
        seleccionDeco.getCantidadDecosBotonAumentar()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', seleccionDeco.getCantidadDecosBotonAumentarBakgroundColor())
                //softExpect(boton).to.have.css('border', seleccionDeco.getCantidadDecosBotonAumentarBorder())
                softExpect(boton).to.have.css('border-radius', seleccionDeco.getCantidadDecosBotonAumentarBorderRadius())
            })

        cy.log('*Que contenga el boton agregar deco y continuar inactivo y los estilos correctos*')
        seleccionDeco.getBotonAgregarDecoInactivo()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', seleccionDeco.getBotonAgregarDecoInactivoBorderRadius())
                softExpect(texto).to.have.css('background-color', seleccionDeco.getBotonAgregarDecoInactivoBackGroundColor())
            })

        cy.log('*Que contenga el boton agregar deco y continuar activo y los estilos correctos*')
        cy.wait(4000)
        seleccionDeco.getCantidadDecosBotonAumentar().click()
        cy.wait(4000)
        seleccionDeco.getBotonAgregarDecoActivo()
            .then(texto => {
                softExpect(texto).to.have.css('background-color', seleccionDeco.getBotonAgregarDecoActivoBackGroundColor())
            })

        cy.log('*Que contenga el texto del boton agregar deco y continuar y los estilos correctos*')
        seleccionDeco.getBotonPrincipal()
            .should('contain', seleccionDeco.getBotonPrincipalTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getBotonPrincipalTextoFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getBotonPrincipalTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getBotonPrincipalTextoFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getBotonPrincipalTextoColor())
            })

        cy.log('*Que contenga el boton continuar sin deco y los estilos correctos*')
        seleccionDeco.getBotonContinuarSinDeco()
            .then(texto => {
                softExpect(texto).to.have.css('border-radius', seleccionDeco.getBotonContinuarSinDecoBorderRadius())
                //softExpect(texto).to.have.css('border', seleccionDeco.getBotonContinuarSinDecoBorder())
            })

        cy.log('*Que contenga el texto del boton continuar sin deco y los estilos correctos*')
        seleccionDeco.getBotonSecundario()
            .should('contain', seleccionDeco.getBotonSecundarioTextoDescripcion())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', seleccionDeco.getBotonSecundarioTextoFontSize())
                softExpect(texto).to.have.css('font-style', seleccionDeco.getBotonSecundarioTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', seleccionDeco.getBotonSecundarioTextoFontWeight())
                softExpect(texto).to.have.css('color', seleccionDeco.getBotonSecundarioTextoColor())
            })
    }
}