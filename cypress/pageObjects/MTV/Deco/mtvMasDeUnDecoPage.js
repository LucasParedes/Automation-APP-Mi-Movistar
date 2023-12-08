import ColorsData from "../../Color/colorDataPage";
const colorData                         = new ColorsData();


export default class MasDecos {
    
    //Seccion Titulo
    seccionTitulo                       = '.fgtfse'

    //Titulo Principal
    titulo                              = '.f12rzdkf'
    tituloTexto                         = 'Agregá una línea móvil para informarte la fecha de entrega de tus decos por SMS'
    tituloTextoFontSize                 = '18px'
    tituloTextoFontWeight               = '300'
    tituloTextoFontStyle                = 'normal'
    tituloTextoColor                    = colorData.getGrey0()

    //Recuadro done ingresar telefono
    recuadroTelefono                    = '.f1dqbj83'
    recuadroTelefonoBorderRadius        = '4px'
    recuadroTelefonoBorder              = 'solid 1px ' + colorData.getGrey3()
    recuadroTelefonoBackGroundColor     = colorData.getWhite()

    //Label desciptivo
    label                               = '.fkir1gb'
    labelError                          = '.fkir1gb.fh8pepj.f18opdue'
    labelTexto                          = 'Teléfono móvil'
    labelTextoFontSize                  = '12px'
    labelTextoFontWeight                = '400'
    labelTextoFontStyle                 = 'normal'
    labelFocusTextoColor                = colorData.getMovistarBlue()
    labelActivoTextoColor               = colorData.getGrey1()
    labelErrorTextoColor                = colorData.getPepper()

    //Prefijo del numero
    prefijoTelefono                     = '.f1yrwjfo'
    prefijoTelefonoTexto                = '+54'
    prefijoTelefonoTextoFontSize        = '16px'
    prefijoTelefonoTextoFontWeight      = '400'
    prefijoTelefonoTextoFontStyle       = 'normal'
    prefijoTelefonoTextoColor           = colorData.getGrey1()

    //Place Holder que se escribe
    placeHolder                         = '.fkir1gb'
    placeHolderTexto                    = 'Teléfono móvil'
    placeHolderTextoFontSize            = '16px'
    placeHolderTextoFontWeight          = '400'
    placeHolderTextoFontStyle           = 'normal'
    placeHolderTextoColor               = colorData.getGrey1()

    //INPUT
    input                               = '.f1mjpp6p'

    //Iconos
    iconoValido                         = 'svg'
    iconoNoValido                       = 'svg'

    //Texto ayuda como se debe ingresar o error
    textoAyuda                          = '.f134yflt'
    textoAyuda2                         = '.fiv52g5'
    textoAyudaComoIngresarlo            = 'Ingresalo con código de área, sin 0 ni 15.'
    textoAyudaError                     = 'Debe tener 10 dígitos, con código de área, sin 0 ni 15.'
    textoAyudaComoIngresarloFontSize    = '12px'
    textoAyudaComoIngresarloFontWeight  = '400'
    textoAyudaComoIngresarloFontStyle   = 'normal'
    textoAyudaComoIngresarloColor       = colorData.getGrey1()
    textoAyudaErrorColor                = colorData.getPepper()

    //Boton para agregar telefono
    botonInactivo                       = '.f1mibvjw'
    botonInactivoBorderRadius           = '4px'
    botonInactivoBackGroundColor        = colorData.getMovistarGreenLight50()

    botonActivo                         = '.f1mibvjw'
    botonActivoBorderRadius             = '4px'
    botonActivoBackGroundColor          = colorData.getMovistarGreen()

    //Texto del boton
    botonTexto                          = '.fj4bzi8'
    botonTextoAgregar                   = 'Agregar'
    botonTextoAgregarFontSize           = '16px'
    botonTextoAgregarFontStyle          = 'normal'
    botonTextoAgregarFontWeight         = '500'
    botonTextoAgregarColor              = colorData.getWhite()


    // Métodos  de las clases html de los objetos
    getseccionTitulo                           (){ return cy.get(this.seccionTitulo)                } 
    getTitulo                                  (){ return cy.get(this.titulo)                       } 
    getRecuadroTelefono                        (){ return cy.get(this.recuadroTelefono)             } 
    getLabel                                   (){ return cy.get(this.label)                        }
    getLabelError                              (){ return cy.get(this.labelError)                   }
    getPrefijoTelefono                         (){ return cy.get(this.prefijoTelefono)              } 
    getPlaceHolder                             (){ return cy.get(this.placeHolder)                  } 
    getIconoValido                             (){ return cy.get(this.iconoValido)                  } 
    getIconoNoValido                           (){ return cy.get(this.iconoNoValido)                } 
    getTextoAyuda                              (){ return cy.get(this.textoAyuda)                   } 
    getTextoAyuda2                             (){ return cy.get(this.textoAyuda2)                  }
    getBotonInactivo                           (){ return cy.get(this.botonInactivo)                } 
    getBotonActivo                             (){ return cy.get(this.botonActivo)                  } 
    getBotonTexto                              (){ return cy.get(this.botonTexto)                   }
    getInput                                   (){ return cy.get(this.input)                        }

