import navBarMtvPage from "../../pageObjects/NavBar/navBarMtvPage"
import SeleccionDeLinea from "../../pageObjects/MTV/mtvSeleccionDeLineaPage"
const { softAssert, softExpect } = chai;

const navBar = new navBarMtvPage();
const seleccionLinea = new SeleccionDeLinea();

module.exports = {
    validarPantallaSeleccionDeLineaDescipcion: function (width) {

        cy.log('*Que el nombre de la pestaña sea correcto*')
        cy.title().should('eq', navBar.getTituloSeleccionLinea())

        cy.log('*Que el nombre de la pantalla sea el correcto*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloSeleccionLinea())
            .then(nombre => {
                softExpect(nombre).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(nombre).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(nombre).to.have.css('color', navBar.getTituloColor(width))
                softExpect(nombre).to.have.css('font-weight', navBar.getTituloFontWeight())
            })
    },

    validarPantallaSeleccionDeLinea: function () {

        // Descripción
        cy.log('*Que contenga la descrcipción con sus caracterisitcas*')
        seleccionLinea.getDescripcion()
            .should('contain', seleccionLinea.getDescripcionTexto())
            .then(descipcion => {
                softExpect(descipcion).to.have.css('color', seleccionLinea.getDescripcionColor())
                softExpect(descipcion).to.have.css('font-size', seleccionLinea.getDescripcionSize())
            })

        // Ícono Producto
        cy.log('*Que contenga el icono en componente *')
        seleccionLinea.getIconoProducto()
            .each((icono) => {
                softExpect(icono).to.be.visible
                //softExpect(icono).to.have.css('padding',seleccionLinea.getIconoProductoPadding()) 
                // No lo detecta Cypress o aparece con valor 0.
            })
        // Recuadro
        cy.log('*Que contenga el recuadro del elemento línea*')
        seleccionLinea.getRecuadro()
            .each((recuadro) => {
                //softExpect(recuadro).to.have.css('padding',seleccionLinea.getRecuadroPadding())
                // No lo detecta Cypress o aparece con valor 0.
                softExpect(recuadro).to.have.css('border-radius', seleccionLinea.getRecuadroBorderRadius())
                // softExpect(recuadro).to.have.css('border',seleccionLinea.getRecuadroBorder())
                softExpect(recuadro).to.have.css('background-color', seleccionLinea.getRecuadroBackgroundColor())
            })
        // Id Servicio
        cy.log('*Que contenga el número del elemento línea*')
        seleccionLinea.getLinea()
            //.invoke('text')
            //should('contains',aniFormateado)
            .each((linea) => {
                //expect(linea).to.match(/^\+\d{1,3} \d{3}-\d{3}-\d{4}$/)
                //softExpect(linea).to.have.css('margin', seleccionLinea.getLlineaMargin())
                softExpect(linea).to.have.css('font-size', seleccionLinea.getLineaFontSize())
                softExpect(linea).to.have.css('font-weight', seleccionLinea.getLineaFontWeight())
                softExpect(linea).to.have.css('font-style', seleccionLinea.getLineaFontStyle())
            })
        // Producto 
        cy.log('*Que contenga el plan del elemento línea*')
        seleccionLinea.getPlanLinea()
            //should('contains',planAni) //El plan se puede obtener en los servicios de perfilado.
            .each((plan) => {
                softExpect(plan).to.have.css('color', seleccionLinea.getPlanLineaColor())
                softExpect(plan).to.have.css('font-size', seleccionLinea.getPlanLineaFontSize())
                softExpect(plan).to.have.css('font-weight', seleccionLinea.getPlanLineaFontWeight())
                softExpect(plan).to.have.css('font-style', seleccionLinea.getPlanLineaFontStyle())
            })
        // Ícono '>'
        cy.log('*Que contenga un ícono >*')
        seleccionLinea.getIconoSeleccion()
            .each((icono) => {
                softExpect(icono).to.be.visible
            })

        seleccionLinea.getPlanLinea().each((planLineaElement) => {
            // Dentro de esta función, planLineaElement representa cada elemento del conjunto.
            const planLineaText = planLineaElement.text();

            if (planLineaText.includes('Internet')) {
                cy.log('*Que contenga promo el elemento línea si el plan es Internet*')
                cy.wait(1000)
                seleccionLinea.getPromo()
                    .should('contain', seleccionLinea.getPromoText())
                    .then((promo) => {
                        softExpect(promo).to.have.css('background-color', seleccionLinea.getPromoBackgroundColor())
                        softExpect(promo).to.have.css('color', seleccionLinea.getPromoTextColor())
                        softExpect(promo).to.have.css('font-size', seleccionLinea.getPromoTextFontSize())
                        softExpect(promo).to.have.css('font-weight', seleccionLinea.getPromoTextFontWeight())
                        softExpect(promo).to.have.css('border-radius', seleccionLinea.getPromoTextBorderRadius())
                        softExpect(promo).to.have.css('align-items', seleccionLinea.getPromoTextAlignItems())
                    })
            } else {
                cy.log('*No hay líneas Internet, por ende no hay promo*')
            }

        })

    }
}
