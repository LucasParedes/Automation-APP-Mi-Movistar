import ColorsData from "../../Color/colorDataPage";
const colorData                               = new ColorsData();


export default class GrillaPlanesPage{

    //FONT WEIGH 
    //font-style italic (cursiva) sino NO

    //Administrar mi plan de MTV
    administrarPlanMtvRecuadro                = '.f1glqn9j'
    administrarPlanMtvRecuadroColor           = colorData.getWhite()
    administrarPlanMtvtexto                   = '.fodlaap'
    administrarPlanMtvRecuadroTexto           = 'Administrar mi plan de Movistar TV'
    administrarPlanMtvRecuadroTextoFontSize   = '16px'
    administrarPlanMtvRecuadroTextoFontWeight = '400'
    administrarPlanMtvRecuadroTextoFontStyle  = 'normal'
    administrarPlanMtvRecuadroTextoColor      = colorData.getGrey0()

    //icono flecha derecha
    iconoFlechaDerecha                        = 'clase falta'
    
    iconoLinea                                = '.f77qmqm'
    iconoLineaWidth                           = '648px'
    iconoLineaWidthMobile                     = '328px'
    iconoLineaColor                           = colorData.getGrey4()

    //Chips de combos
    chipActivo                                = 'svg'
    chipBorderActivo                          = '.fvvwnhs'
    chipBorderActivoBorderRadius              = '16px'
    chipBorderActivoBorder                    = '1.5px solid ' + colorData.getMovistarGreen()
    chipBorderActivoBackGroundColor           = colorData.getWhite()

    chipInactivo                              = 'svg'
    chipBorderInactivo                        = '.f1gwdv0x'
    chipBorderInactivoBorderRadius            = '16px'
    chipBorderInactivoBorder                  = '1.5px solid ' + colorData.getGrey3()
    chipBorderInactivoBackGroundColor         = colorData.getWhite()
    //Textos dentro de chips
    chipTexto                                 = '.f1afrtj8'
    chipTextoFontSize                         = '14px'
    chipTextoFontWeight                       = '400'
    chipTextoFontStyle                        = 'normal'
    chipTextoColor                            = colorData.getGrey0()
    chipTextoTvDigiCombo                      = 'TV DIGITAL COMBO+'
    chipTextoTvMaxCombo                       = 'TV MAX COMBO+'
    chipTextoTvMax                            = 'TV MAX'
    //Todo info del plan
    planDetailsRecuadro                       = '.f1muwfcv'
    planDetailsRecuadroMargin                 = '8px 0 73px 16px'
    planDetailsRecuadroPadding                = '1px 1px 12px 0'
    planDetailsRecuadroPaddingMobile          = '1px 1px 9px'
    planDetailsBorderRecuadroBorderRadius     = '8px'
    planDetailsRecuadroBorder                 = '1px solid ' + colorData.getGrey3()
    planDetailsRecuadroBackgroundColor        = colorData.getTransparente2()
    //Que contenga la img
    imagenPlan                                = '.f159xxum.f1f4bfq6'
    imagenPlanMarginMobile                    = '0 0 15px'

    altImagenes                               = 'img'
    urlImagenDigitalCombo                     = 'https://descubri.movistar.com.ar/documents/289260/314057/MTV_Desktop_Imagen+Principal+Plan+TV+Digital+Combo%2B.jpg/d5fa2b0f-49c5-5f89-d14d-37e479eb9570?t=1693404358557'
    urlImagenMax                              = 'https://descubri.movistar.com.ar/documents/289260/314057/MTV_Desktop_Imagen+Principal+Plan+TV+Max.jpg/1a537558-8525-120d-9a77-d2654c0f77fd?t=1693404358879'
    urlImagenMaxCombo                         = 'https://descubri.movistar.com.ar/documents/289260/314057/MTV_Desktop_Imagen+Principal+Plan+TV+Max+Combo%2B.jpg/8fe00fc6-2e1c-d139-c8b1-43bcaa53c5b0?t=1693404358796'
    //Meses de regalo con fibra
    regaloRecuadro                            = '.plans_cardContent__Yego1 > :nth-child(1)'
    regaloRecuadroBorderRadius                = '0px'
    regaloRecuadroColor                       = colorData.getTransparente()
    regaloRecuadroTexto                       = '.f1r5mb0e.fim09iu.undefined.crossbrowser-width'
    regaloRecuadroTextoDescripcion            = 'CON INTERNET FIBRA'
    regaloRecuadroTextoFontSize               = '12px'
    regaloRecuadroTextoFontWeight             = '400'
    regaloRecuadroTextoFontStyle              = 'normal'
    regaloRecuadroTextoColor                  = colorData.getWhite()
    