    // Métodos de las caracteristicas
    getTituloTexto                             (){ return this.tituloTexto                          }
    getTituloTextoFontSize                     (){ return this.tituloTextoFontSize                  }
    getTituloTextoFontWeight                   (){ return this.tituloTextoFontWeight                }
    getTituloTextoFontStyle                    (){ return this.tituloTextoFontStyle                 }
    getTituloTextoColor                        (){ return this.tituloTextoColor                     }

    getRecuadroTelefonoBorderRadius            (){ return this.recuadroTelefonoBorderRadius         }
    getRecuadroTelefonoBorder                  (){ return this.recuadroTelefonoBorder               }
    getRecuadroTelefonoBackGroundColor         (){ return this.recuadroTelefonoBackGroundColor      }

    getLabelTexto                              (){ return this.labelTexto                           }
    getLabelTextoFontSize                      (){ return this.labelTextoFontSize                   }
    getLabelTextoFontWeight                    (){ return this.labelTextoFontWeight                 }
    getLabelTextoFontStyle                     (){ return this.labelTextoFontStyle                  }
    getLabelFocusTextoColor                    (){ return this.labelFocusTextoColor                 }
    getLabelActivoTextoColor                   (){ return this.labelActivoTextoColor                }
    getLabelErrorTextoColor                    (){ return this.labelErrorTextoColor                 }

    getPrefijoTelefonoTexto                    (){ return this.prefijoTelefonoTexto                 }
    getPrefijoTelefonoTextoFontSize            (){ return this.prefijoTelefonoTextoFontSize         }
    getPrefijoTelefonoTextoFontWeight          (){ return this.prefijoTelefonoTextoFontWeight       }
    getPrefijoTelefonoTextoFontStyle           (){ return this.prefijoTelefonoTextoFontStyle        }
    getPrefijoTelefonoTextoColor               (){ return this.prefijoTelefonoTextoColor            }

    getPlaceHolderTexto                        (){ return this.placeHolderTexto                     }
    getPlaceHolderTextoFontSize                (){ return this.placeHolderTextoFontSize             }
    getPlaceHolderTextoFontWeight              (){ return this.placeHolderTextoFontWeight           }
    getPlaceHolderTextoFontStyle               (){ return this.placeHolderTextoFontStyle            }
    getPlaceHolderTextoColor                   (){ return this.placeHolderTextoColor                }

    getTextoAyudaComoIngresarlo                (){ return this.textoAyudaComoIngresarlo             }
    getTextoAyudaError                         (){ return this.textoAyudaError                      }
    getTextoAyudaComoIngresarloFontSize        (){ return this.textoAyudaComoIngresarloFontSize     }
    getTextoAyudaComoIngresarloFontWeight      (){ return this.textoAyudaComoIngresarloFontWeight   }
    getTextoAyudaComoIngresarloFontStyle       (){ return this.textoAyudaComoIngresarloFontStyle    }
    getTextoAyudaComoIngresarloColor           (){ return this.textoAyudaComoIngresarloColor        }
    getTextoAyudaErrorColor                    (){ return this.textoAyudaErrorColor                 }

    getBotonInactivoBorderRadius               (){ return this.botonInactivoBorderRadius            }
    getBotonInactivoBackGroundColor            (){ return this.botonInactivoBackGroundColor         }
    getBotonActivoBorderRadius                 (){ return this.botonActivoBorderRadius              }
    getBotonActivoBackGroundColor              (){ return this.botonActivoBackGroundColor           }
    
    getBotonTextoAgregar                       (){ return this.botonTextoAgregar                    }
    getBotonTextoAgregarFontSize               (){ return this.botonTextoAgregarFontSize            }
    getBotonTextoAgregarFontWeight             (){ return this.botonTextoAgregarFontWeight          }
    getBotonTextoAgregarFontStyle              (){ return this.botonTextoAgregarFontStyle           }
    getBotonTextoAgregarColor                  (){ return this.botonTextoAgregarColor               }
    }   