const { softAssert, softExpect } = chai;
import MtvContratadoIdp from "../../../../pageObjects/MTV/ADM/RegistrarmeEnMTV/mtvContratadoIdpPage";

const mtvContratadoIdp = new MtvContratadoIdp()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {
    validarPantallaMtvContratadoIdp: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvContratadoIdp.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvContratadoIdp.getTituloTexto(width)
            .should('contain', mtvContratadoIdp.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoIdp.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvContratadoIdp.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoIdp.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoIdp.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripcion informativo y los estilos correctos*')
        mtvContratadoIdp.getDescripcion()
            .should('contain', mtvContratadoIdp.getDescripcionTexto())
            .should('contain', mtvContratadoIdp.getDescripcionTexto2())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoIdp.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', mtvContratadoIdp.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoIdp.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoIdp.getDescripcionTextoColor())
            })

        cy.log('*Que existan los bullets*')
        mtvContratadoIdp.getDescripcion().should('exist')

        cy.log('*Que contenga boton Ver planes de Movistar TV y los estilos correctos*')
        mtvContratadoIdp.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvContratadoIdp.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border-radius', mtvContratadoIdp.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('border', mtvContratadoIdp.getBotonPrincipalBorder())
            })

        cy.log('*Que contenga el texto de boton Ver planes de Movistar TV y los estilos correctos*')
        mtvContratadoIdp.getBotonPrincipalTexto()
            .should('contain', mtvContratadoIdp.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoIdp.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvContratadoIdp.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoIdp.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoIdp.getBotonPrincipalTextoDescipcioncolor())
            })

        cy.log('*Que contenga boton Volver a mi linea y los estilos correctos*')
        mtvContratadoIdp.getBotonSecundario()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvContratadoIdp.getBotonSecundarioBackGroundColor())
                softExpect(boton).to.have.css('border-radius', mtvContratadoIdp.getBotonSecundarioBorderRadius())
                //softExpect(boton).to.have.css('border', mtvContratadoIdp.getBotonSecundarioBorder ())
                softExpect(boton).to.have.css('border-color', mtvContratadoIdp.getBotonSecundarioBorderColor())
            })

        cy.log('*Que contenga el texto de boton Volver a mi linea y los estilos correctos*')
        mtvContratadoIdp.getBotonSecundarioTexto()
            .should('contain', mtvContratadoIdp.getBotonSecundarioTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoIdp.getBotonSecundarioTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvContratadoIdp.getBotonSecundarioTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoIdp.getBotonSecundarioTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoIdp.getBotonSecundarioTextoDescipcioncolor())
            })
    }
}