    //Titulo Principal
    tituloPlanTexto                           = 'div > .fkrf7b5'
    tituloPLanTextoTvMCP                      = 'TV Max Combo+'
    tituloPLanTextoTvMax                      = 'TV Max'
    tituloPLanTextoTvDigiCP                   = 'TV Digital Combo+'
    tituloPlanTextoFontSize                   = '20px'
    tituloPlanTextoFontWeight                 = '500'
    tituloPlanTextoFontStyle                  = 'normal'
    tituloPlanTextoColor                      = colorData.getGrey0()
    //Descripcion
    descripcionPlan                           = '.fhdsg7j'
    descripcionPlanBackGroundColor            = colorData.getWhite()
    descripcionPlanPaddingMobile              = '8px 14px 8px 16px'
    descripcionPlanTexto                      = '.fahh4vp'
    descripcionPlanTextoFontSize              = '14px'
    descripcionPlanTextoFontWeight            = '400'
    descripcionPlanTextoFontStyle             = 'normal'
    descripcionPlanTextoColor                 = colorData.getGrey1()
    descripcionPlanTextoTvMCP                 = 'Lo mejor de la TV con deportes, pelis y series en 98 canales, más Disney+ y Star+.'
    descripcionPlanTextoTvMax                 = 'Una programación con 98 canales: pelis, series, noticias, deportes y canales infantiles.'
    descripcionPlanTextoTvDigiCP              = 'Disfrutá 34 canales de noticias, deportes y canales infantiles, más Disney+ y Star+.'
    //Ver Grilla Canales (boton)
    grillaCanales                             = '.f1mibvjw.fy4hndo'
    grillaCanalesBorderRadius                 = '4px'
    grillaCanalesPaddingMobile                = '8px 14px 8px 16px'
    grillaCanalesBotonTexto                   = '.f1f023gr'
    grillaCanalesBotonTextoVerGrilla          = 'Ver grilla de canales'
    grillaCanalesBotonTextoFontSize           = '14px'
    grillaCanalesBotonTextoFontWeight         = '500'
    grillaCanalesBotonTextoFontWeightMobile   = 'normal'
    grillaCanalesBotonTextoFontStyle          = 'normal'
    grillaCanalesBotonTextoColor              = colorData.getMovistarBlue()
    //Lista del plan (bullets)
    imagenBullet                              = '.fcf5rmo'
    bulletList                                = 'f1g6fr16'
    bulletListTexto                           = '.fntlkib'
    bulletListTextoFontSize                   = '16px'
    bulletListTextoFontWeight                 = '400'
    bulletListTextoFontStyle                  = 'normal'
    bulletListTextoColor                      = colorData.getTransparente()
    bulletListTextoUno                        = 'Sumá packs premium como Pack Fútbol.'
    bulletListTextoDos                        = 'Descargá la app Movistar TV en tu smart TV, tablet o móvil, o mirá desde tu PC y Chromecast.'
    bulletListTextoTres                       = 'Disfrutá de Movistar TV hasta en 2 dispositivos en simultáneo.'
    //Info por unica vez
    iconoAlertaInfo                           = '.f1uilg4l'
    infoRecuadro                              = '.f1aitord'
    infoRecuadroBorderRadius                  = '0px'
    infoRecuadroBorder                        = '0px none ' + colorData.getTransparente()
    infoRecuadroTexto                         = '.f1aitord > .fahh4vp'
    infoRecuadroTextoInfo                     = 'Con Internet Fibra, 2 meses de regalo: promoción exclusiva por única vez.'
    infoRecuadroTextoInfoFontSize             = '14px'
    infoRecuadroTextoInfoFontWeight           = '400'
    infoRecuadroTextoInfoFontStyle            = 'normal'
    infoRecuadroTextoInfoColor                = colorData.getGrey1()
    //info IVA
    infoIva                                   = 'fhdsg7j'
    infoIvaPadding                            = '6px 24px 6px 16px'
    infoIvaBackGroundColor                    = colorData.getWhite()
    infoIvaTexto                              = 'fahh4vp'
    infoIvaTextoInfo                          = 'Los precios incluyen IVA consumidor final e impuestos internos.'
    infoIvaFontSize                           = '14px'
    infoIvaColor                              = colorData.getGrey1()
    //Valor del precio
    valor                                     = '.f1kpgosz'
    valorNumero                               = '$'
    valorNumeroFontSize                       = '24px'
    valorNumeroFontWeight                     = '400'
    valorNumeroFontWeightMobile               = '500'
    valorNumeroFontStyle                      = 'normal'
    valorNumeroColor                          = colorData.getGrey0()
    //Boton quiero este plan
    boton                                     = '.f1mibvjw.f1ek2a9i'
    botonBorderRadius                         = '4px'
    botonBackGroundColor                      = colorData.getMovistarGreen()
    botonTexto                                = '.fj4bzi8'
    botonTextoQuiero                          = 'Quiero este plan'
    botonTextoFontSize                        = '16px'
    botonTextoFontWeight                      = '500'
    botonTextoFontStyle                       = 'normal'
    botonTextoColor                           = colorData.getWhite()
    



