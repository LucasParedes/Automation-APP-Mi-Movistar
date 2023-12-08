import ColorsData from "../Color/colorDataPage";
const colorData                                   = new ColorsData();

export default class Resumen {

    //Texto principal
    descripcion                                   = '.f12rzdkf'
    descripcionText                               = 'Confirmá tu pedido'
    descripcionFontSize                           = '18px'
    descripcionColor                              = colorData.getGrey0()
    descripcionFontWeight                         = '300'
    descripcionFontStyle                          = 'normal'

    //Item pueden existir varios, por eso se debe usar el each en el validator
    item                                          = '.fodlaap'
    itemFontSize                                  = '16px'
    itemColor                                     = colorData.getGrey0()
    itemFontWeight                                = '400'
    itemFontStyle                                 = 'normal'

    montoItem                                     = '.f1f1ygnm > .fi0cxuj'
    montoItemFontSize                             = '16px'
    montoItemColor                                = colorData.getGrey0()
    montoItemFontWeight                           = '400'
    montoItemFontStyle                            = 'normal'

    // Subtotal
    subtotal                                      = '.fvcvyav'
    subtotalText                                  = 'Subtotal'
    subtotalFontSize                              = '16px'
    subtotalColor                                 = colorData.getGrey0()
    subtotalFontWeight                            = '500' // bold
    subtotalFontStyle                             = 'normal'

    montoSubtotal                                 = 'fi0cxuj'
    montoSubtotalFontSize                         = '16px'
    montoSubtotalColor                            = colorData.getGrey0()
    montoSubtotalFontWeight                       = '500' // bold
    montoSubtotalFontStyle                        = 'normal'
    
    // Total a Pagar
    total                                         = '.fvcvyav'
    totalText                                     = 'Total a pagar'
    totalFontSize                                 = '16px'
    totalColor                                    = colorData.getGrey0()
    totalFontWeight                               = '500' // bold
    totalFontStyle                                = 'normal'

    montoTotal                                    = '.fnltr9a'
    montoTotalValor                               = '$0,00'
    montoTotalFontSize                            = '24px'
    montoTotalColor                               = colorData.getGrey0()
    montoTotalFontWeight                          = '500' // bold
    montoTotalFontStyle                           = 'normal'
    
    // Línea divisoria de Ítems
    rectadivisoria                                = ''
    rectadivisoriaBackgroundColor                 = colorData.getGrey4()
    
    // Recuadro mensaje informativo de línea asociada
    rectanguloMensajeInformativo                  = '.fzyhv7x'
    rectanguloMensajeInformativoBackgroundColor   = colorData.getWhite()
    rectanguloMensajeInformativoBorder            = '1px solid ' + colorData.getGrey3()
    rectanguloMensajeInformativoBorderColor       = colorData.getGrey3()
    rectanguloMensajeInformativoBorderRadius      = '4px'

    // Mensaje informativo de línea asociada
    mensajeInformativo                            = '.fahh4vp'
    mensajeInformativoText                        = 'El importe aparecerá en tu próxima factura de la línea'
    mensajeInformativoColor                       = colorData.getGrey1()
    mensajeInformativoFontFamily                  = 'Roboto'
    mensajeInformativoFontSize                    = '14px'
    mensajeInformativoFontStyle                   = 'normal'
    mensajeInformativoFontWeight                  = '400'
    mensajeInformativoMargin                      = '2px 0 0 12px' // No se usa.

    //ïcono del mensaje informativo de línea asociada
    iconoMensajeInformativo                       = '.f1uilg4l'
    
    // Mensaje de Descuento Genérico 
    mensajeDescuento                              = '.summary_firstText__1IvVU'
    mensajeDescuentoText                          = 'Con Internet Fibra, 2 meses de regalo: promoción exclusiva por única vez.'
    mensajeDescuentoFontFamily                    = 'Roboto'
    mensajeDescuentoFontSize                      = '14px'
    mensajeDescuentoColor                         = colorData.getGrey1()
// en la clase encontrada no están los siguientes valores.
//    mensajeDescuentoFontWeight                    = '400'
//    mensajeDescuentoFontStyle                     = 'normal'


    // Terminos y condiciones
    terminosYCondicionesFrase                     = '.f13qaxm4 > span'
    terminosYCondicionesFraseTexto                = 'Al confirmar aceptás nuestros'
    terminosYCondicionesLinks                     = '.f1hsgxph'
    terminosYCondicionesLinksTexto                = 'términos y condiciones'
    terminosYCondicionesLinksColor                = colorData.getMovistarBlue()

    terminosYCondicionesCss                       = '.f1yrwjfo'
    terminosYCondicionesCssColor                  = colorData.getGrey1()
    terminosYCondicionesCssFontFamily             = 'Roboto'
    terminosYCondicionesCssFontSize               = '16px'
    terminosYCondicionesUrl                       = 'https://www.movistar.com.ar/legales/television/abonos-tv?'

