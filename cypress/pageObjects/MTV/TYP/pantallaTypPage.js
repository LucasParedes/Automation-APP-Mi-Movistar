import ColorsData from '../../Color/colorDataPage'
const colorData                               = new ColorsData();

export default class PantallaTyp {
    
    //Que contenga el icono
    iconoAlert                                = 'svg'

    //Background
    contenedor                                = '.desktop-wrapper_childrenContainer__3bW_B'
    contenedorBackgroundColor                 = colorData.getWhite()
    contenedorBackgroundColorMobile           = colorData.getMovistarBlue()

    //texto del titulo
    tituloTexto                               = '.f1osd7s7'
    tituloTextoMobile                         = '.f1bs2ql3'
    tituloTextoDescripcionFontFamily          = 'Roboto'
    tituloTextoDescripcionFontSize            = '24px'
    tituloTextoDescripcionFontStyle           = 'normal'
    tituloTextoDescripcionFontWeight          = '300'
    tituloTextoDescripcionColor               = colorData.getGrey0()
    tituloTextoDescripcionColorMobile         = colorData.getWhite()

    //Descripcion informativa
    descripcion                               = '.f1qsusql'
    descripcionMobile                         = '.fivelb3'
    descripcionTextoFontSize                  = '18px'
    descripcionTextoFontStyle                 = 'normal'
    descripcionTextoFontWeight                = '300'
    descripcionTextoColor                     = colorData.getGrey1()
    descripcionTextoColorMobile               = colorData.getWhite()

    //Botones 
    seccionBotones                            = '.f1l4bex5'

    //Boton Principal
    botonPrincipal                            = '.f1mibvjw.f1ek2a9i'
    botonPrincipalUnBoton                     = '.f1mibvjw'
    botonPrincipalBorder                      = 'none'
    botonPrincipalBorderRadius                = '4px'
    botonPrincipalBackGroundColor             = colorData.getMovistarGreen()
    botonPrincipalBackGroundColorMobile       = colorData.getWhite()

    botonPrincipalTexto                       = '.fj4bzi8'
    botonPrincipalTextoMobile                 = '.f157kkjx'
    botonPrincipalTextoDescipcionFontSize     = '16px'
    botonPrincipalTextoDescipcionFontStyle    = 'normal'
    botonPrincipalTextoDescipcionFontWeight   = '500'
    botonPrincipalTextoDescipcionColor        = colorData.getWhite();
    botonPrincipalTextoDescipcionColorMobile  = colorData.getMovistarBlue();

    //Boton Secundario
    //FALTA
    botonSecundario                           = '.f1mibvjw.f1lvgk8j'
    botonSecundarioMobile                     = '.f1mibvjw.f1lvgk8j.fbvyh12'
    botonSecundarioBorder                     = 'solid 1.5px'
    botonSecundarioBorderColor                = colorData.getMovistarGreen()
    botonSecundarioBorderColorMobile          = colorData.getWhite()
    botonSecundarioBorderRadius               = '4px'
    botonSecundarioBackGroundColor            = colorData.getTransparente2()

    botonSecundarioTexto                      = '.f1jzwu9'
    botonSecundarioTextoMobile                = '.fj4bzi8'
    botonSecundarioTextoFontFamily            = 'Roboto'
    botonSecundarioTextoFontSize              = '16px'
    botonSecundarioTextoFontStyle             = 'normal'
    botonSecundarioTextoFontWeight            = '500'
    botonSecundarioTextoColorMobile           = colorData.getWhite();
    botonSecundarioTextoColor                 = colorData.getMovistarGreen();



    // Métodos  de las clases html de los objetos
    getIconoAlert                                      (){ return cy.get(this.iconoAlert)                            }
    getContenedor                                      (){ return cy.get(this.contenedor)                            } 
    getTituloTexto                                     (){ return cy.get(this.tituloTexto)                           }
    getTituloTextoMobile                               (){ return cy.get(this.tituloTextoMobile)                     }
    getDescripcion                                     (){ return cy.get(this.descripcion)                           }
    getDescripcionMobile                               (){ return cy.get(this.descripcionMobile)                     }
    getSeccionBotones                                  (){ return cy.get(this.seccionBotones)                        }
    getBotonPrincipal                                  (){ return cy.get(this.botonPrincipal)                        }
    getBotonPrincipalUnBoton                           (){ return cy.get(this.botonPrincipalUnBoton)                 }
    getBotonPrincipalTexto                             (){ return cy.get(this.botonPrincipalTexto)                   }
    getBotonPrincipalTextoMobile                       (){ return cy.get(this.botonPrincipalTextoMobile)             }
    getBotonSecundarioTexto                            (){ return cy.get(this.botonSecundarioTexto)                  }
    getBotonSecundario                                 (){ return cy.get(this.botonSecundario)                       }
    getBotonSecundarioMobile                           (){ return cy.get(this.botonSecundarioMobile)                 }
    getBotonSecundarioTextoMobile                      (){ return cy.get(this.botonSecundarioTextoMobile)            }

