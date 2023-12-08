export default class statusResponse{

    constructor(){}

    statusOk(response, mensaje){
        expect([200,201,202,203,204,205,206]).to.contain(response.status, mensaje)
    }

}