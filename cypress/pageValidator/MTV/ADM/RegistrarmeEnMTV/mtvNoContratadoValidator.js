const { softAssert, softExpect } = chai;
import MtvNoContratado from "../../../../pageObjects/MTV/ADM/RegistrarmeEnMTV/mtvNoContratadoPage";

const mtvNoContratado = new MtvNoContratado()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {
    validarPantallaMtvNoContratado: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvNoContratado.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvNoContratado.getTituloTexto(width)
            .should('contain', mtvNoContratado.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvNoContratado.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvNoContratado.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvNoContratado.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvNoContratado.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripcion informativo y los estilos correctos*')
        mtvNoContratado.getDescripcion(width)
            .should('contain', mtvNoContratado.getDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvNoContratado.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', mtvNoContratado.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvNoContratado.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', mtvNoContratado.getDescripcionTextoColor())
            })

        cy.log('*Que contenga boton Ver planes de Movistar TV y los estilos correctos*')
        mtvNoContratado.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvNoContratado.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border-radius', mtvNoContratado.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('border', mtvNoContratado.getBotonPrincipalBorder())
            })

        cy.log('*Que contenga el texto de boton Ver planes de Movistar TV y los estilos correctos*')
        mtvNoContratado.getBotonPrincipalTexto()
            .should('contain', mtvNoContratado.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvNoContratado.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvNoContratado.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvNoContratado.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvNoContratado.getBotonPrincipalTextoDescipcioncolor())
            })

        cy.log('*Que contenga boton Volver a mi linea y los estilos correctos*')
        mtvNoContratado.getBotonSecundario()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvNoContratado.getBotonSecundarioBackGroundColor())
                softExpect(boton).to.have.css('border-radius', mtvNoContratado.getBotonSecundarioBorderRadius())
                //softExpect(boton).to.have.css('border', mtvNoContratado.getBotonSecundarioBorder ())
                softExpect(boton).to.have.css('border-color', mtvNoContratado.getBotonSecundarioBorderColor())
            })

        cy.log('*Que contenga el texto de boton Volver a mi linea y los estilos correctos*')
        mtvNoContratado.getBotonSecundarioTexto()
            .should('contain', mtvNoContratado.getBotonSecundarioTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvNoContratado.getBotonSecundarioTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvNoContratado.getBotonSecundarioTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvNoContratado.getBotonSecundarioTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvNoContratado.getBotonSecundarioTextoDescipcioncolor())
            })
    }
}