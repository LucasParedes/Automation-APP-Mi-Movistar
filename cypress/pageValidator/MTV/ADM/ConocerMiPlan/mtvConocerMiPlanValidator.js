import ConocerMiPlanPage from '../../../../pageObjects/MTV/ADM/ConocerMiPlan/mtvConocerMiPlanPage';
import NavBar from '../../../../pageObjects/NavBar/navBarMtvPage';
const { softAssert, softExpect } = chai;

const conocerMiPlan = new ConocerMiPlanPage()
const navBar = new NavBar()

module.exports = {

    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv()
            .should('contain', navBar.getTituloMiPlanMtvActual())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },

    validarPantallaConocerMiPlan: function () {

        cy.log('**Que contenga el texto del titulo y la descripcion dependiendo del plan que tenga el cliente**')
        cy.log('**Validacion del SessionStorage**')
        cy.window().its('sessionStorage').invoke('getItem', 'feature-store').then(sessionData => {
            if (sessionData) {
                const parsedData = JSON.parse(sessionData);
                const session = parsedData.movistarTvCart.actualPlan.plan.main_package_id;

                if (session === "Movistar TV Max Combo+ OTT" || session === "Movistar TV Max Combo+") {
                    conocerMiPlan.getTituloPlanTexto().eq(0).should('have.text', conocerMiPlan.getTituloPLanTextoTvMCP())
                    conocerMiPlan.getDescripcionPlanTexto().eq(0).should('have.text', conocerMiPlan.getDescripcionPlanTextoTvMCP())
                    cy.log('Se encontró el valor "Movistar TV Max Combo" en main_package_id');

                } else if (session === "Movistar TV Max OTT" || session === "Movistar TV Max (IPTV)") {
                    conocerMiPlan.getTituloPlanTexto().eq(0).should('have.text', conocerMiPlan.getTituloPLanTextoTvMax())
                    conocerMiPlan.getDescripcionPlanTexto().eq(0).should('have.text', conocerMiPlan.getDescripcionPlanTextoTvMax())
                    cy.log('Se encontró el valor "Movistar TV Max" en main_package_id');

                } else if (session === "Movistar TV Digital Combo+ OTT" || session === "Movistar TV Digital Combo+") {
                    conocerMiPlan.getTituloPlanTexto().eq(0).should('have.text', conocerMiPlan.getTituloPLanTextoTvDigiCP())
                    conocerMiPlan.getDescripcionPlanTexto().eq(0).should('have.text', conocerMiPlan.getDescripcionPlanTextoTvDigiCP())
                    cy.log('Se encontró el valor "Movistar TV Digital Combo" en main_package_id');
                }
                else {
                    cy.fail('Ninguna condición válida encontrada en main_package_id');
                }
            } else {
                cy.fail('No se encontraron datos en sessionStorage con la clave proporcionada');
            }
        });
        

        cy.log('*Que contenga texto de titulo y los estilos correctos*')
            conocerMiPlan.getTituloPlanTexto().eq(0).then(titulo => {
            softExpect(titulo).to.have.css('font-size', conocerMiPlan.getTituloPlanTextoFontSize());
            softExpect(titulo).to.have.css('font-weight', conocerMiPlan.getTituloPlanTextoFontWeight());
            softExpect(titulo).to.have.css('font-style', conocerMiPlan.getTituloPlanTextoFontStyle());
            softExpect(titulo).to.have.css('font-family', conocerMiPlan.getTituloPlanTextoFontFamily());
            softExpect(titulo).to.have.css('color', conocerMiPlan.getTituloPlanTextoColor());
        });

        cy.log('*Que contenga texto de descripcion y los estilos correctos*')
        conocerMiPlan.getDescripcionPlanTexto().eq(0).then(descripcion => {
            softExpect(descripcion).to.have.css('font-size', conocerMiPlan.getDescripcionPlanTextoFontSize())
            softExpect(descripcion).to.have.css('font-weight', conocerMiPlan.getDescripcionPlanTextoFontWeight())
            softExpect(descripcion).to.have.css('font-style', conocerMiPlan.getDescripcionPlanTextoFontStyle())
            softExpect(descripcion).to.have.css('font-family', conocerMiPlan.getDescripcionPlanTextoFontFamily())
            softExpect(descripcion).to.have.css('color', conocerMiPlan.getDescripcionPlanTextoColor())
        })


        cy.log('*Que contenga boton ver grilla de canales y los estilos correctos*')
        conocerMiPlan.getGrillaCanales()
            .then(linea => {
                //softExpect(linea).to.have.css('font-size', conocerMiPlan.getGrillaCanalesBotonTextoFontSize())
            })

        cy.log('*Que contenga texto ver grilla de canales y los estilos correctos*')
        conocerMiPlan.getGrillaCanalesBotonTexto()
            .should('contain', conocerMiPlan.getGrillaCanalesBotonTextoVerGrilla())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', conocerMiPlan.getGrillaCanalesBotonTextoFontSize())
                softExpect(texto).to.have.css('font-weight', conocerMiPlan.getGrillaCanalesBotonTextoFontWeight())
                softExpect(texto).to.have.css('font-style', conocerMiPlan.getGrillaCanalesBotonTextoFontStyle())
                softExpect(texto).to.have.css('color', conocerMiPlan.getGrillaCanalesBotonTextoColor())
            })

        cy.log('*Que contenga texto de los bullets y los estilos correctos*')
        conocerMiPlan.getBulletListTexto()
            .should('contain', conocerMiPlan.getBulletListTextoUno())
            .should('contain', conocerMiPlan.getBulletListTextoDos())
            .should('contain', conocerMiPlan.getBulletListTextoTres())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', conocerMiPlan.getBulletListTextoFontSize())
                softExpect(texto).to.have.css('font-weight', conocerMiPlan.getBulletListTextoFontWeight())
                softExpect(texto).to.have.css('font-style', conocerMiPlan.getBulletListTextoFontStyle())
                softExpect(texto).to.have.css('font-family', conocerMiPlan.getBulletListTextoFontFamily())
                softExpect(texto).to.have.css('color', conocerMiPlan.getBulletListTextoColor())
            })

        cy.log('*Que contenga texto No se muestran los packs Premium y los estilos correctos*')
        conocerMiPlan.getInfoParaUsuario().eq(1)
            .should('contain', conocerMiPlan.getIinfoParaUsuarioTexto())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', conocerMiPlan.getInfoParaUsuarioFontSize())
                softExpect(texto).to.have.css('font-weight', conocerMiPlan.getInfoParaUsuarioFontWeight())
                softExpect(texto).to.have.css('font-style', conocerMiPlan.getIinfoParaUsuarioFontStyle())
                softExpect(texto).to.have.css('color', conocerMiPlan.getIinfoParaUsuarioColor())
            })

        cy.log('*Que contenga el boton Conocer otros planes y los estilos correctos*')
        conocerMiPlan.getBoton()
            .then(boton => {
                softExpect(boton).to.have.css('border-radius', conocerMiPlan.getBotonBorderRadius())
                softExpect(boton).to.have.css('background-color', conocerMiPlan.getBotonBackGroundColor())
            })

        cy.log('*Que contenga el texto en el boton Conocer otros planes y los estilos correctos*')
        conocerMiPlan.getBotonTexto()
            .should('contain', conocerMiPlan.getBotonTextoQuiero())
            .then(texto => {
                softExpect(texto).to.have.css('font-size', conocerMiPlan.getBotonTextoFontSize())
                softExpect(texto).to.have.css('font-weight', conocerMiPlan.getBotonTextoFontWeight())
                softExpect(texto).to.have.css('font-style', conocerMiPlan.getBotonTextoFontStyle())
                softExpect(texto).to.have.css('color', conocerMiPlan.getBotonTextoColor())
            })
    }
}