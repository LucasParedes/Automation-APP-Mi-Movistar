/*
    En este documento se ingresaran las URL para que sean empleadas en los script de automatización.
    A priori en los Visuales
*/
export default class Url {

    build() {return this}
    
    urlMtv() {
        // Inicio de la APP
            this.pantallaDashboard                      = 'consumptions';
            this.pantallaServicios                      = 'consumptions/services';

        // Grilla de Planes
            this.pantallaGrillaPlanes                   = 'hard-bundle/grid-plans';

        // Distributiva de Lineas
            this.pantallaSeleccionDeLinea               = 'hard-bundle/select-lines';

        // Decos
            this.pantallaSeleccionDeco                  = 'hard-bundle/offer/deco';
            this.pantallaInfoDeco                       = 'hard-bundle/offer/deco/info';
            this.pantallaUnDeco                         = 'hard-bundle/offer/deco/delivery';
            this.pantallaMasDeDosDecos                  = 'hard-bundle/offer/deco/contact-ani';

        // Packs
            this.pantallaPacks                          = 'hard-bundle/offer/packs';

        // Preguntas OTP IDP
            this.pantallaIdentity                       = 'hard-bundle/validations/identity';
            this.pantallaIdentityFail                   = 'hard-bundle/validations/identity/fail';
            this.pantallaIdentityBlocked                = 'hard-bundle/validations/identity/blocked';
            this.pantallaIdentitySuccess                = 'hard-bundle/validations/identity/success';
        // IDP
            this.pantallaIdentityNumeroTramite          = 'hard-bundle/validations/identity/dni'
        // OTP
            this.pantallaIdentityQuestions              = 'hard-bundle/validations/identity/questions';
        
        // OTP SIN EMAIL
            this.pantallaRegistracionEmail              = 'hard-bundle/contact-email';

        // OTP CON MAIL/IDP
            this.pantallaResumen                        = 'hard-bundle/summary';

        // TYP
            this.thankyoupage                           = 'hard-bundle/subscription-success';

        // Cambio de plan
            this.pantallaCambioDePlan                   = 'hard-bundle/change-plan'

        // Administar mi Movistar TV
            this.pantallaAdministrar                    = 'hard-bundle/manage-accounts'
        // Conocer Mi Plan Actual
            this.conocerMiPlanActual                    = 'hard-bundle/know-plan'
        // Registrarme En Mtv
            this.mtvNoContratado                        = 'hard-bundle/validations/contract-mtv'
            this.mtvContratadoOtp                       = 'hard-bundle/validations/otp-mtv'
            this.mtvContratadoIdp                       = 'hard-bundle/validations/idp-mtv'
        // Activar disney y star+
            this.comboActivo                            = 'hard-bundle/manage-accounts/disney-handler?subscription=active'
            this.comboNoContratado                      = 'hard-bundle/manage-accounts/disney-handler?subscription=no-movistar-tv'
            this.comboSinActivar                        = 'hard-bundle/manage-accounts/disney-handler-pending?subscription=pending'

        return this;
    }
}