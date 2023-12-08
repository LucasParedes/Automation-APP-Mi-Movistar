const { softAssert, softExpect } = chai;
import { beforeEach } from 'mocha';
import DatosClientes from '../../Builder/datosClientesBuilder'
import Url from '../../Builder/urlBuilder'
import LoginMock from './Apis/loginMock'

const ambiente = Cypress.env("urlMiMovistar")
const loginMock = new LoginMock()
const statusArray = [200, 202, 204, 308]

describe("Validar todas las rutas de ALTA DE MTV", () => {
    // Alta
    it('01- "ruta hard-bundle/grid-plans"', { tags: ['regresion', 'ruta'] }, function () {
        cy.log('**Se ejecutan las rutas para ALTA PURA**')
        let ruta = new Url().urlMtv().pantallaGrillaPlanes
        cy.intercept(`**${{ ruta }}**`).as('request')
        const usuario = new DatosClientes().convergente2() 
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'grid-plans')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('02- "ruta hard-bundle/offer/deco"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaSeleccionDeco
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'offer/deco')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('03- "ruta hard-bundle/offer/deco/info"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaInfoDeco
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'offer/deco/info')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('04- "ruta hard-bundle/offer/deco/delivery"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaUnDeco
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'offer/deco/delivery')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('05- "ruta hard-bundle/offer/deco/contact-ani"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaMasDeDosDecos
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'offer/deco/contact-ani')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('06- "ruta hard-bundle/offer/packs"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaPacks
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'offer/packs')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('07- "ruta hard-bundle/validations/identity"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaIdentity
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/identity')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('08- "ruta hard-bundle/validations/identity/dni IDP"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaIdentityNumeroTramite
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/identity/dni')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('09- "ruta hard-bundle/validations/identity/questions OTP"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaIdentityQuestions
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/identity/questions')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('10- "ruta hard-bundle/validations/identity/success"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaIdentitySuccess
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/identity/success')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('11- "ruta hard-bundle/contact-email"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().pantallaRegistracionEmail
        const usuario = new DatosClientes().convergente2()
        loginMock.getLoginMockMail(usuario, 'home')
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'contact-email')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });
})

describe("Validar todas las rutas de ADMINISTRAR DE MTV", () => {
    it('01- "ruta hard-bundle/manage-accounts"', { tags: ['regresion', 'ruta'] }, function () {
        cy.log('**Se ejecutan las rutas del flujo administrar**')
        let ruta = new Url().urlMtv().pantallaAdministrar
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'manage-accounts')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });
    it('02- "ruta hard-bundle/validations/contract-mtv"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().mtvNoContratado
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/contract-mtv')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });
    it('03- "ruta hard-bundle/validations/otp-mtv"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().mtvContratadoOtp
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/otp-mtv')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('04- "ruta hard-bundle/validations/idp-mtv"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().mtvContratadoIdp
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'validations/idp-mtv')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('05- "ruta hard-bundle/manage-accounts/disney-handler?subscription=active"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().comboActivo
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'disney-handler?subscription=active')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('06- "ruta hard-bundle/manage-accounts/disney-handler?subscription=no-movistar-tv"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().comboNoContratado
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'disney-handler?subscription=no-movistar-tv')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });

    it('07- "ruta hard-bundle/manage-accounts/disney-handler-pending?subscription=pending"', { tags: ['regresion', 'ruta'] }, function () {
        let ruta = new Url().urlMtv().comboSinActivar
        const usuario = new DatosClientes().convergente2()
        cy.intercept(`**${{ ruta }}**`).as('request')
        cy.loginIdp(ambiente, usuario.email, usuario.pass)
        cy.lineaEnContexto(usuario.aniInternetConMtv)
        cy.visit(ambiente + ruta)
        cy.url().should('include', 'disney-handler-pending?subscription=pending')
        cy.wait('@request').its('response.statusCode').then((status) => {
            cy.wrap(expect(statusArray).to.include(status))
        })
        cy.url().should('include', ruta)
    });
})


