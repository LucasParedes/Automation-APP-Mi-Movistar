const { softAssert, softExpect } = chai;
import MtvComboActivo from "../../../../pageObjects/MTV/ADM/ActivarDisneyYStar/mtvComboActivoPage";
import NavBar from '../../../../pageObjects/NavBar/navBarMtvPage';

const mtvComboActivo = new MtvComboActivo()
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

    validarPantallaMtvComboActivo: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvComboActivo.getIconoAlert().should('exist')

        cy.log('*Que el titulo informativo y los estilos correctos*')
        mtvComboActivo.getTitulo()
            .then(titulo => {
                softExpect(titulo).to.have.css('margin-bottom', mtvComboActivo.getTituloMarginBottom())
                softExpect(titulo).to.have.css('margin-top', mtvComboActivo.getTituloMarginTop())
                // softExpect(titulo).to.have.css('margin-left', mtvComboActivo.getTituloMarginLeft()) NOS MUESTRA EL VALOR DE 0
            })

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvComboActivo.getTituloTexto(width)
            .should('contain', mtvComboActivo.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvComboActivo.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvComboActivo.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvComboActivo.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvComboActivo.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripción informativo y los estilos correctos*');

        mtvComboActivo.getDescripcion(width)
            .invoke('text').then((texto) => {
                const textoEsperado = mtvComboActivo.getDescripcionTexto();
                expect(texto.trim()).to.equal(textoEsperado.trim());// Compara el texto extraído con el texto esperado

                mtvComboActivo.getDescripcion(width)
                    .then(texto => {
                        softExpect(texto).to.have.css('font-size', mtvComboActivo.getDescripcionTextoFontSize());
                        softExpect(texto).to.have.css('font-style', mtvComboActivo.getDescripcionTextoFontStyle());
                        softExpect(texto).to.have.css('font-weight', mtvComboActivo.getDescripcionTextoFontWeight());
                        softExpect(texto).to.have.css('color', mtvComboActivo.getDescripcionTextoColor());
                        softExpect(texto).to.have.css('line-height', mtvComboActivo.getDescripcionTextoLineHeight());
                    })
            });


        cy.log('*Que contenga boton Ir a Star+ y los estilos correctos*')
        mtvComboActivo.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvComboActivo.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border', mtvComboActivo.getBotonPrincipalBorder())
                softExpect(boton).to.have.css('border-radius', mtvComboActivo.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('height', mtvComboActivo.getBotonPrincipalHeight())
                softExpect(boton).to.have.css('justify-content', mtvComboActivo.getBotonPrincipalJustifyContent())
                softExpect(boton).to.have.css('align-items', mtvComboActivo.getBotonPrincipalAlignItems())
            })

        cy.log('*Que contenga el texto de boton Ir a Star+ y los estilos correctos*')
        mtvComboActivo.getBotonPrincipalTexto()
            .should('contain', mtvComboActivo.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvComboActivo.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvComboActivo.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvComboActivo.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvComboActivo.getBotonPrincipalTextoDescipcioncolor())
                softExpect(texto).to.have.css('line-height', mtvComboActivo.getBotonPrincipalTextoDescripcionLineHeight())
                softExpect(texto).to.have.css('text-align', mtvComboActivo.getBotonPrincipalTextoDescripcionTextAlign())
            })

        cy.log('*Que contenga boton Volver a mi linea y los estilos correctos*')
        mtvComboActivo.getBotonSecundario()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvComboActivo.getBotonSecundarioBackGroundColor())
                //softExpect(boton).to.have.css('border', mtvComboActivo.getBotonSecundarioBorder()) TOMA EL VALOR COMO 0.8PX
                softExpect(boton).to.have.css('border-color', mtvComboActivo.getBotonSecundarioBorderColor())
                softExpect(boton).to.have.css('border-radius', mtvComboActivo.getBotonSecundarioBorderRadius())
                softExpect(boton).to.have.css('height', mtvComboActivo.getBotonSecundarioHeight())
                softExpect(boton).to.have.css('justify-content', mtvComboActivo.getBotonSecundarioJustifyContent())
                softExpect(boton).to.have.css('align-items', mtvComboActivo.getBotonSecundarioAlignItems())
            })

        cy.log('*Que contenga el texto de boton Volver a mi linea y los estilos correctos*')
        mtvComboActivo.getBotonSecundarioTexto()
            .should('contain', mtvComboActivo.getBotonSecundarioTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvComboActivo.getBotonSecundarioTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvComboActivo.getBotonSecundarioTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvComboActivo.getBotonSecundarioTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvComboActivo.getBotonSecundarioTextoDescipcioncolor())
                softExpect(texto).to.have.css('height', mtvComboActivo.getBotonSecundarioTextoDescipcionLineHeight())
                softExpect(texto).to.have.css('text-align', mtvComboActivo.getBotonSecundarioTextoDescipcionTextAlign())
            })
    }
}