    // Boton confirmar
    botonConfirmar                                = '.f1ek2a9i'
    botonConfirmarBackgroundColor                 = colorData.getMovistarGreen()
    
    botonConfirmarTexto                           = '.fj4bzi8'
    botonConfirmarTextoValor                      = 'Confirmar'
    botonConfirmarTextoColor                      = colorData.getWhite()
    botonConfirmarTextoFontFamily                 = 'Roboto'
    botonConfirmarTextoFontSize                   = '16px'
    botonConfirmarTextoFontStyle                  = 'normal'
    botonConfirmarTextoFontWeight                 = '500'

    // Link condiciones legales
    condicionesLegales                            = '.f1f023gr'
    condicionesLegalesText                        = 'Condiciones legales'
    condicionesLegalesColor                       = colorData.getMovistarBlue()
    condicionesLegalesFontFamily                  = 'Roboto'
    condicionesLegalesFontSize                    = '14px'
    condicionesLegalesFontStyle                   = 'normal'
    condicionesLegalesFontWeight                  = '500'
    condicionesLegalesTextalig                    = 'center'
    condicionesLegalesUrl                         = 'https://www.movistar.com.ar/legales/television/abonos-tv?'


    // Métodos  de las clases html de los objetos
    getDescripcion                                    (){ return cy.get(this.descripcion)                         }
    getItem                                           (){ return cy.get(this.item)                                }
    getMontoItem                                      (){ return cy.get(this.montoItem)                           }
    getSubtotal                                       (){ return cy.get(this.subtotal)                            }
    getMontoSubtotal                                  (){ return cy.get(this.montoSubtotal)                       }
    getTotal                                          (){ return cy.get(this.total)                               }
    getMontoTotal                                     (){ return cy.get(this.montoTotal)                          }
    getRectadivisoria                                 (){ return cy.get(this.rectadivisoria)                      }
    getRectanguloMensajeInformativo                   (){ return cy.get(this.rectanguloMensajeInformativo)        }
    getMensajeInformativo                             (){ return cy.get(this.mensajeInformativo)                  }
    getIconoMensajeInformativo                        (){ return cy.get(this.iconoMensajeInformativo)             }
    getMensajeDescuento                               (){ return cy.get(this.mensajeDescuento)                    }
    getTerminosYCondicionesFrase                      (){ return cy.get(this.terminosYCondicionesFrase)           }
    getTerminosYCondicionesLinks                      (){ return cy.get(this.terminosYCondicionesLinks)           }
    getTerminosYCondicionesCss                        (){ return cy.get(this.terminosYCondicionesCss)             }
    getBotonConfirmar                                 (){ return cy.get(this.botonConfirmar)                      }
    getBotonConfirmarTexto                            (){ return cy.get(this.botonConfirmarTexto)                 }
    getCondicionesLegales                             (){ return cy.get(this.condicionesLegales)                  }
    
     //  Métodos de las caracteristicas
    getDescripcionText                                (){ return this.descripcionText                             }
    getDescripcionFontSize                            (){ return this.descripcionFontSize                         }
    getDescripcionColor                               (){ return this.descripcionColor                            }
    getDescripcionFontWeight                          (){ return this.descripcionFontWeight                       }
    getDescripcionFontStyle                           (){ return this.descripcionFontStyle                        }
    
    getItemFontSize                                   (){ return this.itemFontSize                                }
    getItemColor                                      (){ return this.itemColor                                   }
    getItemFontWeight                                 (){ return this.itemFontWeight                              }
    getItemFontStyle                                  (){ return this.itemFontStyle                               }

    getMontoItemFontSize                              (){ return this.montoItemFontSize                           }
    getMontoItemColor                                 (){ return this.montoItemColor                              }
    getMontoItemFontWeight                            (){ return this.montoItemFontWeight                         }
    getMontoItemFontStyle                             (){ return this.montoItemFontStyle                          }

    getSubtotalText                                   (){ return this.subtotalText                                }
    getSubtotalFontSize                               (){ return this.subtotalFontSize                            }
    getSubtotalColor                                  (){ return this.subtotalColor                               }
    getSubtotalFontWeight                             (){ return this.subtotalFontWeight                          }
    getSubtotalFontStyle                              (){ return this.subtotalFontStyle                           }

    getMontoSubtotalFontSize                          (){ return this.montoSubtotalFontSize                       }
    getMontoSubtotalColor                             (){ return this.montoSubtotalColor                          }
    getMontoSubtotalFontWeight                        (){ return this.montoSubtotalFontWeight                     }
    getMontoSubtotalFontStyle                         (){ return this.montoSubtotalFontStyle                      }

