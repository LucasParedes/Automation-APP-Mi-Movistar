import GrillaPlanesPage from '../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import NavBar from '../../../pageObjects/NavBar/navBarMtvPage';
const { softAssert, softExpect } = chai;

const grillaPlanes = new GrillaPlanesPage()
const navBar = new NavBar()

let altText = [
    grillaPlanes.getAltImagenes()
];

//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv(width)
            .should('contain', navBar.getTituloTextoMtv())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },

    validarPantallaGrillaPlanes: function () {
        cy.log('*Que contenga el texto administrar mi movistar tv y los estilos correctos*');
        grillaPlanes.getAdministrarPlanMtvtexto()
            .should('contain', grillaPlanes.getAdministrarPlanMtvRecuadroTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getAdministrarPlanMtvRecuadroTextoFontSize());
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getAdministrarPlanMtvRecuadroTextoFontWeight());
                softExpect(texto).to.have.css('font-style', grillaPlanes.getAdministrarPlanMtvRecuadroTextoFontStyle());
                softExpect(texto).to.have.css('color', grillaPlanes.getAdministrarPlanMtvRecuadroTextoColor());
            })

        cy.log('*Que contenga la linea de división y los estilos correctos*')
        grillaPlanes.getIconoLinea()
            .then(linea => {
                //softExpect(linea).to.have.css('color', grillaPlanes.getIconoLineaColor())
            });

        cy.log('*Que contenga los borders de los chips activos de los combos y los estilos correctos*')
        grillaPlanes.getChipBorderActivo()
            .then(chip => {
                softExpect(chip).to.have.css('border-radius', grillaPlanes.getChipBorderActivoBorderRadius())
                //softExpect(chip).to.have.css('border' , grillaPlanes.getChipBorderActivoBorder())
                softExpect(chip).to.have.css('background-color', grillaPlanes.getChipBorderActivoBackGroundColor())
            })

        cy.log('*Que contenga los borders de los chips inactivo de los combos y los estilos correctos*')
        grillaPlanes.getChipBorderInactivo()
            .then(chip => {
                softExpect(chip).to.have.css('border-radius', grillaPlanes.getChipBorderInactivoBorderRadius())
                //softExpect(chip).to.have.css('border' , grillaPlanes.getChipBorderInactivoBorder())
                softExpect(chip).to.have.css('background-color', grillaPlanes.getChipBorderInactivoBackGroundColor())
            })

        cy.log('*Que contenga los textos de los chips de los combos y los estilos correctos*');
        grillaPlanes.getChipTexto()
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getChipTextoFontSize());
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getChipTextoFontWeight());
                softExpect(texto).to.have.css('font-style', grillaPlanes.getChipTextoFontStyle());
                softExpect(texto).to.have.css('color', grillaPlanes.getChipTextoFontColor());
            });


        cy.log('*Que contenga recuadro de info del plan y los estilos correctos*')
        grillaPlanes.getPlanDetailsRecuadro()
            .then(recuadro => {
                softExpect(recuadro).to.have.css('border-radius', grillaPlanes.getPlanDetailsBorderRecuadroBorderRadius())
                //softExpect(recuadro).to.have.css('border', grillaPlanes.getPlanDetailsRecuadroBorder())
                softExpect(recuadro).to.have.css('background-color', grillaPlanes.getPlanDetailsRecuadroBackgroundColor())
            })


        cy.log('*Que la imagen de los packs esté visible.*');
        grillaPlanes.getImagenPlan().should('be.visible');

        cy.log('*Que los textos ALT de las imágenes sean correctos*');
        grillaPlanes.getImagenPlan()
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
                        expect(grillaPlanes.getUrlImagenDigitalCombo()).to.include(scrValue);
                    });
            })

        cy.log('*Que contenga texto meses de regalo con fibra y los estilos correctos*')
        grillaPlanes.getRegaloRecuadroTexto()
            .should('contain', grillaPlanes.getRegaloRecuadroTextoDescipcion())
            .then(regalo => {
                softExpect(regalo).to.have.css('font-size', grillaPlanes.getRegaloRecuadroTextoFontSize())
                softExpect(regalo).to.have.css('font-weight', grillaPlanes.getRegaloRecuadroTextoFontWeight())
                softExpect(regalo).to.have.css('font-style', grillaPlanes.getRegaloRecuadroTextoFontStyle())
                softExpect(regalo).to.have.css('color', grillaPlanes.getRegaloRecuadroTextoColor())
            })

        cy.log('*Que contenga texto titulo TV DIGITAL COMBO+ y los estilos correctos*')
        grillaPlanes.getTituloPlanTexto().eq(0)
            .should('contain', grillaPlanes.getTituloPLanTextoTvDigiCP())
            .then(titulo => {
                softExpect(titulo).to.have.css('font-size', grillaPlanes.getTituloPlanTextoFontSize())
                softExpect(titulo).to.have.css('font-weight', grillaPlanes.getTituloPlanTextoFontWeight())
                softExpect(titulo).to.have.css('font-style', grillaPlanes.getTituloPlanTextoFontStyle())
                softExpect(titulo).to.have.css('color', grillaPlanes.getTituloPlanTextoColor())
            })

        /* cy.log('*Que contenga el marco de la descripcion y los estilos correctos*')
        grillaPlanes.getDescripcionPlan()
        .then(linea =>{
            softExpect(linea).to.have.css('background-color', grillaPlanes.getDescripcionPlanTextoColor())
        })  No contiene el bakcground-color */

        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        grillaPlanes.getDescripcionPlanTexto().eq(0)
            .should('contain', grillaPlanes.getDescripcionPlanTextoTvDigiCP())
            .then(descripcion => {
                softExpect(descripcion).to.have.css('font-size', grillaPlanes.getDescripcionPlanTextoFontSize())
                softExpect(descripcion).to.have.css('font-weight', grillaPlanes.getDescripcionPlanTextoFontWeight())
                softExpect(descripcion).to.have.css('font-style', grillaPlanes.getDescripcionPlanTextoFontStyle())
                softExpect(descripcion).to.have.css('color', grillaPlanes.getDescripcionPlanTextoColor())
            })

        cy.log('*Que contenga boton ver grilla de planes y los estilos correctos*')
        grillaPlanes.getGrillaCanales()
            .then(linea => {
                //softExpect(linea).to.have.css('font-size', grillaPlanes.getGrillaCanalesBotonTextoFontSize())
            })

        cy.log('*Que contenga texto ver grilla de planes y los estilos correctos*')
        grillaPlanes.getGrillaCanalesBotonTexto()
            .should('contain', grillaPlanes.getGrillaCanalesBotonTextoVerGrilla())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getGrillaCanalesBotonTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getGrillaCanalesBotonTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getGrillaCanalesBotonTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getGrillaCanalesBotonTextoColor())
            })

        cy.log('*Que contenga texto de los bullets y los estilos correctos*')
        grillaPlanes.getBulletListTexto()
            .should('contain', grillaPlanes.getBulletListTextoUno())
            .should('contain', grillaPlanes.getBulletListTextoDos())
            .should('contain', grillaPlanes.getBulletListTextoTres())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getBulletListTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getBulletListTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getBulletListTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getBulletListTextoColor())
            })

        cy.log('*Que contenga recuadro de iva y los estilos correctos*')
        grillaPlanes.getInfoRecuadro()
            .then(recuadro => {
                softExpect(recuadro).to.have.css('border-radius', grillaPlanes.getInfoRecuadroBorderRadius())
                softExpect(recuadro).to.have.css('border', grillaPlanes.getInfoRecuadroBorder())
            })

        cy.log('*Que contenga el texto dentro del recuadro de iva y los estilos correctos*')
        grillaPlanes.getInfoRecuadroTexto()
            .should('contain', grillaPlanes.getInfoRecuadroTextoInfo())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getInfoRecuadroTextoInfoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getInfoRecuadroTextoInfoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getInfoRecuadroTextoInfoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getInfoRecuadroTextoInfoColor())
            })

        cy.log('*Que contenga el texto del valor del precio y los estilos correctos*')
        grillaPlanes.getValor()
            .should('contain', grillaPlanes.getValorNumero())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getvalorNumeroFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getValorNumeroWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getValorNumeroFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getValorNumeroColor())
            })

        cy.log('*Que contenga el boton quiero este plan y los estilos correctos*')
        grillaPlanes.getBoton()
            .then(boton => {
                softExpect(boton).to.have.css('border-radius', grillaPlanes.getBotonBorderRadius())
                softExpect(boton).to.have.css('background-color', grillaPlanes.getBotonBackGroundColor())
            })

        cy.log('*Que contenga el texto en el boton quiero este plan y los estilos correctos*')
        grillaPlanes.getBotonTexto()
            .should('contain', grillaPlanes.getBotonTextoQuiero())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getBotonTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getBotonTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getBotonTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getBotonTextoColor())
            })
    },

    // VALIDAR SEGUNDO PLAN(TV MAX)
    validarPlanTvMax: function () {
        cy.log('*Que contenga texto titulo TV MAX y los estilos correctos*')
        cy.wait(3000)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMax()).click();
        grillaPlanes.getTituloPlanTexto()
            .should('contain', grillaPlanes.getTituloPLanTextoTvMax())
            .then(titulo => {
                softExpect(titulo).to.have.css('font-size', grillaPlanes.getTituloPlanTextoFontSize())
                softExpect(titulo).to.have.css('font-weight', grillaPlanes.getTituloPlanTextoFontWeight())
                softExpect(titulo).to.have.css('font-style', grillaPlanes.getTituloPlanTextoFontStyle())
                softExpect(titulo).to.have.css('color', grillaPlanes.getTituloPlanTextoColor())
            })

        cy.log('*Que contenga texto de descripcion de TV MAX y los estilos correctos*')
        grillaPlanes.getDescripcionPlanTexto()
            .should('contain', grillaPlanes.getDescripcionPlanTextoTvMax())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getDescripcionPlanTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getDescripcionPlanTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getDescripcionPlanTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getDescripcionPlanTextoColor())
            })

        cy.log('*Que la imagen de los packs esté visible.*');
        grillaPlanes.getImagenPlan().should('be.visible');

        cy.log('*Que los textos ALT de las imágenes sean correctos*');
        grillaPlanes.getImagenPlan()
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
                        expect(grillaPlanes.getUrlImagenMax()).to.include(scrValue);
                    });
            })
    },

    // VALIDAR TERCER PLAN(TV MAX COMBO+)
    validarPlanTvMaxCombo: function () {
        cy.log('*Que contenga texto titulo TV MAX COMBO+ y los estilos correctos*')
        cy.wait(3000)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMaxCombo()).click();
        grillaPlanes.getTituloPlanTexto()
            .should('contain', grillaPlanes.getTituloPLanTextoTvMCP())
            .then(titulo => {
                softExpect(titulo).to.have.css('font-size', grillaPlanes.getTituloPlanTextoFontSize())
                softExpect(titulo).to.have.css('font-weight', grillaPlanes.getTituloPlanTextoFontWeight())
                softExpect(titulo).to.have.css('font-style', grillaPlanes.getTituloPlanTextoFontStyle())
                softExpect(titulo).to.have.css('color', grillaPlanes.getTituloPlanTextoColor())
            })

        cy.log('*Que contenga texto de descripcion de TV MAX COMBO+ y los estilos correctos*')
        grillaPlanes.getDescripcionPlanTexto()
            .should('contain', grillaPlanes.getDescripcionPlanTextoTvMCP())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getDescripcionPlanTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getDescripcionPlanTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getDescripcionPlanTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getDescripcionPlanTextoColor())
            })
        cy.log('*Que la imagen de los packs esté visible.*');
        grillaPlanes.getImagenPlan().should('be.visible');

        cy.log('*Que los textos ALT de las imágenes sean correctos*');
        grillaPlanes.getImagenPlan()
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
                        expect(grillaPlanes.getUrlImagenMaxCombo()).to.include(scrValue);
                    });
            })
    },

    // VALIDAR SEGUNDO PLAN(TV MAX)
    validarPlanTvMaxMobile: function () {
        cy.log('*Que contenga texto titulo TV MAX y los estilos correctos*')
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMax()).click();
        grillaPlanes.getTituloPlanTexto()
            .should('contain', grillaPlanes.getTituloPLanTextoTvMax())
            .then(titulo => {
                softExpect(titulo).to.have.css('font-size', grillaPlanes.getTituloPlanTextoFontSize())
                softExpect(titulo).to.have.css('font-weight', grillaPlanes.getTituloPlanTextoFontWeight())
                softExpect(titulo).to.have.css('font-style', grillaPlanes.getTituloPlanTextoFontStyle())
                softExpect(titulo).to.have.css('color', grillaPlanes.getTituloPlanTextoColor())
            })

        cy.log('*Que contenga texto de descripcion de TV MAX y los estilos correctos*')
        grillaPlanes.getDescripcionPlanTexto()
            .should('contain', grillaPlanes.getDescripcionPlanTextoTvMax())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getDescripcionPlanTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getDescripcionPlanTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getDescripcionPlanTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getDescripcionPlanTextoColor())
            })
    },

    // VALIDAR TERCER PLAN(TV MAX COMBO+)
    validarPlanTvMaxComboMobile: function () {
        cy.log('*Que contenga texto titulo TV MAX COMBO+ y los estilos correctos*')
        cy.wait(3000)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMaxCombo()).click();
        grillaPlanes.getTituloPlanTexto()
            .should('contain', grillaPlanes.getTituloPLanTextoTvMCP())
            .then(titulo => {
                softExpect(titulo).to.have.css('font-size', grillaPlanes.getTituloPlanTextoFontSize())
                softExpect(titulo).to.have.css('font-weight', grillaPlanes.getTituloPlanTextoFontWeight())
                softExpect(titulo).to.have.css('font-style', grillaPlanes.getTituloPlanTextoFontStyle())
                softExpect(titulo).to.have.css('color', grillaPlanes.getTituloPlanTextoColor())
            })

        cy.log('*Que contenga texto de descripcion de TV MAX COMBO+ y los estilos correctos*')
        grillaPlanes.getDescripcionPlanTexto()
            .should('contain', grillaPlanes.getDescripcionPlanTextoTvMCP())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', grillaPlanes.getDescripcionPlanTextoFontSize())
                softExpect(texto).to.have.css('font-weight', grillaPlanes.getDescripcionPlanTextoFontWeight())
                softExpect(texto).to.have.css('font-style', grillaPlanes.getDescripcionPlanTextoFontStyle())
                softExpect(texto).to.have.css('color', grillaPlanes.getDescripcionPlanTextoColor())
            })
    }
}