    // Métodos de las caracteristicas
    getContenedorBackgroundColor                       (){ return this.contenedorBackgroundColor                     }
    getContenedorBackgroundColorMobile                 (){ return this.contenedorBackgroundColorMobile               }
    
    getTituloTextoDescripcion                          (){ return this.tituloTextoDescripcion                        }
    getTituloTextoDescripcionFontFamily                (){ return this.tituloTextoDescripcionFontFamily              }
    getTituloTextoDescripcionFontSize                  (){ return this.tituloTextoDescripcionFontSize                }
    getTituloTextoDescripcionFontStyle                 (){ return this.tituloTextoDescripcionFontStyle               }
    getTituloTextoDescripcionFontWeight                (){ return this.tituloTextoDescripcionFontWeight              }
    getTituloTextoDescripcionColor                     (){ return this.tituloTextoDescripcionColor                   }
    getTituloTextoDescripcionColorMobile               (){ return this.tituloTextoDescripcionColorMobile             }

    getDescripcionTexto                                (){ return this.descripcionTexto                              }
    getDescripcionTextoFontSize                        (){ return this.descripcionTextoFontSize                      }
    getDescripcionTextoFontStyle                       (){ return this.descripcionTextoFontStyle                     }
    getDescripcionTextoFontWeight                      (){ return this.descripcionTextoFontWeight                    }
    getDescripcionTextoColor                           (){ return this.descripcionTextoColor                         }
    getDescripcionTextoColorMobile                     (){ return this.descripcionTextoColorMobile                   }

    getBotonPrincipalBorderRadius                      (){ return this.botonPrincipalBorderRadius                    }
    getBotonPrincipalBackGroundColor                   (){ return this.botonPrincipalBackGroundColor                 }
    getBotonPrincipalBackGroundColorMobile             (){ return this.botonPrincipalBackGroundColorMobile           }

    getBotonPrincipalTextoDescipcion                   (){ return this.botonPrincipalTextoDescipcion                 }
    getBotonPrincipalTextoDescipcionFontSize           (){ return this.botonPrincipalTextoDescipcionFontSize         }
    getBotonPrincipalTextoDescipcionFontStyle          (){ return this.botonPrincipalTextoDescipcionFontStyle        }
    getBotonPrincipalTextoDescipcionFontWeight         (){ return this.botonPrincipalTextoDescipcionFontWeight       }
    getBotonPrincipalTextoDescipcionColor              (){ return this.botonPrincipalTextoDescipcionColor            }
    getBotonPrincipalTextoDescipcioncolorMobile        (){ return this.botonPrincipalTextoDescipcionColorMobile      }

    getBotonSecundarioBorder                           (){ return this.botonSecundarioBorder                         }
    getBotonSecundarioBorderColor                      (){ return this.botonSecundarioBorderColor                    }
    getBotonSecundarioBorderColorMobile                (){ return this.botonSecundarioBorderColorMobile              }
    getBotonSecundarioBorderRadius                     (){ return this.botonSecundarioBorderRadius                   }
    getBotonSecundarioBackGroundColor                  (){ return this.botonSecundarioBackGroundColor                }

    getBotonSecundarioTextoFontFamily                  (){ return this.botonSecundarioTextoFontFamily                }
    getBotonSecundarioTextoFontSize                    (){ return this.botonSecundarioTextoFontSize                  }
    getBotonSecundarioTextoFontStyle                   (){ return this.botonSecundarioTextoFontStyle                 }
    getBotonSecundarioTextoFontWeight                  (){ return this.botonSecundarioTextoFontWeight                }
    getBotonSecundarioTextoColorMobile                 (){ return this.botonSecundarioTextoColorMobile               }
    getBotonSecundarioTextoColor                       (){ return this.botonSecundarioTextoColor                     }
    
}