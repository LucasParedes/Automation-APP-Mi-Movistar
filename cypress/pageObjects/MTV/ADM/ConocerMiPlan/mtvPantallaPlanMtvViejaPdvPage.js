/*
    Esta es una pantalla de Informativa que se muesta cuendo el plan de MTV es viejo y no se puede obtener la información
*/
import ColorsData from '../../../Color/colorDataPage'
const colorData                             = new ColorsData();

export default class PantallaPlanMtvViejaPdv {

    //Que contenga el icono
    iconoAlert                              = 'svg'

    //Titulo informativo
    titulo                                  = '.unified-validation_title__2FkQU'
    tituloFontWeight                        = '400'

    //texto del titulo
    tituloTexto                             = '.f1osd7s7'
    tituloTextoDescripcionFontSize          = '24px'
    tituloTextoDescripcionFontStyle         = 'normal'
    tituloTextoDescripcionFontWeight        = '300'
    tituloTextoDescripcionColor             = colorData.getGrey0()

      //Descripcion informativa
    descripcion                             = 'fbu7btn'
    descripcionTextofontsize                = '18px'
    descripcionTextofontstyle               = 'normal'
    descripcionTextofontweight              = '300'
    descripcionTextocolor                   = colorData.getGrey1()
  
      //Botones 
    seccionBotones                          = '.foetobo'
  
      //Boton Principal
    botonPrincipal                          = '.f1mibvjw.fez964e'
    botonPrincipalBackGroundColor           = colorData.getMovistarGreen()
    botonPrincipalBorderRadius              = '4px'
    botonPrincipalBorder                    = 'none'
  
    botonPrincipalTexto                     = '.fj4bzi8'
    botonPrincipalTextoDescipcionFontSize   = '16px'
    botonPrincipalTextoDescipcionFontStyle  = 'normal'
    botonPrincipalTextoDescipcionFontWeight = '500'
    botonPrincipalTextoDescipcioncolor      = colorData.getWhite()
  
      // Métodos  de las clases html de los objetos
    getIconoAlert                                      (){ return cy.get(this.iconoAlert)                            }
    getTitulo                                          (){ return cy.get(this.titulo)                                }
    getTituloTexto                                     (){ return cy.get(this.tituloTexto)                           }
    getDescripcion                                     (){ return cy.get(this.descripcion)                           }
    getSeccionBotones                                  (){ return cy.get(this.seccionBotones)                        }
    getBotonPrincipalTexto                             (){ return cy.get(this.botonPrincipalTexto)                   }
    getBotonPrincipal                                  (){ return cy.get(this.botonPrincipal)                        }
  
      // Métodos de las caracteristicas
    getTituloFontWeight                                (){ return this.tituloFontWeight                              }
    getTituloTextoDescripcionFontSize                  (){ return this.tituloTextoDescripcionFontSize                }
    getTituloTextoDescripcionFontStyle                 (){ return this.tituloTextoDescripcionFontStyle               }
    getTituloTextoDescripcionFontWeight                (){ return this.tituloTextoDescripcionFontWeight              }
    getTituloTextoDescripcionColor                     (){ return this.tituloTextoDescripcionColor                   }
  
    getDescripcionTextoFontsize                        (){ return this.descripcionTextofontsize                      }
    getDescripcionTextoFontstyle                       (){ return this.descripcionTextofontstyle                     }
    getDescripcionTextoFontweight                      (){ return this.descripcionTextofontweight                    }
    getDescripcionTextocolor                           (){ return this.descripcionTextocolor                         }
  
    getBotonPrincipalBackGroundColor                   (){ return this.botonPrincipalBackGroundColor                 }
    getBotonPrincipalBorderRadius                      (){ return this.botonPrincipalBorderRadius                    }
    getBotonPrincipalBorder                            (){ return this.botonPrincipalBorder                          } 
  
    getBotonPrincipalTextoDescipcionFontSize           (){ return this.botonPrincipalTextoDescipcionFontSize         }
    getBotonPrincipalTextoDescipcionFontStyle          (){ return this.botonPrincipalTextoDescipcionFontStyle        }
    getBotonPrincipalTextoDescipcionFontWeight         (){ return this.botonPrincipalTextoDescipcionFontWeight       }
    getBotonPrincipalTextoDescipcioncolor              (){ return this.botonPrincipalTextoDescipcioncolor            }

}