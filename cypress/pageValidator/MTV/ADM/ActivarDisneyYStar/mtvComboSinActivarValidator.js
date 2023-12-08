const { softAssert, softExpect } = chai;
import MtvComboSinActivar from "../../../..//pageObjects/MTV/ADM/ActivarDisneyYStar/mtvComboSinActivarPage";
import NavBar from '../../../../pageObjects/NavBar/navBarMtvPage';

const mtvComboSinActivar = new MtvComboSinActivar()
const navBar = new NavBar()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloComboPlus())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },

    validarPantallaMtvComboSinActivar: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvComboSinActivar.getIconoAlert().should('exist')

        cy.log('*Que el titulo informativo y los estilos correctos*')
        mtvComboSinActivar.getTitulo()
            .then(titulo => {
                softExpect(titulo).to.have.css('margin-bottom', mtvComboSinActivar.getTituloMarginBottom())
                softExpect(titulo).to.have.css('margin-top', mtvComboSinActivar.getTituloMarginTop())
                // softExpect(titulo).to.have.css('margin-left', mtvComboSinActivar.getTituloMarginLeft()) NOS MUESTRA EL VALOR DE 0
            })

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvComboSinActivar.getTituloTexto(width)
            .should('contain', mtvComboSinActivar.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvComboSinActivar.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvComboSinActivar.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvComboSinActivar.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvComboSinActivar.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripción informativo y los estilos correctos*');

        mtvComboSinActivar.getDescripcion()
            .invoke('text').then((texto) => {
                const textoEsperado = mtvComboSinActivar.getDescripcionTexto();
                expect(texto.trim()).to.equal(textoEsperado.trim());// Compara el texto extraído con el texto esperado

                mtvComboSinActivar.getDescripcion()
                    .then(texto => {
                        softExpect(texto).to.have.css('font-size', mtvComboSinActivar.getDescripcionTextoFontSize())
                        softExpect(texto).to.have.css('font-style', mtvComboSinActivar.getDescripcionTextoFontStyle())
                        softExpect(texto).to.have.css('font-weight', mtvComboSinActivar.getDescripcionTextoFontWeight())
                        softExpect(texto).to.have.css('color', mtvComboSinActivar.getDescripcionTextoColor())
                        softExpect(texto).to.have.css('line-height', mtvComboSinActivar.getDescripcionTextoLineHeight())
                        softExpect(texto).to.have.css('margin', mtvComboSinActivar.getDescripcionTextoLineMargin())
                    })
            });


        cy.log('*Que contenga boton Ver planes de Movistar TV y los estilos correctos*')
        mtvComboSinActivar.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvComboSinActivar.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border', mtvComboSinActivar.getBotonPrincipalBorder())
                softExpect(boton).to.have.css('border-radius', mtvComboSinActivar.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('height', mtvComboSinActivar.getBotonPrincipalHeight())
                softExpect(boton).to.have.css('justify-content', mtvComboSinActivar.getBotonPrincipalJustifyContent())
                softExpect(boton).to.have.css('align-items', mtvComboSinActivar.getBotonPrincipalAlignItems())
            })

        cy.log('*Que contenga el texto de boton Activar Mi Cuenta y los estilos correctos*')
        mtvComboSinActivar.getBotonPrincipalTexto()
            .should('contain', mtvComboSinActivar.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvComboSinActivar.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvComboSinActivar.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvComboSinActivar.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvComboSinActivar.getBotonPrincipalTextoDescipcioncolor())
                softExpect(texto).to.have.css('line-height', mtvComboSinActivar.getBotonPrincipalTextoDescripcionLineHeight())
                softExpect(texto).to.have.css('text-align', mtvComboSinActivar.getBotonPrincipalTextoDescripcionTextAlign())
            })
    }
}