import ColorsData from "../../../Color/colorDataPage";
const colorData                           = new ColorsData();


export default class AdministrarMtv {

    // RECUADRO DE ARRIBA DE NUEVOS PLANES DE MTV
    recuadroNuevosPlanes                  = 'div.feeg63g'
    recuadroNuevosPlanesBackGroundColor   = colorData.getWhite()
    recuadroNuevosPlanesBorder            = "1px Solid " + colorData.getGrey3()
    recuadroNuevosPlanesBorderRadius      = "8px"
    recuadroNuevosPlanesMargin            = '8px auto'

    // TEXTO DENTRO DEL RECUADRO
    recuadroValorTexto                    = '.fahh4vp'
    recuadroTexto                         = 'Tenés '
    recuadroTextoFontSize                 = '14px'
    recuadroTextoFontStyle                = 'normal'
    recuadroTextoFontWeight               = '400'
    recuadroTextoFontFamily               = 'Roboto'
    recuadroTextoColor                    = colorData.getGrey1()

    // Boton Ver mi plan actual
    boton                                 = '.f1mibvjw.fy4hndo'
    botonValorTexto                       = '.f1f023gr'
    botonTexto                            = 'Ver mi plan actual'
    botonTextoFontFamily                  = 'Roboto'
    botonTextoFontSize                    = '14px'
    botonTextoFontWeight                  = '500'
    botonTextoFontStyle                   = 'normal'
    botonTextoTextAlign                   = 'center'
    botonTextoColor                       = colorData.getMovistarBlue()

    // Titulo Administrá Tus cuentas
    titulo                                = '.f12rzdkf'
    tituloTexto                           = 'Administrá tus cuentas'
    tituloTextoFontSize                   = '18px'
    tituloTextoFontStyle                  = 'normal'
    tituloTextoFontWeight                 = '300'
    tituloTextoFontFamily                 = 'Roboto'
    tituloTextoColor                      = colorData.getGrey0()

    // RECUADROS ACTIVAR DISNEY Y REGISTRARME EN MTV

    recuadrosGestion                      = '.f9fmg4o' //Clase de ACTIVAR DISNEY Y REGISTRARME EN MTV
    recuadrosGestionBackgroundColor       = colorData.getWhite()
    recuadrosGestionBorder                = '1px Solid' + colorData.getGrey3()
    recuadrosGestionBorderRadius          = '4px'
    recuadrosGestionDisplay               = 'flex'

    // TEXTO DENTRO DE RECUADRO
    recuadrosGestionValor                 = '.fodlaap'
    recuadrosGestionTexto1                = 'Activar Disney+ y Star+'
    recuadrosGestionTexto2                = 'Registrarme en Movistar TV'
    recuadrosGestionTextoFontSize         = '16px'
    recuadrosGestionTextoFontStyle        = 'normal'
    recuadrosGestionTextoFontWeight       = '400'
    recuadrosGestionTextoFontFamily       = 'Roboto'
    recuadrosGestionTextoColor            = colorData.getGrey0()

    // Flecha derecha - final del recuadro 
    flechaDerecha                         = '.f1n12jho'

    // Linea De División 
    lineaDivisoria                        = '.f1rllc9o'
    lineaDivisoriaBakgroundColor          = colorData.getGrey5()


    // Info para el usuario (final de pagina)
    seccionesInfo                         = '.f1glqn9j'
    seccionesInfoAlignItems               = 'center'
    seccionesInfoPadding                  = '0px 8px 0px 16px'
    seccionesInfoHeight                   = '64px'
    seccionesInfoDisplay                  = 'flex'

    // Textos de la info para los usuario
    seccionesInfoValor                    = '.fodlaap'
    seccionesInfoValorTexto1              = 'Ver planes de Movistar TV'
    seccionesInfoValorTexto2              = 'Preguntas frecuentes'
    seccionesInfoValorTexto3              = 'Dar de baja mi servicio'
    seccionesInfoValorTextoFontFamily     = 'Roboto'
    seccionesInfoValorTextoFontSize       = '16px'
    seccionesInfoValorTextoFontStyle      = 'normal'
    seccionesInfoValorTextoFontWeight     = '400'
    seccionesInfoValorTextoColor          = colorData.getGrey0()
    // Linea de Separacion entre cada uno
    lineaSeparacion                       = '.f77qmqm'
    lineaSeparacionBackgroundColor        = colorData.getGrey4()
    lineaSeparacionHeight                 = '1px'

    //Getters

