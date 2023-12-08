const { softAssert, softExpect } = chai;
import DatosClientes from '../../../../Builder/datosClientesBuilder';
import Url from '../../../../Builder/urlBuilder';
import GrillaPlanesPage from '../../../../pageObjects/MTV/GrillaPlanes/mtvGrillaPlanesPage';
import TypDosBotones from '../../../../pageObjects/MTV/TYP/pantallaTypPage'
import TypDosBotonesTextos from '../../../../pageObjects/MTV/TYP/typConDosBotonesPage'
import PreciosMtvBuilder from '../../../../Builder/preciosMtvBuilder';
import CambioDePlanMtv from '../../../../pageObjects/MTV/CambioDePlan/mtvCambioDePlanPage';
import Resumen from '../../../../pageObjects/MTV/mtvPantallaResumenPage'

const urlAmbiente = Cypress.env('urlMiMovistar')
const entryPointName = 'Movistar TV'

describe('CambioPlanMtv_logeo.IDP -producto.Internet -planOrigen.ConCombo -planDestino.SinCombo.', () => {
    const url = new Url().urlMtv().build()
    const datosClientes = new DatosClientes().convergente2(urlAmbiente).build()
    const grillaPlanes = new GrillaPlanesPage()
    const typDosBotones = new TypDosBotones()
    const typDosBotonesTextos = new TypDosBotonesTextos()
    const preciosBuilder = new PreciosMtvBuilder()
    const cambioDePlanMtv = new CambioDePlanMtv()
    const resumen = new Resumen()

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
        grillaPlanes.getChipTexto().should('be.visible').contains(grillaPlanes.getChipTextoTvMax()).click();
        // Se valida el precio del plan a seleccionar
        grillaPlanes.getValor().invoke('text').should('equal', preciosBuilder.precioPlanes('grilla').max)
        grillaPlanes.getBoton().click()

        cy.wait(3000)

        //Cambio de plan
        cy.url().should('eq', urlAmbiente + url.pantallaCambioDePlan)
        // Se valida el plan que tiene el cliente
        cambioDePlanMtv.getPlanActualTexto().invoke('text').should('eq', cambioDePlanMtv.getPlanActualTextoValor()+datosClientes.aniPlanMtv);
        // Se valida el plan que cambia el cliente
        cambioDePlanMtv.getPlanDestinoTexto().invoke('text').should('include','TV Max');
        // Se valida el precio del plan seleccionado
        cambioDePlanMtv.getPlanDestinoPrecio().invoke('text').should('equal', preciosBuilder.precioPlanes('cplan').max)
        // Se valida que exista que perdes el combo
        cambioDePlanMtv.getMensajePerderComboRecuadroPrincipal().should('be.exist')
        cambioDePlanMtv.getBotonPrincipal().click() // BOTON CAMBIAR DE PLAN

        //Se corren validaciones de negocio de CP
        cy.url().should('eq', urlAmbiente + url.validacionesNegocioCP)
        cy.wait(3000)

        //Resumen
        cy.url().should('eq', urlAmbiente + url.pantallaResumen)
        // Se valida el precio del plan seleccionado
        resumen.getMontoTotal().invoke('text').should('equal', preciosBuilder.precioPlanes('resumen').max)

        //Typ Dos Botones
        cy.visit(urlAmbiente + url.thankyoupage)
        typDosBotones.getTituloTexto().should('have.text', typDosBotonesTextos.getTituloTexto() + 'TV Max')
        typDosBotones.getDescripcion().should('have.text', typDosBotonesTextos.getDescripcionTexto())
        typDosBotones.getBotonPrincipalTexto().should('have.text', typDosBotonesTextos.getBotonPrincipal())
        typDosBotones.getBotonSecundarioTexto().should('have.text', typDosBotonesTextos.getBotonSecundario())

        //Validar todo el session storage que se cargo en la contratación
        cy.validarSessionStorageMTV('cplan')
    })
})





