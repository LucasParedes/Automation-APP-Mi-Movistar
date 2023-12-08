const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import PreciosMtvBuilder from '../../../../Builder/preciosMtvBuilder';
import CambioDePlanMtv from '../../../../pageObjects/MTV/CambioDePlan/mtvCambioDePlanPage';
import ConocerMiPlanPage from '../../../../pageObjects/MTV/ADM/ConocerMiPlan/mtvConocerMiPlanPage';

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('VerMiPlanActual_CambioPlan -logeo.IDP -producto.Internet -líneaConMtv.Si -plan.DigitalCombo.', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const preciosBuilder = new PreciosMtvBuilder()
    const cambioDePlanMtv = new CambioDePlanMtv()
    const conocerMiPlanPage = new ConocerMiPlanPage()

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginIdp(urlAmbiente, datosClientes.email, datosClientes.pass)
        cy.wait(2000)
        cy.lineaEnContexto(datosClientes.aniInternetConMtv)
        cy.irAFlujo(entryPointName)
    })
    it('Cambio de plan de MTV a otro Combo+', { tags: ['regresion', 'mtv', 'mtvFlujo'] }, () => {
        //Grilla de Planes
        cy.url().should('eq', urlAmbiente + url.pantallaGrillaPlanes)
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMaxCombo()).click();
        // Se valida el precio del plan a seleccionar
        grillaPlanes.getValor().invoke('text').should('equal', preciosBuilder.precioPlanes('grilla').maxCombo)
        grillaPlanes.getBoton().click()

        cy.wait(3000)

        //Cambio de plan
        cy.url().should('eq', urlAmbiente + url.pantallaCambioDePlan)
        // Se valida el plan que tiene el cliente
        cambioDePlanMtv.getPlanActualTexto().invoke('text').should('eq', cambioDePlanMtv.getPlanActualTextoValor()+datosClientes.aniPlanMtv);
        // Se valida el plan que cambia el cliente
        cambioDePlanMtv.getPlanDestinoTexto().invoke('text').should('include','TV Max Combo+');
        // Se valida el precio del plan seleccionado
        cambioDePlanMtv.getPlanDestinoPrecio().invoke('text').should('equal', preciosBuilder.precioPlanes('cplan').maxCombo)
        // Se valida que no exista que perdes el combo
        cambioDePlanMtv.getMensajePerderComboRecuadroPrincipal().should('not.exist')
        
        cambioDePlanMtv.getLinkPlanActualRecuadro().click()

        cy.url().should('eq', urlAmbiente + url.conocerMiPlanActual)
        conocerMiPlanPage.getTituloPlanTexto(1360).should('contain', conocerMiPlanPage.getTituloPLanTextoTvDigiCP())
    })
})