    getRecuadroNuevosPlanes                          (){ return cy.get(this.recuadroNuevosPlanes)                      }
    getRecuadroValorTexto                            (){ return cy.get(this.recuadroValorTexto)                        }
    getBoton                                         (){ return cy.get(this.boton)                                     }
    getBotonValorTexto                               (){ return cy.get(this.botonValorTexto)                           }
    getTitulo                                        (){ return cy.get(this.titulo)                                    }
    getRecuadrosGestion                              (){ return cy.get(this.recuadrosGestion)                          }
    getRecuadrosGestionValor                         (){ return cy.get(this.recuadrosGestionValor)                     }
    getFlechaDerecha                                 (){ return cy.get(this.flechaDerecha)                             }
    getLineaDivisoria                                (){ return cy.get(this.lineaDivisoria)                            }
    getSeccionesInfo                                 (){ return cy.get(this.seccionesInfo)                             }
    getSeccionesInfoValor                            (){ return cy.get(this.seccionesInfoValor)                        }
    getLineaSeparacion                               (){ return cy.get(this.lineaSeparacion)                           }

    
    getRecuadroNuevosPlanesBackGroundColor           (){ return this.recuadroNuevosPlanesBackGroundColor               }
    getRecuadroNuevosPlanesBorder                    (){ return this.recuadroNuevosPlanesBorder                        }
    getRecuadroNuevosPlanesBorderRadius              (){ return this.recuadroNuevosPlanesBorderRadius                  }
    getRecuadroNuevosPlanesMargin                    (){ return this.recuadroNuevosPlanesMargin                        }
    getRecuadroTexto                                 (){ return this.recuadroTexto                                     }
    getRecuadroTextoFontSize                         (){ return this.recuadroTextoFontSize                             }
    getRecuadroTextoFontStyle                        (){ return this.recuadroTextoFontStyle                            }
    getRecuadroTextoFontWeight                       (){ return this.recuadroTextoFontWeight                           }
    getRecuadroTextoFontFamily                       (){ return this.recuadroTextoFontFamily                           }
    getRecuadroTextoColor                            (){ return this.recuadroTextoColor                                }
    getBotonTexto                                    (){ return this.botonTexto                                        }
    getBotonTextoFontFamily                          (){ return this.botonTextoFontFamily                              }
    getBotonTextoFontSize                            (){ return this.botonTextoFontSize                                }
    getBotonTextoFontWeight                          (){ return this.botonTextoFontWeight                              }
    getBotonTextoFontStyle                           (){ return this.botonTextoFontStyle                               }
    getBotonTextoTextAlign                           (){ return this.botonTextoTextAlign                               }
    getBotonTextoColor                               (){ return this.botonTextoColor                                   }
    getTituloTextoFontSize                           (){ return this.tituloTextoFontSize                               }
    getTituloTextoFontStyle                          (){ return this.tituloTextoFontStyle                              }
    getTituloTextoFontWeight                         (){ return this.tituloTextoFontWeight                             }
    getTituloTextoFontFamily                         (){ return this.tituloTextoFontFamily                             }
    getTituloTextoColor                              (){ return this.tituloTextoColor                                  }
    getTituloTexto                                   (){ return this.tituloTexto                                       }
    getRecuadrosGestionBackgroundColor               (){ return this.recuadrosGestionBackgroundColor                   }
    getRecuadrosGestionBorder                        (){ return this.recuadrosGestionBorder                            }
    getRecuadrosGestionBorderRadius                  (){ return this.recuadrosGestionBorderRadius                      }
    getRecuadrosGestionDisplay                       (){ return this.recuadrosGestionDisplay                           }
    getRecuadrosGestionTexto1                        (){ return this.recuadrosGestionTexto1                            }
    getRecuadrosGestionTexto2                        (){ return this.recuadrosGestionTexto2                            }
    getRecuadrosGestionTextoFontSize                 (){ return this.recuadrosGestionTextoFontSize                     }
    getRecuadrosGestionTextoFontStyle                (){ return this.recuadrosGestionTextoFontStyle                    }
    getRecuadrosGestionTextoFontWeight               (){ return this.recuadrosGestionTextoFontWeight                   }
    getRecuadrosGestionTextoFontFamily               (){ return this.recuadrosGestionTextoFontFamily                   }
    getRecuadrosGestionTextoColor                    (){ return this.recuadrosGestionTextoColor                        }
    getLineaDivisoriaBakgroundColor                  (){ return this.lineaDivisoriaBakgroundColor                      }
    getSeccionesInfoAlignItems                       (){ return this.seccionesInfoAlignItems                           }
    getSeccionesInfoPadding                          (){ return this.seccionesInfoPadding                              }
    getSeccionesInfoHeight                           (){ return this.seccionesInfoHeight                               }
    getSeccionesInfoDisplay                          (){ return this.seccionesInfoDisplay                              }
    getSeccionesInfoValorTexto1                      (){ return this.seccionesInfoValorTexto1                          }
    getSeccionesInfoValorTexto2                      (){ return this.seccionesInfoValorTexto2                          }
    getSeccionesInfoValorTexto3                      (){ return this.seccionesInfoValorTexto3                          }
    getSeccionesInfoValorTextoFontFamily             (){ return this.seccionesInfoValorTextoFontFamily                 }
    getSeccionesInfoValorTextoFontSize               (){ return this.seccionesInfoValorTextoFontSize                   }
    getSeccionesInfoValorTextoFontStyle              (){ return this.seccionesInfoValorTextoFontStyle                  }
    getSeccionesInfoValorTextoFontWeight             (){ return this.seccionesInfoValorTextoFontWeight                 }
    getSeccionesInfoValorTextoColor                  (){ return this.seccionesInfoValorTextoColor                      }
    getLineaSeparacionBackgroundColor                (){ return this.lineaSeparacionBackgroundColor                    }
    getLineaSeparacionHeight                         (){ return this.lineaSeparacionHeight                             }
}