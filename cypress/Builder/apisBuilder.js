export default class BuilderApis{
    
    constructor(){ }

    build(){ return this }

    getHeaders() { return this.headers }
    getEndpoint() { return this.endpoint }

    getBody(tipoLogin) { 
        if(tipoLogin == 'ani'){
            return this.bodyAni

        }else if (tipoLogin == 'mail'){
            return this.bodyMail

        }else if (tipoLogin == ''){
            return this.body
        }
    }

    perfilado(){
        this.headers = ""
        this.body = ""
        return this;
    }

    lineas(){
        this.headers = ""
        this.body = ""
        return this;
    }
    
    token_manager_keycloack(){
        this.endpoint = Cypress.env("endpointTokenManagerKeycloack")

        this.headers = {
            'client_id_api': 'token-api',
            'client_secret_api': 'ec651148ec25c22c778570e7540f2fa9',
            'client_credentials_api': 'client_credentials_api',
            'Cookie': '7f059b0c44d50b552f4a9b54de978e02=c1fb47c09b493c8c6a258050041dc000'
        }
        this.body = ""
        return this;
    }

    token_auth_acces(ani){
        this.endpoint = Cypress.env("endpointApiTokenAccesRefresh")

        this.bodyAni = {
            "grant_type": "password",
            "scope": "openid profile offline_access",
            "username": ani,
            "password": ani,
            "client_id": "miMovistarweb"
        }
        this.bodyMail = {
            "grant_type": "password",
            "scope": "openid profile offline_access",
            "username": "offlinesessions_charger",
            "password": "Q1w2e3r4",
            "client_id": "miMovistarweb"
        }
        return this;
    }

}