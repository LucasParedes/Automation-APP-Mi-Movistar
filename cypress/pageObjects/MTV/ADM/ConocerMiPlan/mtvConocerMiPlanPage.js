import ColorsData from "../../../Color/colorDataPage";
const colorData                             = new ColorsData();


export default class ConocerMiPlanPage{

    //Todo info del plan
    planDetailsRecuadro                     = '.plans_card__1PVub'
    planDetailsRecuadroMargin               = '0 18px'
    planDetailsRecuadroBorder               = '1px solid ' + colorData.getGrey3()
    planDetailsBorderRecuadroBorderRadius   = '8px'
    //Que contenga la img
    imagenPlan                              = '.plans_bigImg__3Q9mJ'
    imagenPlanMarginMobile                  = '0 0 15px'
    //Titulo Principal
    tituloPlanTexto                         = 'div > .fkrf7b5'
    tituloPLanTextoTvMCP                    = 'TV Max Combo+'
    tituloPLanTextoTvMax                    = 'TV Max'
    tituloPLanTextoTvDigiCP                 = 'TV Digital Combo+'
    tituloPlanTextoFontSize                 = '20px'
    tituloPlanTextoFontWeight               = '500'
    tituloPlanTextoFontStyle                = 'normal'
    tituloPlanTextoFontFamily               = 'Roboto'
    tituloPlanTextoColor                    = colorData.getGrey0()
    //Descripcion
    descripcionPlanTexto                    = '.fahh4vp'
    descripcionPlanTextoFontSize            = '14px'
    descripcionPlanTextoFontWeight          = '400'
    descripcionPlanTextoFontStyle           = 'normal'
    descripcionPlanTextoFontFamily          = 'Roboto'
    descripcionPlanTextoColor               = colorData.getGrey1()
    descripcionPlanTextoTvMCP               = 'Lo mejor de la TV con deportes, pelis y series en 98 canales, más Disney+ y Star+.'
    descripcionPlanTextoTvMax               = 'Una programación con 98 canales: pelis, series, noticias, deportes y canales infantiles.'
    descripcionPlanTextoTvDigiCP            = 'Disfrutá 34 canales de noticias, deportes y canales infantiles, más Disney+ y Star+.'
    //Ver Grilla Canales (boton)
    grillaCanales                           = '.f1mibvjw.fy4hndo'
    grillaCanalesBorderRadius               = '4px'
    grillaCanalesBotonTexto                 = '.f1f023gr'
    grillaCanalesBotonTextoVerGrilla        = 'Ver grilla de canales'
    grillaCanalesBotonTextoFontSize         = '14px'
    grillaCanalesBotonTextoFontWeight       = '500'
    grillaCanalesBotonTextoFontStyle        = 'normal'
    grillaCanalesBotonTextoColor            = colorData.getMovistarBlue()
    //Lista del plan (bullets)
    imagenBullet                            = '.fcf5rmo'
    bulletList                              = '.f1g6fr16'
    bulletListTexto                         = '.fa5otep'
    bulletListTextoFontSize                 = '14px'
    bulletListTextoFontWeight               = '500'
    bulletListTextoFontStyle                = 'normal'
    bulletListTextoFontFamily               = 'Roboto'
    bulletListTextoColor                    = colorData.getGrey0()
    bulletListTextoUno                      = 'Sumá packs premium como Pack Fútbol.'
    bulletListTextoDos                      = 'Descargá la app Movistar TV en tu smart TV, tablet o móvil, o mirá desde tu PC y Chromecast.'
    bulletListTextoTres                     = 'Disfrutá de Movistar TV hasta en 2 dispositivos en simultáneo.'
    //Info que no se muestran los decos ni pack premium contratados
    infoParaUsuario                         = '.fahh4vp'
    infoParaUsuarioFontSize                 = '14px'
    infoParaUsuarioFontStyle                = 'normal'
    infoParaUsuarioFontWeight               = '400'
    infoParaUsuarioColor                    = colorData.getGrey1()
    infoParaUsuarioTexto                    = 'No se muestran los packs premium o decos que hayas contratado.'
    //Boton Conocer otros planes
    boton                                   = '.f1mibvjw.fez964e'
    botonBorderRadius                       = '4px'
    botonBackGroundColor                    = colorData.getMovistarGreen()
    botonTexto                              = '.fj4bzi8'
    botonTextoQuiero                        = 'Conocer otros planes'
    botonTextoFontSize                      = '16px'
    botonTextoFontWeight                    = '500'
    botonTextoFontStyle                     = 'normal'
    botonTextoColor                         = colorData.getWhite()
    



    // Métodos  de las clases html de los objetos
    getIconoFlechaDerecha                           (){ return cy.get(this.iconoFlechaDerecha)                  }
    getChipTexto                                    (){ return cy.get(this.chipTexto)                           }
    getPlanDetailsRecuadro                          (){ return cy.get(this.planDetailsRecuadro)                 }
    getImagenPlan                                   (){ return cy.get(this.imagenPlan)                          }
    getTituloPLan                                   (){ return cy.get(this.tituloPLan)                          }
    getTituloPlanTexto                              (){ return cy.get(this.tituloPlanTexto)                     } 
    getDescripcionPlanTexto                         (){ return cy.get(this.descripcionPlanTexto)                } 
    getGrillaCanales                                (){ return cy.get(this.grillaCanales)                       }
    getGrillaCanalesBotonTexto                      (){ return cy.get(this.grillaCanalesBotonTexto)             } 
    getImagenBullet                                 (){ return cy.get(this.imagenBullet)                        }
    getBulletList                                   (){ return cy.get(this.bulletList)                          }
    getBulletListTexto                              (){ return cy.get(this.bulletListTexto)                     } 
    getBoton                                        (){ return cy.get(this.boton)                               }
    getBotonTexto                                   (){ return cy.get(this.botonTexto)                          }
    getInfoParaUsuario                              (){ return cy.get(this.infoParaUsuario)                     }


    
    // Métodos de las caracteristicas

