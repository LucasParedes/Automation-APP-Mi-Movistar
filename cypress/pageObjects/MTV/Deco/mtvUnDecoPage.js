import ColorsData from "../../Color/colorDataPage";
const colorData                         = new ColorsData();

export default class UnDeco {
    
    imagen                              = 'svg'

    recuadroDescripcion                 = '.fgtfse'

    descripcion                         = '.f12rzdkf'
    descripcionTexto                    = 'Una vez que hayas confirmado tu pedido, vamos a entregar tu deco al domicilio de tu servicio de Internet Fibra dentro los próximos 7 días hábiles.'
    descripcionTextoFontSize            = '18px'
    descripcionTextoFontWeight          = '300'
    descripcionTextoFontStyle           = 'normal'
    descripcionTextoColor               = colorData.getGrey0()

    //Boton Continuar
    botonContinuar                      = '.f1mibvjw.fez964e'
    botonContinuarBorderRadius          = '4px'
    botonContinuarBackgroundColor       = colorData.getMovistarGreen()
    
    botonContinuarTexto                 = '.fj4bzi8'
    botonContinuarDescripcion           = 'Continuar'
    botonContinuarDescripcionFontSize   = '16px'
    botonContinuarDescripcionFontWeight = '500'
    botonContinuarDescripcionFontStyle  = 'normal'
    botonContinuarDescripcionColor      = colorData.getWhite()


    getImagen                                     (){ return cy.get(this.imagen)                         }
    getRecuadroDescripcion                        (){ return cy.get(this.recuadroDescripcion)            }
    getDescripcion                                (){ return cy.get(this.descripcion)                    }
    getBotonContinuar                             (){ return cy.get(this.botonContinuar)                 }
    getBotonContinuarTexto                        (){ return cy.get(this.botonContinuarTexto)            }


    getDescripcionTexto                           (){ return this.descripcionTexto                       }
    getDescripcionTextoFontSize                   (){ return this.descripcionTextoFontSize               }
    getDescripcionTextoFontStyle                  (){ return this.descripcionTextoFontStyle              }
    getDescripcionTextoFontWeight                 (){ return this.descripcionTextoFontWeight             }
    getDescripcionTextoColor                      (){ return this.descripcionTextoColor                  }

    getBotonContinuarBorderRadius                 (){ return this.botonContinuarBorderRadius             }
    getBotonContinuarBackgroundColor              (){ return this.botonContinuarBackgroundColor          }

    getBotonContinuarDescripcion                  (){ return this.botonContinuarDescripcion              }
    getBotonContinuarDescripcionFontSize          (){ return this.botonContinuarDescripcionFontSize      }
    getBotonContinuarDescripcionFontStyle         (){ return this.botonContinuarDescripcionFontStyle     }
    getBotonContinuarDescripcionFontWeight        (){ return this.botonContinuarDescripcionFontWeight    }
    getBotonContinuarDescripcionColor             (){ return this.botonContinuarDescripcionColor         }
}