    // Métodos  de las clases html de los objetos
    getAdministrarPlanMtvRecuadro                   (){ return cy.get(this.administrarPlanMtvRecuadro)          } 
    getAdministrarPlanMtvtexto                      (){ return cy.get(this.administrarPlanMtvtexto)             } 
    getIconoFlechaDerecha                           (){ return cy.get(this.iconoFlechaDerecha)                  }
    getIconoLinea                                   (){ return cy.get(this.iconoLinea)                          } 
    getChipActivo                                   (){ return cy.get(this.chipActivo)                          } 
    getChipInactivo                                 (){ return cy.get(this.chipInactivo)                        } 
    getChipBorderActivo                             (){ return cy.get(this.chipBorderActivo)                    } 
    getChipBorderInactivo                           (){ return cy.get(this.chipBorderInactivo)                  } 
    getChipTexto                                    (){ return cy.get(this.chipTexto)                           }
    getPlanDetailsRecuadro                          (){ return cy.get(this.planDetailsRecuadro)                 }
    getImagenPlan                                   (){ return cy.get(this.imagenPlan)                          }
    getRegaloRecuadro                               (){ return cy.get(this.regaloRecuadro)                      }
    getRegaloRecuadroTexto                          (){ return cy.get(this.regaloRecuadroTexto)                 }
    getTituloPLan                                   (){ return cy.get(this.tituloPLan)                          }
    getTituloPlanTexto                              (){ return cy.get(this.tituloPlanTexto)                     } 
    getDescripcionPlan                              (){ return cy.get(this.descripcionPlan)                     }
    getDescripcionPlanTexto                         (){ return cy.get(this.descripcionPlanTexto)                } 
    getGrillaCanales                                (){ return cy.get(this.grillaCanales)                       }
    getGrillaCanalesBotonTexto                      (){ return cy.get(this.grillaCanalesBotonTexto)             } 
    getImagenBullet                                 (){ return cy.get(this.imagenBullet)                        }
    getBulletList                                   (){ return cy.get(this.bulletList)                          }
    getBulletListTexto                              (){ return cy.get(this.bulletListTexto)                     } 
    getInfoRecuadro                                 (){ return cy.get(this.infoRecuadro)                        }
    getInfoRecuadroTexto                            (){ return cy.get(this.infoRecuadroTexto)                   }
    getInfoIva                                      (){ return cy.get(this.infoIva)                             }
    getInfoIvaTexto                                 (){ return cy.get(this.infoIvaTexto)                        }
    getValor                                        (){ return cy.get(this.valor)                               }
    getBoton                                        (){ return cy.get(this.boton)                               }
    getBotonTexto                                   (){ return cy.get(this.botonTexto)                          }


    
    // Métodos de las caracteristicas
    getAdministrarPlanMtvRecuadroColor              (){ return this.administrarPlanMtvRecuadroColor             } 
    getAdministrarPlanMtvRecuadroTexto              (){ return this.administrarPlanMtvRecuadroTexto             } 
    getAdministrarPlanMtvRecuadroTextoFontSize      (){ return this.administrarPlanMtvRecuadroTextoFontSize     }
    getAdministrarPlanMtvRecuadroTextoFontWeight    (){ return this.administrarPlanMtvRecuadroTextoFontWeight   }
    getAdministrarPlanMtvRecuadroTextoFontStyle     (){ return this.administrarPlanMtvRecuadroTextoFontStyle    }
    getAdministrarPlanMtvRecuadroTextoColor         (){ return this.administrarPlanMtvRecuadroTextoColor        } 

    //icono flecha derecha
    getIconoLineaWidth()                              
    { 
        if(Cypress.config("viewportWidth") < 768){
            return  this.iconoLineaWidthMobile
        }else {
            return  this.iconoLineaWidth
        }
    }
    getIconoLineaColor                              (){ return this.iconoLineaColor                             } 

