export default class DatosClientes {
    constructor() { }

    build() { return this }

    getGenero() { return this.genero }
    getDocumentType() { return this.tipoDoc }
    getDni() { return this.dni }
    getAni() { return this.ani }
    getContactId() { return this.contactId }
    getHeaders() { return this.headersTokenAuth }


    convergente() {
        this.ani                  = '1142389256'

        this.aniFijo              = '1142389256'
        this.aniPlanFijo          = 'Linea Fíja'
        this.aniMobile            = '1136505889';
        this.aniPlanMobile        = 'mobile_postpaid';
        this.aniMobile2           = '1128494738';
        this.aniPlanMobile2       = 'mobile_postpaid';
        this.aniInternetConMtv    = '5008697257';
        this.aniPlanInternet      = 'internet'
        //Datos del cliente
        this.genero               = 'female'
        this.tipoDoc              = 'DNI'
        this.dni                  = '17746155'
        this.contactId            = '37267268'
        this.email                = 'rosana.dalpra11@gmail.com';
        this.pass                 = '';
        return this;
    }

    convergente2() {
        this.ani                  = '1146254066'

        this.aniFijo              = '1146254066';
        this.aniPlanFijo          = 'Línea Fija';
        this.aniInternetConMtv    = '5272914032';
        this.aniPlanInternet      = 'Plan Movistar Fibra 500Mb';
        this.aniPlanMtv           = 'Movistar  TV Digital Combo+'
        //Datos del cliente
        this.genero               = 'male'
        this.tipoDoc              = 'DNI'
        this.dni                  = '45735121'
        this.contactId            = '288976084'
        this.email                = 'lucasmr760@gmail.com';
        this.pass                 = '';
        return this;
    }
}