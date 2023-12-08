import CambioDePlanMtv from '../../../pageObjects/MTV/CambioDePlan/mtvCambioDePlanPage'
import NavBar from '../../../pageObjects/NavBar/navBarMtvPage';
const { softAssert, softExpect } = chai;

const cambioDePlanMtv = new CambioDePlanMtv()
const navBar = new NavBar()


//Libreria snap(lo que son colores) y por codigo(que pueda generar error) fuentes cursivas negrita (porpiedades por textos)

module.exports = {
    
    validacionNavBar: function (width) {
        cy.log('*Que contenga el navbar  y los estilos correctos*')
        navBar.getTituloMtv(width)
            .should('contain', navBar.getTituloCambioPlan())
            .then(navbar => {
                softExpect(navbar).to.have.css('font-size', navBar.getTituloFontSize())
                softExpect(navbar).to.have.css('font-style', navBar.getTituloFontStyle())
                softExpect(navbar).to.have.css('font-weight', navBar.getTituloFontWeight())
                softExpect(navbar).to.have.css('color', navBar.getTituloColor(width))
            })
    },
    validacionPantallaCambioPlan: function () {

    }
}