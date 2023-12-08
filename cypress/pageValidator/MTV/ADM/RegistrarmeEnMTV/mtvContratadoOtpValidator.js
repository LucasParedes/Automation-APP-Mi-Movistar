const { softAssert, softExpect } = chai;
import MtvContratadoOtp from "../../../../pageObjects/MTV/ADM/RegistrarmeEnMTV/mtvContratadoOtpPage";

const mtvContratadoOtp = new MtvContratadoOtp()
//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {
    validarPantallaMtvContratadoOtp: function (width) {

        cy.log('*Que contenga el icono informativo*')
        mtvContratadoOtp.getIconoAlert().should('exist')

        cy.log('*Que contenga texto de titulo informativo y los estilos correctos*')
        mtvContratadoOtp.getTituloTexto(width)
            .should('contain', mtvContratadoOtp.getTituloTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoOtp.getTituloTextoDescripcionFontSize(width))
                softExpect(texto).to.have.css('font-style', mtvContratadoOtp.getTituloTextoDescripcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoOtp.getTituloTextoDescripcionFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoOtp.getTituloTextoDescripcionColor())
            })

        cy.log('*Que contenga texto de descripcion informativo y los estilos correctos*')
        mtvContratadoOtp.getDescripcion(width)
            .should('contain', mtvContratadoOtp.getDescripcionTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoOtp.getDescripcionTextoFontSize())
                softExpect(texto).to.have.css('font-style', mtvContratadoOtp.getDescripcionTextoFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoOtp.getDescripcionTextoFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoOtp.getDescripcionTextoColor())
            })

        cy.log('*Que contenga boton Registrarme y los estilos correctos*')
        mtvContratadoOtp.getBotonPrincipal()
            .then(boton => {
                softExpect(boton).to.have.css('background-color', mtvContratadoOtp.getBotonPrincipalBackGroundColor())
                softExpect(boton).to.have.css('border-radius', mtvContratadoOtp.getBotonPrincipalBorderRadius())
                softExpect(boton).to.have.css('border', mtvContratadoOtp.getBotonPrincipalBorder())
            })

        cy.log('*Que contenga el texto de boton Registrarme y los estilos correctos*')
        mtvContratadoOtp.getBotonPrincipalTexto()
            .should('contain', mtvContratadoOtp.getBotonPrincipalTextoValor())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', mtvContratadoOtp.getBotonPrincipalTextoDescipcionFontSize())
                softExpect(texto).to.have.css('font-style', mtvContratadoOtp.getBotonPrincipalTextoDescipcionFontStyle())
                softExpect(texto).to.have.css('font-weight', mtvContratadoOtp.getBotonPrincipalTextoDescipcionFontWeight())
                softExpect(texto).to.have.css('color', mtvContratadoOtp.getBotonPrincipalTextoDescipcioncolor())
            })
    }
}