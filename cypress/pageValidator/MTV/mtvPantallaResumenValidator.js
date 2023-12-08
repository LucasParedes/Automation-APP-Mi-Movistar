import navBarMtvPage from "../../pageObjects/NavBar/navBarMtvPage"
import Resumen from "../../pageObjects/MTV/mtvPantallaResumenPage"
const { softAssert, softExpect } = chai;

const navBar = new navBarMtvPage();
const resumen = new Resumen();

module.exports = {

    validarPantallaResumenNavBar: function (width) {

        cy.log('*Que el nombre de la pestaña sea correcto*')
        cy.title().should('eq', navBar.getTituloResumen())

        cy.log('*Que el nombre de la pantalla sea el correcto*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloResumen())
            .then(nombre => {
                softExpect(nombre).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(nombre).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(nombre).to.have.css('color', navBar.getTituloColor(width))
                softExpect(nombre).to.have.css('font-weight', navBar.getTituloFontWeight())
            })
    },

    validarPantallaResumen: function () {
        //Texto principal
        cy.log('*Que la descripción sea correcta*')
        resumen.getDescripcion()
            .should('contain', resumen.getDescripcionText())
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', resumen.getDescripcionFontSize())
                softExpect(descripcion).to.have.css('font-style', resumen.getDescripcionFontStyle())
                softExpect(descripcion).to.have.css('color', resumen.getDescripcionColor())
                softExpect(descripcion).to.have.css('font-weight', resumen.getDescripcionFontWeight())
            })
        /* Los ítems y subtotal no se visualizan al ingresar directamente a la pantalla Resumen.
                
                //Item pueden existir varios, por eso se debe usar el each en el validator
                cy.log('*Que cada ítem este correcto*')
                resumen.getItem()
                .each(item => {
                    softExpect(item).to.have.css('font-size',resumen.getItemFontSize())
                    softExpect(item).to.have.css('font-style', resumen.getItemFontStyle())
                    softExpect(item).to.have.css('color',resumen.getItemColor())   
                    softExpect(item).to.have.css('font-weight', resumen.getItemFontWeight())
                })
                // Monto del ítem
                cy.log('*Que cada monto de los ítem este correcto*')
                resumen.getMontoItem()
                .each(monto => {
                    softExpect(monto).to.have.css('font-size',resumen.getMontoItemFontSize())
                    softExpect(monto).to.have.css('font-style', resumen.getMontoItemFontStyle())
                    softExpect(monto).to.have.css('color',resumen.getMontoItemColor())   
                    softExpect(monto).to.have.css('font-weight', resumen.getMontoItemFontWeight())
                })
                //Subtotal
                cy.log('*Que campo subtotal este correcto*')
                resumen.getSubtotal()
                .should('contain',resumen.getSubtotalText())
                .then(subtotal => {
                    softExpect(subtotal).to.have.css('font-size',resumen.getSubtotalFontSize())
                    softExpect(subtotal).to.have.css('font-style', resumen.getSubtotalFontStyle())
                    softExpect(subtotal).to.have.css('color',resumen.getSubtotalColor())   
                    softExpect(subtotal).to.have.css('font-weight', resumen.getSubtotalFontWeight())
                })
                // Monto del Subtotal
                cy.log('*Que cada monto del subtotal este correcto*')
                resumen.getMontoSubtotal()
                .then(monto => {
                    softExpect(monto).to.have.css('font-size',resumen.getMontoSubtotalFontSize())
                    softExpect(monto).to.have.css('font-style', resumen.getMontoSubtotalFontStyle())
                    softExpect(monto).to.have.css('color',resumen.getMontoSubtotalColor())   
                    softExpect(monto).to.have.css('font-weight', resumen.getMontoSubtotalFontWeight())            
                })
        
                //Línea divisoria de Ítems
                cy.log('*Que las líneas entre los ítem, subtotal y total esten correctas*')
                resumen.getRectadivisoria()
                .each(linea => {
                    softExpect(linea).to.be.visible
                    softExpect(linea).to.have.css('background-color',resumen.getRectadivisoriaBackgroundColor())
                })
        */
        // Total
        cy.log('*Que campo total este correcto*')
        resumen.getTotal()
            .should('contain', resumen.getTotalText())
            .then(total => {
                softExpect(total).to.have.css('font-size', resumen.getTotalFontSize())
                softExpect(total).to.have.css('font-style', resumen.getTotalFontStyle())
                softExpect(total).to.have.css('color', resumen.getTotalColor())
                softExpect(total).to.have.css('font-weight', resumen.getTotalFontWeight())
            })
        // Monto del Total
        cy.log('*Que el monto del campo total este correcto*')
        resumen.getMontoTotal()
            .should('be.visible')
            .then(monto => {
                softExpect(monto).to.have.css('font-size', resumen.getMontoTotalFontSize())
                softExpect(monto).to.have.css('font-style', resumen.getMontoTotalFontStyle())
                softExpect(monto).to.have.css('color', resumen.getMontoTotalColor())
                softExpect(monto).to.have.css('font-weight', resumen.getMontoTotalFontWeight())
            })
        //Recuadro mensaje informativo de línea asociada
        cy.log('*Que recuadro del mensaje informativo de la línea donde contrato MTV este correcto*')
        resumen.getRectanguloMensajeInformativo()
            .then(rectangulo => {
                softExpect(rectangulo).to.be.visible
                softExpect(rectangulo).to.have.css('background-color', resumen.getRectanguloMensajeInformativoBackgroundColor())
                //softExpect(rectangulo).to.have.css('border', resumen.getRectanguloMensajeInformativoBorder())
                softExpect(rectangulo).to.have.css('border-color', resumen.getRectanguloMensajeInformativoBorderColor())
                softExpect(rectangulo).to.have.css('border-radius', resumen.getRectanguloMensajeInformativoBorderRadius())
            })
        //Mensaje informativo de línea asociada
        cy.log('*Que el texto del mensaje informativo de la línea donde contratará MTV este correcto*')
        resumen.getMensajeInformativo()
            // .should('match',resumen.getMensajeInformativoText()) // se usa match para que busque parte del texto sino usar include
            .should('include.text', resumen.getMensajeInformativoText())
            .then(mensaje => {
                softExpect(mensaje).to.have.css('color', resumen.getMensajeInformativoColor())
                softExpect(mensaje).to.have.css('font-family', resumen.getMensajeInformativoFontFamily())
                softExpect(mensaje).to.have.css('font-size', resumen.getMensajeInformativoFontSize())
                softExpect(mensaje).to.have.css('font-style', resumen.getMensajeInformativoFontStyle())
                softExpect(mensaje).to.have.css('font-weight', resumen.getMensajeInformativoFontWeight())
                //softExpect(mensaje).to.have.css('margin', resumen.getMensajeInformativoMargin())
            })
        //ïcono del mensaje informativo de línea asociada
        cy.log('*Que el ícono del mensaje informativo este correcta*')
        resumen.getIconoMensajeInformativo()
            .then(icono => {
                softExpect(icono).to.be.visible
            })
        //Mensaje de Descuento Genérico
        cy.log('*Que el texto del mensaje de descuento este correcto*')
        resumen.getMensajeDescuento()
            .should('contain', resumen.getMensajeDescuentoText())
            .then(mensaje => {
                softExpect(mensaje).to.have.css('font-family', resumen.getMensajeDescuentoFontFamily())
                softExpect(mensaje).to.have.css('font-size', resumen.getMensajeDescuentoFontSize())
                softExpect(mensaje).to.have.css('color', resumen.getMensajeDescuentoColor())
            })
        //Terminos y condiciones
        cy.log('*Que el texto del mensaje de terminos y condiciones este correcto*')
        // Frase
        resumen.getTerminosYCondicionesFrase()
            .should('contain', resumen.getTerminosYCondicionesFraseTexto())
        // Links
        resumen.getTerminosYCondicionesLinks()
            .should('contain', resumen.getTerminosYCondicionesLinksTexto())
            .then(link => {
                softExpect(link).to.have.css('color', resumen.getTerminosYCondicionesLinksColor())
            })
        // CSS
        resumen.getTerminosYCondicionesCss()
            .then(mensaje => {
                softExpect(mensaje).to.have.css('color', resumen.getTerminosYCondicionesCssColor())
                softExpect(mensaje).to.have.css('font-family', resumen.getTerminosYCondicionesCssFontFamily())
                softExpect(mensaje).to.have.css('font-size', resumen.getTerminosYCondicionesCssFontSize())
            })
        //Boton confirmar
        cy.log('*Que el recuadro del botón Confirmar este correcto*')
        resumen.getBotonConfirmar()
            .then(recuadro => {
                softExpect(recuadro).to.be.visible
                softExpect(recuadro).to.have.css('background-color', resumen.getBotonConfirmarBackgroundColor())
            })
        cy.log('*Que el recuadro del botón Confirmar este correcto*')
        resumen.getBotonConfirmarTexto()
            .should('contain', resumen.getBotonConfirmarTextoValor())
            .then(text => {
                softExpect(text).to.have.css('color', resumen.getBotonConfirmarTextoColor())
                softExpect(text).to.have.css('font-family', resumen.getBotonConfirmarTextoFontFamily())
                softExpect(text).to.have.css('font-size', resumen.getBotonConfirmarTextoFontSize())
                softExpect(text).to.have.css('font-style', resumen.getBotonConfirmarTextoFontStyle())
                softExpect(text).to.have.css('font-weight', resumen.getBotonConfirmarTextoFontWeight())
            })
        //Link condiciones legales
        cy.log('*Que el recuadro del botón Confirmar este correcto*')
        resumen.getCondicionesLegales()
            .should('contain', resumen.getCondicionesLegalesText())
            .then(text => {
                softExpect(text).to.have.css('color', resumen.getCondicionesLegalesColor())
                softExpect(text).to.have.css('font-family', resumen.getCondicionesLegalesFontFamily())
                softExpect(text).to.have.css('font-size', resumen.getCondicionesLegalesFontSize())
                softExpect(text).to.have.css('font-style', resumen.getCondicionesLegalesFontStyle())
                softExpect(text).to.have.css('font-weight', resumen.getCondicionesLegalesFontWeight())
                //softExpect(text).to.have.css('text-alig', resumen.getCondicionesLegalesTextalig())
            })
    }
}