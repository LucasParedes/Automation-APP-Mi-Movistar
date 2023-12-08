const { softAssert, softExpect } = chai;
import MtvSinComboContratado from "../../../../pageObjects/MTV/ADM/ActivarDisneyYStar/mtvSinComboContratadoPage";
import NavBar from '../../../../pageObjects/NavBar/navBarMtvPage';

const mtvSinComboContratado = new MtvSinComboContratado()
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

    validarPantallaMtvSinComboContratado: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvSinComboContratado.getIconoAlert().should('exist')

        cy.log('*Que el titulo informativo y los estilos correctos*')
        mtvSinComboContratado.getTitulo()
            .then(titulo => {
                softExpect(titulo).to.have.css('margin-bottom', mtvSinComboContratado.getTituloMarginBottom())
                softExpect(titulo).to.have.css('margin-top', mtvSinComboContratado.getTituloMarginTop())
                // softExpect(titulo).to.have.css('margin-left', mtvSinComboContratado.getTituloMarginLeft()) NOS MUESTRA EL VALOR DE 0
            })

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvSinComboContratado.getTituloTexto(width)
            .should('contain', mtvSinComboContratado.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvSinComboContratado.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvSinComboContratado.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvSinComboContratado.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvSinComboContratado.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripción informativo y los estilos correctos*');

        mtvSinComboContratado.getDescripcion(width)
            .invoke('text').then((texto) => {
                const textoEsperado = mtvSinComboContratado.getDescripcionTexto();
                expect(texto.trim()).to.equal(textoEsperado.trim());// Compara el texto extraído con el texto esperado

                mtvSinComboContratado.getDescripcion(width)
                    .then(texto => {
                        softExpect(texto).to.have.css('font-size', mtvSinComboContratado.getDescripcionTextoFontSize());
                        softExpect(texto).to.have.css('font-style', mtvSinComboContratado.getDescripcionTextoFontStyle());
                        softExpect(texto).to.have.css('font-weight', mtvSinComboContratado.getDescripcionTextoFontWeight());
                        softExpect(texto).to.have.css('color', mtvSinComboContratado.getDescripcionTextoColor());
                        softExpect(texto).to.have.css('line-height', mtvSinComboContratado.getDescripcionTextoLineHeight());
                    })
            });


        cy.log('*Que contenga boton Ver planes de Movistar TV y los estilos correctos*')
        mtvSinComboContratado.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvSinComboContratado.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border', mtvSinComboContratado.getBotonPrincipalBorder())
                softExpect(boton).to.have.css('border-radius', mtvSinComboContratado.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('height', mtvSinComboContratado.getBotonPrincipalHeight())
                softExpect(boton).to.have.css('justify-content', mtvSinComboContratado.getBotonPrincipalJustifyContent())
                softExpect(boton).to.have.css('align-items', mtvSinComboContratado.getBotonPrincipalAlignItems())
            })

        cy.log('*Que contenga el texto de boton Ver planes de Movistar TV y los estilos correctos*')
        mtvSinComboContratado.getBotonPrincipalTexto()
            .should('contain', mtvSinComboContratado.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvSinComboContratado.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvSinComboContratado.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvSinComboContratado.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvSinComboContratado.getBotonPrincipalTextoDescipcioncolor())
                softExpect(texto).to.have.css('line-height', mtvSinComboContratado.getBotonPrincipalTextoDescripcionLineHeight())
                softExpect(texto).to.have.css('text-align', mtvSinComboContratado.getBotonPrincipalTextoDescripcionTextAlign())
            })

        cy.log('*Que contenga boton Volver a mi linea y los estilos correctos*')
        mtvSinComboContratado.getBotonSecundario()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvSinComboContratado.getBotonSecundarioBackGroundColor())
                //softExpect(boton).to.have.css('border', mtvSinComboContratado.getBotonSecundarioBorder()) TOMA EL VALOR COMO 0.8PX
                softExpect(boton).to.have.css('border-color', mtvSinComboContratado.getBotonSecundarioBorderColor())
                softExpect(boton).to.have.css('border-radius', mtvSinComboContratado.getBotonSecundarioBorderRadius())
                softExpect(boton).to.have.css('height', mtvSinComboContratado.getBotonSecundarioHeight())
                softExpect(boton).to.have.css('justify-content', mtvSinComboContratado.getBotonSecundarioJustifyContent())
                softExpect(boton).to.have.css('align-items', mtvSinComboContratado.getBotonSecundarioAlignItems())
            })

        cy.log('*Que contenga el texto de boton Volver a mi linea y los estilos correctos*')
        mtvSinComboContratado.getBotonSecundarioTexto()
            .should('contain', mtvSinComboContratado.getBotonSecundarioTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvSinComboContratado.getBotonSecundarioTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvSinComboContratado.getBotonSecundarioTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvSinComboContratado.getBotonSecundarioTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvSinComboContratado.getBotonSecundarioTextoDescipcioncolor())
                softExpect(texto).to.have.css('height', mtvSinComboContratado.getBotonSecundarioTextoDescipcionLineHeight())
                softExpect(texto).to.have.css('text-align', mtvSinComboContratado.getBotonSecundarioTextoDescipcionTextAlign())
            })
    }
}