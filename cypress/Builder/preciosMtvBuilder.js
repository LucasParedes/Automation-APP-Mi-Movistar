
export default class PreciosMtvBuilder {

    constructor() { }

    build() {
        return this
    }

    // Precios de Planes en la Grilla
    precioPlanes(ruta) {
        if(ruta === 'grilla'){
            this.digitalCombo = "$4690,00";
            this.max = "$7590,00";
            this.maxCombo = "$8550,00";
            this.digital = "$3290,00"
        } else {
            this.digitalCombo = "$4.690,00";
            this.max = "$7.590,00";
            this.maxCombo = "$8.550,00";
            this.digital = "$3.290,00"
        }
        return this;
    }

    // Precio de los Decodificadores
    precioDecos(ruta) {
        if(ruta === 'deco'){
            this.uno = "$1.400";
            this.dos = "$2.800";
            this.tres = "$4.200";
        } else {
            this.uno = "$1.400,00";
            this.dos = "$2.800,00";
            this.tres = "$4.200,00";
        }
        return this;
    }

    // Precio de los packs
    precioPacks(ruta) {
        if(ruta === 'packs'){
            this.futbol = "$2.800";
            this.hbo = "$1.215";
            this.prime = "$702";
            this.paramount = "$299";
        } else {
            this.futbol = "$2.800,10";
            this.hbo = "$1.215,00";
            this.prime = "$702,00";
            this.paramount = "$299,00";
        }
        return this;
    }
}