    //Todo info del plan
    getPlanDetailsRecuadroMargin                    (){ return this.planDetailsRecuadroMargin                   }
    getPlanDetailsBorderRecuadroBorderRadius        (){ return this.planDetailsBorderRecuadroBorderRadius       }
    getPlanDetailsRecuadroBorder                    (){ return this.planDetailsRecuadroBorder                   }

    //Que contenga la img
    getImagenPlan                                   (){ return this.imagenPlan                                  }
    getImagenPlanMargin                             (){ return this.imagenPlanMarginMobile                      }

    //Titulo Principal
    getTituloPLanTextoTvMCP                         (){ return this.tituloPLanTextoTvMCP                        } 
    getTituloPLanTextoTvMax                         (){ return this.tituloPLanTextoTvMax                        } 
    getTituloPLanTextoTvDigiCP                      (){ return this.tituloPLanTextoTvDigiCP                     } 
    getTituloPlanTextoFontSize                      (){ return this.tituloPlanTextoFontSize                     }
    getTituloPlanTextoFontWeight                    (){ return this.tituloPlanTextoFontWeight                   }
    getTituloPlanTextoFontStyle                     (){ return this.tituloPlanTextoFontStyle                    }
    getTituloPlanTextoFontFamily                    (){ return this.tituloPlanTextoFontFamily                   }
    getTituloPlanTextoColor                         (){ return this.tituloPlanTextoColor                        } 

    //Descripcion
    getDescripcionPlanTextoFontSize                 (){ return this.descripcionPlanTextoFontSize                }
    getDescripcionPlanTextoFontWeight               (){ return this.descripcionPlanTextoFontWeight              }
    getDescripcionPlanTextoFontStyle                (){ return this.descripcionPlanTextoFontStyle               }
    getDescripcionPlanTextoFontFamily               (){ return this.descripcionPlanTextoFontFamily               }
    getDescripcionPlanTextoColor                    (){ return this.descripcionPlanTextoColor                   } 
    getDescripcionPlanTextoTvMCP                    (){ return this.descripcionPlanTextoTvMCP                   } 
    getDescripcionPlanTextoTvMax                    (){ return this.descripcionPlanTextoTvMax                   } 
    getDescripcionPlanTextoTvDigiCP                 (){ return this.descripcionPlanTextoTvDigiCP                } 

    //Ver Grilla Canales (boton)
    getGrillaCanalesBorderRadius                    (){ return this.grillaCanalesBorderRadius                   } 
    getGrillaCanalesBotonTextoVerGrilla             (){ return this.grillaCanalesBotonTextoVerGrilla            } 
    getGrillaCanalesBotonTextoFontSize              (){ return this.grillaCanalesBotonTextoFontSize             }
    getGrillaCanalesBotonTextoFontWeight            (){ return this.grillaCanalesBotonTextoFontWeight           }          
    getGrillaCanalesBotonTextoFontStyle             (){ return this.grillaCanalesBotonTextoFontStyle            }
    getGrillaCanalesBotonTextoColor                 (){ return this.grillaCanalesBotonTextoColor                } 

    //Lista del plan (bullets)
    getBulletListTextoFontSize                      (){ return this.bulletListTextoFontSize                     }
    getBulletListTextoFontWeight                    (){ return this.bulletListTextoFontWeight                   } 
    getBulletListTextoFontStyle                     (){ return this.bulletListTextoFontStyle                    }
    getBulletListTextoFontFamily                    (){ return this.bulletListTextoFontFamily                   } 
    getBulletListTextoColor                         (){ return this.bulletListTextoColor                        } 
    getBulletListTextoUno                           (){ return this.bulletListTextoUno                          } 
    getBulletListTextoDos                           (){ return this.bulletListTextoDos                          } 
    getBulletListTextoTres                          (){ return this.bulletListTextoTres                         }

    // Info que no se muestran los packs premium
    getIinfoParaUsuarioTexto                        (){ return this.infoParaUsuarioTexto                        }
    getInfoParaUsuarioFontSize                      (){ return this.infoParaUsuarioFontSize                     }
    getIinfoParaUsuarioFontStyle                    (){ return this.infoParaUsuarioFontStyle                    }
    getInfoParaUsuarioFontWeight                    (){ return this.infoParaUsuarioFontWeight                   }
    getIinfoParaUsuarioColor                        (){ return this.infoParaUsuarioColor                        }

    //Boton quiero este plan
    getBotonBorderRadius                            (){ return this.botonBorderRadius                           } 
    getBotonBackGroundColor                         (){ return this.botonBackGroundColor                        } 
    getBotonTextoQuiero                             (){ return this.botonTextoQuiero                            } 
    getBotonTextoFontSize                           (){ return this.botonTextoFontSize                          }
    getBotonTextoFontWeight                         (){ return this.botonTextoFontWeight                        }
    getBotonTextoFontStyle                          (){ return this.botonTextoFontStyle                         }
    getBotonTextoColor                              (){ return this.botonTextoColor                             } 
}