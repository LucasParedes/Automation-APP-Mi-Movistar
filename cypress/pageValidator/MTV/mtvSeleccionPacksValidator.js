import navBarMtvPage from "../../pageObjects/NavBar/navBarMtvPage"
import SelecccionDePacks from "../../pageObjects/MTV/mtvSeleccionDePacksPage"
const { softAssert, softExpect } = chai;

const navBar = new navBarMtvPage();
const seleccionDePacks = new SelecccionDePacks();

module.exports = {
    validarPantallaSeleccionDePacksNavBar: function (width) {

        cy.log('*Que el nombre de la pestaña sea correcto*');
        cy.title().should('eq', navBar.getTituloSeleccionDePacks());

        cy.log('*Que el nombre de la pantalla sea el correcto*');
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloSeleccionDePacks())
            .then(nombre => {
                softExpect(nombre).to.have.css('font-size', navBar.getTituloFontSize());
                softExpect(nombre).to.have.css('font-style', navBar.getTituloFontStyle());
                softExpect(nombre).to.have.css('color', navBar.getTituloColor(width));
                softExpect(nombre).to.have.css('font-weight', navBar.getTituloFontWeight());
            });
    },
    validarPantallaSeleccionDePacks: function () {
        let cantidadPacks = seleccionDePacks.getCantidadPacks();
        // Título del packs
        cy.log('*Que las descipción de la pantalla sea el correcto*');
        seleccionDePacks.getTituloPantalla()
            .should('contain', seleccionDePacks.getTituloPantallaValor())
            .then(titulo => {
                softExpect(titulo).to.have.css('color', seleccionDePacks.getTituloPantallaColor());
                softExpect(titulo).to.have.css('font-family', seleccionDePacks.getTituloPantallaFontFamily());
                softExpect(titulo).to.have.css('font-size', seleccionDePacks.getTituloPantallaFontSize());
                softExpect(titulo).to.have.css('font-style', seleccionDePacks.getTituloPantallaFontStyle());
                softExpect(titulo).to.have.css('font-weight', seleccionDePacks.getTituloPantallaFontWeight());
            });

        // TODAS LAS CLASE DE LOS PACKS SON IDENTICAS Y NO TIENE DIFERENCIAS ENTRE DESKTOP Y MOBILE.
        // imagen del pack  
        // Los valores se pusieron en orden de detección de Cypress para armar los array.
        let altText = [
            seleccionDePacks.getAltPackFutbol()
            , seleccionDePacks.getAltHbo()
            , seleccionDePacks.getAltPrime()
            , seleccionDePacks.getAltParamount()
        ];
        let scrText = [
            seleccionDePacks.getUrlImagenPackFutbol()
            , seleccionDePacks.getUrlImagenHbo()
            , seleccionDePacks.getUrlImagenPrime()
            , seleccionDePacks.getUrlImagenParamount()
        ];
        // Validar que los textos alt sean correctos     
        cy.log('*Que la imagen de los packs esten visible.*');
        seleccionDePacks.getImagenPack()
            .should('have.length', cantidadPacks)
            .each(($element, index) => {
                softExpect($element).to.be.visible;
                cy.log('*Que los textos ALT de las imagenes sean correctos*');
                cy.wrap($element)
                    .invoke('attr', 'alt')
                    .then((altValue) => {
                        expect(altText[index]).to.include(altValue);
                    });

                cy.log('*Que la url de las imagenes sea correcta*');
                cy.wrap($element)
                    .invoke('attr', 'src')
                    .then((scrValue) => {
                        expect(scrText[index]).to.include(scrValue);
                    });
            })
        // Título de los packs
        cy.log('*Que el título del pack sean los correctos y con lo valores determinados*');
        seleccionDePacks.getTituloPack()
            .should('have.length', cantidadPacks)
            .should('contain', seleccionDePacks.getTituloPackFutbol())
            .should('contain', seleccionDePacks.getTituloPackPrime())
            .should('contain', seleccionDePacks.getTituloPackHbo())
            .should('contain', seleccionDePacks.getTituloPackParamount())
            .then((titulo) => {
                softExpect(titulo).to.have.css('color', seleccionDePacks.getTituloPackColor());
                softExpect(titulo).to.have.css('font-family', seleccionDePacks.getTituloPackFontFamily());
                softExpect(titulo).to.have.css('font-size', seleccionDePacks.getTituloPackFontSize());
                softExpect(titulo).to.have.css('font-style', seleccionDePacks.getTituloPackFontStyle());
                softExpect(titulo).to.have.css('font-weight', seleccionDePacks.getTituloPackFontWeight());
            });
        // Descripción de los packs
        cy.log('*Que la descripción de cada pack sea la correcta y con formato correcto*');
        seleccionDePacks.getDescripcionPack()
            .should('have.length', cantidadPacks)
            .should('contain', seleccionDePacks.getDescripcionPackFutbol())
            .should('contain', seleccionDePacks.getDescripcionPackPrime())
            .should('contain', seleccionDePacks.getDescripcionPackHbo())
            .should('contain', seleccionDePacks.getDescripcionPackParamount())
            .then((titulo) => {
                softExpect(titulo).to.have.css('color', seleccionDePacks.getDescripcionPackColor());
                softExpect(titulo).to.have.css('font-family', seleccionDePacks.getDescripcionPackFontFamily());
                softExpect(titulo).to.have.css('font-size', seleccionDePacks.getDescripcionPackFontSize());
                softExpect(titulo).to.have.css('font-style', seleccionDePacks.getDescripcionPackFontStyle());
                softExpect(titulo).to.have.css('font-weight', seleccionDePacks.getDescripcionPackFontWeight());
            });


        // Recuadro Precio
        cy.log('*Que el recuadro de los precios tenga el formato correcto*');
        seleccionDePacks.getRecuadroPrecio()
            .then((recuadro) => {
                //softExpect(recuadro).to.have.css('border', seleccionDePacks.getRecuadroPrecioBorder());
                softExpect(recuadro).to.have.css('border-radius', seleccionDePacks.getRecuadroPrecioBorderRadius());
                softExpect(recuadro).to.have.css('padding', seleccionDePacks.getRecuadroPrecioPadding());
            });
        // Precio de cada packs.
        cy.log('*Que el precio de cada pack sea el correcto y con formato correcto*');
        seleccionDePacks.getPrecio()
            .should('have.length', cantidadPacks)
            .should('contain', seleccionDePacks.getPrecioValorPackFutbol())
            .should('contain', seleccionDePacks.getPrecioValorPackPrime())
            .should('contain', seleccionDePacks.getPrecioValorPackHbo())
            .should('contain', seleccionDePacks.getPrecioValorPackParamount())
            .then((precio) => {
                softExpect(precio).to.have.css('color', seleccionDePacks.getPrecioColor());
                softExpect(precio).to.have.css('font-family', seleccionDePacks.getPrecioFontFamily());
                softExpect(precio).to.have.css('font-size', seleccionDePacks.getPrecioFontSize());
                softExpect(precio).to.have.css('font-style', seleccionDePacks.getPrecioFontStyle());
                softExpect(precio).to.have.css('font-weight', seleccionDePacks.getPrecioFontWeight());
            });
        // Texto del precio "x mes"
        cy.log('*Que el texto "x mes" tenga formato correcto*');
        seleccionDePacks.getPrecioTexto()
            .should('contain', seleccionDePacks.getPrecioTextoValor())
            .then((textXmes) => {
                softExpect(textXmes).to.have.css('color', seleccionDePacks.getPrecioTextoColor());
                softExpect(textXmes).to.have.css('font-family', seleccionDePacks.getPrecioTextoFontFamily());
                softExpect(textXmes).to.have.css('font-size', seleccionDePacks.getPrecioTextoFontSize());
            });
        //CheckBox
        cy.log('*Que el checkBox exista*');
        seleccionDePacks.getCheckBox().each(($checkBox) => {
            cy.wrap($checkBox).then((separador) => {
                softExpect(separador).to.be.visible;
            })
        })

        seleccionDePacks.getCheckBoxIcono().each(($checkBoxIcon) => {
            cy.wrap($checkBoxIcon).should('exist');
        })

        // Línea que separa cada Packs
        cy.log('*Que el separador exista y tenga formato correcto*');
        seleccionDePacks.getSeparadorPacks()
            .then((separador) => {
                softExpect(separador).to.be.visible;
                softExpect(separador).to.have.css('background-color', seleccionDePacks.getSeparadorPacksBackgroundColor());
            });
        // Prueba por ID        
        cy.log('*Que el separador exista y tenga formato correcto*');
        seleccionDePacks.getSeparadorPacksId()
            .then((separador) => {
                softExpect(separador).to.be.visible;
                softExpect(separador).to.have.css('background-color', seleccionDePacks.getSeparadorPacksBackgroundColor());
            });

        // Botón continuar
        cy.log('*Que el botón Continuar exista*');
        seleccionDePacks.getBotonContinuar().should('exist');

        cy.log('*Que el texto del botón Continuar tenga el formato correcto*');
        seleccionDePacks.getBotonContinuarTexto()
            .should('contain', seleccionDePacks.getBotonContinuarTextoValor())
            .then((precio) => {
                softExpect(precio).to.have.css('color', seleccionDePacks.getBotonContinuarTextoColor());
                softExpect(precio).to.have.css('font-family', seleccionDePacks.getBotonContinuarTextoFontFamily());
                softExpect(precio).to.have.css('font-size', seleccionDePacks.getBotonContinuarTextoFontSize());
                softExpect(precio).to.have.css('font-style', seleccionDePacks.getBotonContinuarTextoFontStyle());
                softExpect(precio).to.have.css('font-weight', seleccionDePacks.getBotonContinuarTextoFontWeight());
            });
    }
}