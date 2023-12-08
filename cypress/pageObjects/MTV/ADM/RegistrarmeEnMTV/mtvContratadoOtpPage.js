import ColorsData from '../../../Color/colorDataPage'
const colorData                             = new ColorsData();

export default class MtvContratadoOtp {
    
    //Que contenga el icono
    iconoAlert                              = 'svg'

    //Titulo informativo
    titulo                                  = '.f1ci0fgf'
    tituloFontWeight                        = 'unset'
    //texto del titulo
    tituloTexto                             = '.f1x8cpur'
    tituloTextoMobile                       = '.ftqsp9r'
    tituloTextoValor                        = 'Ya contrataste Movistar TV'
    tituloTextoDescripcionFontSize          = '16px'
    tituloTextoDescripcionFontSizeMobile    = '18px'
    tituloTextoDescripcionFontStyle         = 'normal'
    tituloTextoDescripcionFontWeight        = '500'
    tituloTextoDescripcionColor             = colorData.getGrey0()

    //Descripcion informativa
    descripcion                             = '.f1afrtj8'
    descripcionMobile                       = '.f987nvo'
    descripcionTexto                        = 'Necesitás registrarte con tu email  para ingresar a tu cuenta.'
    descripcionTextofontsize                = '14px'
    descripcionTextofontstyle               = 'normal'
    descripcionTextofontweight              = '400'
    descripcionTextocolor                   = colorData.getGrey0()

    //Botones 
    seccionBotones                          = '.f1a0p51a'

    //Boton Principal
    botonPrincipal                          = '.f1mibvjw.f412tnx'
    botonPrincipalBackGroundColor           = colorData.getMovistarGreen()
    botonPrincipalBorder                    = '0px none rgb(0, 0, 0)'
    botonPrincipalBorderRadius              = '4px'

    botonPrincipalTexto                     = '.fj4bzi8'
    botonPrincipalTextoValor                = 'Registrarme'
    botonPrincipalTextoDescipcionFontSize   = '16px'
    botonPrincipalTextoDescipcionFontStyle  = 'normal'
    botonPrincipalTextoDescipcionFontWeight = '500'
    botonPrincipalTextoDescipcioncolor      = colorData.getWhite();

    // Métodos  de las clases html de los objetos
    getIconoAlert                                      (){ return cy.get(this.iconoAlert)                            }
    getTitulo                                          (){ return cy.get(this.titulo)                                }
    getTituloTexto(width)                                     
    { 
        if(width > 768){
            return cy.get(this.tituloTexto)
    }
        else{
            return cy.get(this.tituloTextoMobile)
    }                        
}

    getDescripcion(width)                                     
    { 
        if(width > 768){
            return cy.get(this.descripcion)
    }
        else{
            return cy.get(this.descripcionMobile)
    }                        
}

    getSeccionBotones                                  (){ return cy.get(this.seccionBotones)                        }
    getBotonPrincipal                                  (){ return cy.get(this.botonPrincipal)                        }
    getBotonPrincipalTexto                             (){ return cy.get(this.botonPrincipalTexto)                   }

    // Métodos de las caracteristicas
    getTituloFontWeight                                (){ return this.tituloFontWeight                              }
    getTituloTextoValor                                (){ return this.tituloTextoValor                              }
    getTituloTextoDescripcionFontSize(width)                  
    { 
        if(width > 768){
            return this.tituloTextoDescripcionFontSize
    }
        else{
            return this.tituloTextoDescripcionFontSizeMobile
        }                        
    }
    getTituloTextoDescripcionFontStyle                 (){ return this.tituloTextoDescripcionFontStyle               }
    getTituloTextoDescripcionFontWeight                (){ return this.tituloTextoDescripcionFontWeight              }
    getTituloTextoDescripcionColor                     (){ return this.tituloTextoDescripcionColor                   }

    getDescripcionTexto                                (){ return this.descripcionTexto                              }
    getDescripcionTextoFontSize                        (){ return this.descripcionTextofontsize                      }
    getDescripcionTextoFontStyle                       (){ return this.descripcionTextofontstyle                     }
    getDescripcionTextoFontWeight                      (){ return this.descripcionTextofontweight                    }
    getDescripcionTextoColor                           (){ return this.descripcionTextocolor                         }

    getBotonPrincipalBackGroundColor                   (){ return this.botonPrincipalBackGroundColor                 }
    getBotonPrincipalBorderRadius                      (){ return this.botonPrincipalBorderRadius                    }
    getBotonPrincipalBorder                            (){ return this.botonPrincipalBorder                          }

    getBotonPrincipalTextoValor                        (){ return this.botonPrincipalTextoValor                      }
    getBotonPrincipalTextoDescipcionFontSize           (){ return this.botonPrincipalTextoDescipcionFontSize         }
    getBotonPrincipalTextoDescipcionFontStyle          (){ return this.botonPrincipalTextoDescipcionFontStyle        }
    getBotonPrincipalTextoDescipcionFontWeight         (){ return this.botonPrincipalTextoDescipcionFontWeight       }
    getBotonPrincipalTextoDescipcioncolor              (){ return this.botonPrincipalTextoDescipcioncolor            }
}