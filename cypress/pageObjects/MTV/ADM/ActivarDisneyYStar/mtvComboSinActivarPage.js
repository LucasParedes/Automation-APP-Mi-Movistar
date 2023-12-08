import ColorsData from '../../../Color/colorDataPage'
const colorData                                 = new ColorsData();

export default class MtvComboSinActivar {
    
    //Que contenga el icono
    iconoAlert                                  = 'svg'

    //Titulo informativo
    titulo                                      = '.f1ci0fgf'
    tituloMarginBottom                          = '16px'
    tituloMarginTop                             = '20px'
    tituloMarginLeft                            = '16px'
    //texto del titulo
    tituloTexto                                 = '.f1x8cpur'
    tituloTextoMobile                           = '.ftqsp9r'
    tituloTextoValor                            = 'Activá tu cuenta en Disney+ y Star+'
    tituloTextoDescripcionFontSize              = '16px'
    tituloTextoDescripcionFontSizeMobile        = '18px'
    tituloTextoDescripcionFontStyle             = 'normal'
    tituloTextoDescripcionFontWeight            = '500'
    tituloTextoDescripcionColor                 = colorData.getGrey0()

    //Descripcion informativa
    descripcion                                 = '.fvg4xc6'
    descripcionTexto                            = 'Creá tu cuenta en Star+. Si ya tenés una, usala para ingresar.Usa el mismo usuario y contraseña de tu cuenta Star+ para Disney+.'
    descripcionTextofontsize                    = '14px'
    descripcionTextofontstyle                   = 'normal'
    descripcionTextofontweight                  = '500'
    descripcionTextocolor                       = colorData.getGrey0()
    descripcionTextoLineHeight                  = '20.02px'
    descripcionTextoMargin                      = '2px 0px 0px 8px'

    //Botones 
    seccionBotones                              = '.f1l4bex5'

    //Boton Principal
    botonPrincipal                              = '.f1mibvjw.f412tnx'
    botonPrincipalBackGroundColor               = colorData.getMovistarGreen()
    botonPrincipalBorder                        = '0px none rgb(0, 0, 0)'
    botonPrincipalBorderRadius                  = '4px'
    botonPrincipalHeight                        = '48px'
    botonPrincipalJustifyContent                = 'center'
    botonPrincipalAlignItems                    = 'center'

    botonPrincipalTexto                         = '.fj4bzi8'
    botonPrincipalTextoValor                    = 'Activar mi cuenta'
    botonPrincipalTextoDescipcionFontSize       = '16px'
    botonPrincipalTextoDescipcionFontStyle      = 'normal'
    botonPrincipalTextoDescipcionFontWeight     = '500'
    botonPrincipalTextoDescipcioncolor          = colorData.getWhite()
    botonPrincipalTextoDescripcionLineHeight    = '24px'
    botonPrincipalTextoDescripcionTextAlign     = 'center';
    

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

    getDescripcion                                     (){ return cy.get(this.descripcion)                          }                     


    getSeccionBotones                                  (){ return cy.get(this.seccionBotones)                        }
    getBotonPrincipal                                  (){ return cy.get(this.botonPrincipal)                        }
    getBotonPrincipalTexto                             (){ return cy.get(this.botonPrincipalTexto)                   }
    // Métodos de las caracteristicas
    getTituloMarginBottom                              (){ return this.tituloMarginBottom                            }
    getTituloMarginTop                                 (){ return this.tituloMarginTop                               }
    getTituloMarginLeft                                (){ return this.tituloMarginLeft                              }
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
    getDescripcionTextoLineHeight                      (){ return this.descripcionTextoLineHeight                    }
    getDescripcionTextoLineMargin                      (){ return this.descripcionTextoMargin                        }

    getBotonPrincipalBackGroundColor                   (){ return this.botonPrincipalBackGroundColor                 }
    getBotonPrincipalBorderRadius                      (){ return this.botonPrincipalBorderRadius                    }
    getBotonPrincipalBorder                            (){ return this.botonPrincipalBorder                          }
    getBotonPrincipalHeight                            (){ return this.botonPrincipalHeight                          }
    getBotonPrincipalJustifyContent                    (){ return this.botonPrincipalJustifyContent                  }
    getBotonPrincipalAlignItems                        (){ return this.botonPrincipalAlignItems                      }

    getBotonPrincipalTextoValor                        (){ return this.botonPrincipalTextoValor                      }
    getBotonPrincipalTextoDescipcionFontSize           (){ return this.botonPrincipalTextoDescipcionFontSize         }
    getBotonPrincipalTextoDescipcionFontStyle          (){ return this.botonPrincipalTextoDescipcionFontStyle        }
    getBotonPrincipalTextoDescipcionFontWeight         (){ return this.botonPrincipalTextoDescipcionFontWeight       }
    getBotonPrincipalTextoDescipcioncolor              (){ return this.botonPrincipalTextoDescipcioncolor            }
    getBotonPrincipalTextoDescripcionLineHeight        (){ return this.botonPrincipalTextoDescripcionLineHeight      }
    getBotonPrincipalTextoDescripcionTextAlign         (){ return this.botonPrincipalTextoDescripcionTextAlign       }

}