    //Chips de combos
    getChipBorderActivoBorderRadius                 (){ return this.chipBorderActivoBorderRadius                } 
    getChipBorderActivoBorder                       (){ return this.chipBorderActivoBorder                      } 
    getChipBorderActivoBackGroundColor              (){ return this.chipBorderActivoBackGroundColor             } 

    getChipBorderInactivoBorderRadius               (){ return this.chipBorderInactivoBorderRadius              } 
    getChipBorderInactivoBorder                     (){ return this.chipBorderInactivoBorder                    } 
    getChipBorderInactivoBackGroundColor            (){ return this.chipBorderInactivoBackGroundColor           }

    //Textos dentro de chips
    getChipTextoFontSize                            (){ return this.chipTextoFontSize                           }
    getChipTextoFontWeight                          (){ return this.chipTextoFontWeight                         }
    getChipTextoFontStyle                           (){ return this.chipTextoFontStyle                          }
    getChipTextoFontColor                           (){ return this.chipTextoColor                              }
    getChipTextoTvDigiCombo                         (){ return this.chipTextoTvDigiCombo                        } 
    getChipTextoTvMaxCombo                          (){ return this.chipTextoTvMaxCombo                         }
    getChipTextoTvMax                               (){ return this.chipTextoTvMax                              }

    //Todo info del plan
    getPlanDetailsRecuadroMargin                    (){ return this.planDetailsRecuadroMargin                   }
    getPlanDetailsRecuadroPadding()                   
    { 
        if(Cypress.config("viewportWidth") < 768){
            return  this.planDetailsRecuadroPaddingMobile
        }else {
            return  this.planDetailsRecuadroPadding
        }                
    }
    getPlanDetailsBorderRecuadroBorderRadius        (){ return this.planDetailsBorderRecuadroBorderRadius       }
    getPlanDetailsRecuadroBorder                    (){ return this.planDetailsRecuadroBorder                   }
    getPlanDetailsRecuadroBackgroundColor           (){ return this.planDetailsRecuadroBackgroundColor          }

    //Que contenga la img
    getImagenPlanMargin                             (){ return this.imagenPlanMarginMobile                      }
    getAltImagenes                                  (){ return this.altImagenes                                 }
    getUrlImagenDigitalCombo                        (){ return this.urlImagenDigitalCombo                       }
    getUrlImagenMax                                 (){ return this.urlImagenMax                                }
    getUrlImagenMaxCombo                            (){ return this.urlImagenMaxCombo                           }

    //Meses de regalo con fibra
    getRegaloRecuadroBorderRadius                   (){ return this.regaloRecuadroBorderRadius                  } 
    getRegaloRecuadroColor                          (){ return this.regaloRecuadroColor                         } 
    getRegaloRecuadroTextoDescipcion                (){ return this.regaloRecuadroTextoDescripcion              } 
    getRegaloRecuadroTextoFontSize                  (){ return this.regaloRecuadroTextoFontSize                 }
    getRegaloRecuadroTextoFontWeight                (){ return this.regaloRecuadroTextoFontWeight               }
    getRegaloRecuadroTextoFontStyle                 (){ return this.regaloRecuadroTextoFontStyle                }
    getRegaloRecuadroTextoColor                     (){ return this.regaloRecuadroTextoColor                    }

    //Titulo Principal
    getTituloPLanTextoTvMCP                         (){ return this.tituloPLanTextoTvMCP                        } 
    getTituloPLanTextoTvMax                         (){ return this.tituloPLanTextoTvMax                        } 
    getTituloPLanTextoTvDigiCP                      (){ return this.tituloPLanTextoTvDigiCP                     } 
    getTituloPlanTextoFontSize                      (){ return this.tituloPlanTextoFontSize                     }
    getTituloPlanTextoFontWeight                    (){ return this.tituloPlanTextoFontWeight                   }
    getTituloPlanTextoFontStyle                     (){ return this.tituloPlanTextoFontStyle                    }
    getTituloPlanTextoColor                         (){ return this.tituloPlanTextoColor                        } 

    //Descripcion
    getDescripcionPlanBackGroundColor               (){ return this.descripcionPlanBackGroundColor              } 
    getDescripcionPlanPaddingMobile                 (){ return this.descripcionPlanPaddingMobile                } 
    getDescripcionPlanTextoFontSize                 (){ return this.descripcionPlanTextoFontSize                }
    getDescripcionPlanTextoFontWeight               (){ return this.descripcionPlanTextoFontWeight              }
    getDescripcionPlanTextoFontStyle                (){ return this.descripcionPlanTextoFontStyle               }
    getDescripcionPlanTextoColor                    (){ return this.descripcionPlanTextoColor                   } 
    getDescripcionPlanTextoTvMCP                    (){ return this.descripcionPlanTextoTvMCP                   } 
    getDescripcionPlanTextoTvMax                    (){ return this.descripcionPlanTextoTvMax                   } 
    getDescripcionPlanTextoTvDigiCP                 (){ return this.descripcionPlanTextoTvDigiCP                } 