    getTotalText                                      (){ return this.totalText                                   }
    getTotalFontSize                                  (){ return this.totalFontSize                               }
    getTotalColor                                     (){ return this.totalColor                                  }
    getTotalFontWeight                                (){ return this.totalFontWeight                             }
    getTotalFontStyle                                 (){ return this.totalFontStyle                              }

    getMontoTotalValor                                (){ return this.montoTotalValor                             }
    getMontoTotalFontSize                             (){ return this.montoTotalFontSize                          }
    getMontoTotalColor                                (){ return this.montoTotalColor                             }
    getMontoTotalFontWeight                           (){ return this.montoTotalFontWeight                        }
    getMontoTotalFontStyle                            (){ return this.montoTotalFontStyle                         }
    getRectadivisoriaBackgroundColor                  (){ return this.rectadivisoriaBackgroundColor               }

    getRectanguloMensajeInformativoBackgroundColor    (){ return this.rectanguloMensajeInformativoBackgroundColor }
    getRectanguloMensajeInformativoBorder             (){ return this.rectanguloMensajeInformativoBorder          }
    getRectanguloMensajeInformativoBorderColor        (){ return this.rectanguloMensajeInformativoBorderColor     }
    getRectanguloMensajeInformativoBorderRadius       (){ return this.rectanguloMensajeInformativoBorderRadius    }

    getMensajeInformativoText                         (){ return this.mensajeInformativoText                      }
    getMensajeInformativoColor                        (){ return this.mensajeInformativoColor                     }
    getMensajeInformativoFontFamily                   (){ return this.mensajeInformativoFontFamily                }
    getMensajeInformativoFontSize                     (){ return this.mensajeInformativoFontSize                  }
    getMensajeInformativoFontStyle                    (){ return this.mensajeInformativoFontStyle                 }
    getMensajeInformativoFontWeight                   (){ return this.mensajeInformativoFontWeight                }
    getMensajeInformativoMargin                       (){ return this.mensajeInformativoMargin                    }

    getMensajeDescuentoText                           (){ return this.mensajeDescuentoText                        }
    getMensajeDescuentoFontFamily                     (){ return this.mensajeDescuentoFontFamily                  }
    getMensajeDescuentoFontSize                       (){ return this.mensajeDescuentoFontSize                    }
    getMensajeDescuentoColor                          (){ return this.mensajeDescuentoColor                       }

    //getMensajeDescuentoFontWeight                   (){ return this.mensajeDescuentoFontWeight                  }
    //getMensajeDescuentoFontStyle                    (){ return this.mensajeDescuentoFontStyle                   }

    getTerminosYCondicionesFraseTexto                 (){ return this.terminosYCondicionesFraseTexto              }
    getTerminosYCondicionesLinksTexto                 (){ return this.terminosYCondicionesLinksTexto              }
    getTerminosYCondicionesLinksColor                 (){ return this.terminosYCondicionesLinksColor              }
    getTerminosYCondicionesCssColor                   (){ return this.terminosYCondicionesCssColor                }
    getTerminosYCondicionesCssFontFamily              (){ return this.terminosYCondicionesCssFontFamily           }
    getTerminosYCondicionesCssFontSize                (){ return this.terminosYCondicionesCssFontSize             }
    getTerminosYCondicionesCssUrl                     (){ return this.terminosYCondicionesUrl                     }

    getBotonConfirmarBorderRadius                     (){ return this.botonConfirmarBorderRadius                  }
    getBotonConfirmarBackgroundColor                  (){ return this.botonConfirmarBackgroundColor               }
    getBotonConfirmarTextoValor                       (){ return this.botonConfirmarTextoValor                    }
    getBotonConfirmarTextoColor                       (){ return this.botonConfirmarTextoColor                    }
    getBotonConfirmarTextoFontFamily                  (){ return this.botonConfirmarTextoFontFamily               }
    getBotonConfirmarTextoFontSize                    (){ return this.botonConfirmarTextoFontSize                 }
    getBotonConfirmarTextoFontStyle                   (){ return this.botonConfirmarTextoFontStyle                }
    getBotonConfirmarTextoFontWeight                  (){ return this.botonConfirmarTextoFontWeight               }
    
    getCondicionesLegalesText                         (){ return this.condicionesLegalesText                      }
    getCondicionesLegalesColor                        (){ return this.condicionesLegalesColor                     }
    getCondicionesLegalesFontFamily                   (){ return this.condicionesLegalesFontFamily                }
    getCondicionesLegalesFontSize                     (){ return this.condicionesLegalesFontSize                  }
    getCondicionesLegalesFontStyle                    (){ return this.condicionesLegalesFontStyle                 }
    getCondicionesLegalesFontWeight                   (){ return this.condicionesLegalesFontWeight                }
    getCondicionesLegalesTextalig                     (){ return this.condicionesLegalesTextalig                  }
    getCondicionesLegalesUrl                          (){ return this.condicionesLegalesUrl                       }
}