    //Ver Grilla Canales (boton)
    getGrillaCanalesBorderRadius                    (){ return this.grillaCanalesBorderRadius                   } 
    getGrillaCanalesPaddingMobile                   (){ return this.grillaCanalesPaddingMobile                  } 
    getGrillaCanalesBotonTextoVerGrilla             (){ return this.grillaCanalesBotonTextoVerGrilla            } 
    getGrillaCanalesBotonTextoFontSize              (){ return this.grillaCanalesBotonTextoFontSize             }
    getGrillaCanalesBotonTextoFontWeight()            
    { if(Cypress.config("viewportWidth") < 768){
        return  this.grillaCanalesBotonTextoFontWeightMobile
    }else {
        return this.grillaCanalesBotonTextoFontWeight
    }             
    }
    getGrillaCanalesBotonTextoFontStyle             (){ return this.grillaCanalesBotonTextoFontStyle            }
    getGrillaCanalesBotonTextoColor                 (){ return this.grillaCanalesBotonTextoColor                } 

    //Lista del plan (bullets)
    getBulletListTextoFontSize                      (){ return this.bulletListTextoFontSize                     }
    getBulletListTextoFontWeight                    (){ return this.bulletListTextoFontWeight                   } 
    getBulletListTextoFontStyle                     (){ return this.bulletListTextoFontStyle                    } 
    getBulletListTextoColor                         (){ return this.bulletListTextoColor                        } 
    getBulletListTextoUno                           (){ return this.bulletListTextoUno                          } 
    getBulletListTextoDos                           (){ return this.bulletListTextoDos                          } 
    getBulletListTextoTres                          (){ return this.bulletListTextoTres                         } 
    
    //Info por unica vez
    getIconoAlertaInfo                              (){ return this.iconoAlertaInfo                             } 
    getInfoRecuadroBorderRadius                     (){ return this.infoRecuadroBorderRadius                    } 
    getInfoRecuadroBorder                           (){ return this.infoRecuadroBorder                          }  
    getInfoRecuadroTextoInfo                        (){ return this.infoRecuadroTextoInfo                       } 
    getInfoRecuadroTextoInfoFontSize                (){ return this.infoRecuadroTextoInfoFontSize               }
    getInfoRecuadroTextoInfoFontWeight              (){return  this.infoRecuadroTextoInfoFontWeight             }
    getInfoRecuadroTextoInfoFontStyle               (){ return this.infoRecuadroTextoInfoFontStyle              }
    getInfoRecuadroTextoInfoColor                   (){ return this.infoRecuadroTextoInfoColor                  } 

    //info IVA
    getInfoIvaPadding                               (){ return this.infoIvaPadding                              } 
    getInfoIvaBackGroundColor                       (){ return this.infoIvaBackGroundColor                      } 
    getInfoIvaTextoInfo                             (){ return this.infoIvaTextoInfo                            } 
    getInfoIvaFontSize                              (){ return this.infoIvaFontSize                             } 
    getInfoIvaColor                                 (){ return this.infoIvaColor                                }

    //Valor del precio
    getValorNumero                                  (){ return this.valorNumero                                 }
    getvalorNumeroFontSize                          (){ return this.valorNumeroFontSize                         }
    getValorNumeroWeight()                                                     
    { if(Cypress.config("viewportWidth") < 768){
        
        return  this.valorNumeroFontWeightMobile
    }else {
        return this.valorNumeroFontWeight
    }                                              
    } 
    getValorNumeroFontStyle                         (){ return this.valorNumeroFontStyle                        }
    getValorNumeroColor                             (){ return this.valorNumeroColor                            }

    //Boton quiero este plan
    getBotonBorderRadius                            (){ return this.botonBorderRadius                           } 
    getBotonBackGroundColor                         (){ return this.botonBackGroundColor                        } 
    getBotonTextoQuiero                             (){ return this.botonTextoQuiero                            } 
    getBotonTextoFontSize                           (){ return this.botonTextoFontSize                          }
    getBotonTextoFontWeight                         (){ return this.botonTextoFontWeight                        }
    getBotonTextoFontStyle                          (){ return this.botonTextoFontStyle                         }
    getBotonTextoColor                              (){ return this.botonTextoColor                             } 
}