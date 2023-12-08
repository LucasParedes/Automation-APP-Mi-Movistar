import ColorsData from "../../Color/colorDataPage";
const colorData                                 = new ColorsData();


export default class SeleccionDeco {

    //Icono de banner
    bannerDecoIcono                             = '.f1pcbrkf'

    //BannerDeco
    bannerDeco                                  = '.f10ywxbm'
    bannerDecoBorderRadius                      = '4px'
    bannerDecoBorder                            = 'solid 1px' + colorData.getGrey3()
    bannerDecoBackgroundColor                   = colorData.getGrey5()

    //Descripcion - banner
    bannerDescripcion                           = '.fahh4vp'
    bannerDescripcionTexto                      = 'Ya podés descargar la app Movistar TV para disfrutar tu contenido y continuar sin deco.'
    bannerDescripcionTextoFontSize              = '14px'
    bannerDescripcionTextoFontWeight            = '400'
    bannerDescripcionTextoFontStyle             = 'normal'
    bannerDescripcionTextoColor                 = colorData.getGrey1()

    //Como se si necesito un deco - banner
    bannerDecoBotonNecesitoDeco                 = '.f1f023gr'
    bannerDecoBotonNecesitoDecoTexto            = '¿Cómo sé si necesito un deco?'
    bannerDecoBotonNecesitoDecoTextoFontSize    = '14px'
    bannerDecoBotonNecesitoDecoTextoFontWeight  = '500'
    bannerDecoBotonNecesitoDecoTextoFontStyle   = 'normal'
    bannerDecoBotonNecesitoDecoTextoColor       = colorData.getMovistarBlue()

    //Ideal si tu tv no es smart
    smartRecuadro                               = '.f1r5mb0e'
    smartRecuadroBorderRadius                   = '0px 3px 3px'
    smartRecuadroBackGroundColor                = colorData.getAndroidBarsPrimaryPrimaryDark()

    smartRecuadroTexto                          = 'IDEAL SI TU TV NO ES SMART'
    smartRecuadroTextoFontSize                  = '12px'
    smartRecuadroTextoFontWeight                = '400'
    smartRecuadroTextoFontStyle                 = 'normal'
    smartRecuadroTextoColor                     = colorData.getWhite()

    //Titulo MT donde quieras
    titulo                                      = '.fgtfse'
    tituloTexto                                 = '.f12rzdkf'
    tituloTextoDescripcion                      = 'Movistar TV donde quieras'
    tituloTextoDescripcionFontSize              = '18px'
    tituloTextoDescripcionFontWeight            = '300'
    tituloTextoDescripcionFontStyle             = 'normal'
    tituloTextoDescripcionColor                 = colorData.getGrey0()

    //SubTitulo 
    subTitulo                                   = '.fhdsg7j'
    subTituloPadding                            = '6px 24px 6px 16px'
    subTituloBackGroundColor                    = colorData.getTransparente2()

    subTituloTexto                              = '.f1afrtj8'
    subTituloTextoDescripcion                   = 'Si preferís, con un deco por TV podés'
    subTituloTextoDescripcionFontSize           = '14px'
    subTituloTextoDescripcionFontWeight         = '400'
    subTituloTextoDescripcionFontStyle          = 'normal'
    subTituloTextoDescripcionColor              = colorData.getGrey0()

    //bullet
    bulletIcono                                 = '.f1wu72ym'

    bulletRecuadro                              = '.deco-offer_bullet__AzVS7'
    bulletTexto                                 = '.f1fm7bbs'
    bulletTextoDescripcionFontSize              = '14px'
    bulletTextoDescripcionFontWeight            = '400'
    bulletTextoDescripcionFontStyle             = 'normal'
    bulletTextoDescripcionColor                 = colorData.getGrey0()
    bulletTextoDescripcion                      = 'Acceder a Netflix, Amazon, Youtube, Youtube Kids, Disney+ y Star+, ya integrados.'
    bulletTextoDescripcionDos                   = 'Instalar hasta 3 decos por hogar.'

    //Imagen informativa
    imagenInfo                                  = '.deco-offer_imageBanner__38fs1'
    imagenInfoPuesta                            = 'svg'

    //Seleccionar numero de deco
    decoInput                                   = '.deco-offer_inputContainer__2Swkv'
    decoInputColor                              = colorData.getWhite()

    decoInputPrecio                             = '.f1kpgosz'
    decoInputPrecioTexto                        = '$0'
    decoInputPrecioTextoFontSize                = '24px'
    decoInputPrecioTextoFontWeight              = '400'
    decoInputPrecioTextoFontStyle               = 'normal'
    decoInputPrecioTextoColor                   = colorData.getGrey0()

    decoAlMes                                   = '.fz5jfu4'
    decoAlMesTexto                              = '.f134yflt'
    decoAlMesTextoDescripcion                   = 'x deco al mes'
    decoAlMesTextoDescripcionFontSize           = '12px'
    decoAlMesTextoDescripcionFontWeight         = '400'
    decoAlMesTextoDescripcionFontStyle          = 'normal'
    decoAlMesTextoDescripcionColor              = colorData.getGrey1()

    //Cantidad de decos (- {x} +)
    cantidadDecos                               = '.fmatvdq'
    cantidadDecosBotonSacar                     = '.f1inhzw4'
    cantidadDecosBotonSacarBakgroundColor       = colorData.getWhite()
    cantidadDecosBotonSacarBorder               = 'solid 1.5px ' + colorData.getMovistarGreen()
    cantidadDecosBotonSacarBorderRadius         = '5px 0px 0px 5px'

    cantidadDecosNumero                         = '.f987nvo'
    cantidadDecosNumeroFontSize                 = '14px'
    cantidadDecosNumeroColor                    = colorData.getGrey0()

    cantidadDecosBotonAumentar                  = '.f34vq3l'
    cantidadDecosBotonAumentarBakgroundColor    = colorData.getWhite()
    cantidadDecosBotonAumentarBorder            = 'solid 1.5px ' + colorData.getMovistarGreen()
    cantidadDecosBotonAumentarBorderRadius      = '0px 5px 5px 0px'

    //Botones
    //agregar deco y continuar
    botonAgregarDecoInactivo                    = 'button.f1mibvjw.f1ek2a9i[disabled]'
    botonAgregarDecoInactivoBackGroundColor     = colorData.getMovistarGreenLight50()
    botonAgregarDecoInactivoBorderRadius        = '4px'

    botonAgregarDecoActivo                      = '.f1mibvjw.f1ek2a9i'
    botonAgregarDecoActivoBackGroundColor       = colorData.getMovistarGreen()

    botonPrincipalTexto                         = '.fj4bzi8'
    botonPrincipalTextoDescripcion              = 'Agregar deco y continuar'
    botonPrincipalTextoFontSize                 = '16px'
    botonPrincipalTextoFontWeight               = '500'
    botonPrincipalTextoFontStyle                = 'normal'
    botonPrincipalTextoColor                    = colorData.getWhite()
    
    //Continuar sin deco
    botonContinuarSinDeco                       = '.f1mibvjw.f1lvgk8j'
    botonContinuarSinDecoBorderRadius           = '4px'
    botonContinuarSinDecoBorder                 = 'solid 1.5px ' + colorData.getMovistarGreen()

    botonSecundarioTexto                        = '.f1jzwu9'
    botonSecundarioTextoDescripcion             = 'Continuar sin deco'
    botonSecundarioTextoFontSize                = '16px'
    botonSecundarioTextoFontWeight              = '500'
    botonSecundarioTextoFontStyle               = 'normal'
    botonSecundarioTextoColor                   = colorData.getMovistarGreen()



    // Métodos  de las clases html de los objetos
    getBannerDeco                                (){ return cy.get(this.bannerDeco)                             } 
    getBannerDescripcion                         (){ return cy.get(this.bannerDescripcion)                      }     
    getBannerDecoBotonNecesitoDeco               (){ return cy.get(this.bannerDecoBotonNecesitoDeco)            }     
    getSmartRecuadro                             (){ return cy.get(this.smartRecuadro)                          }     
    getTitulo                                    (){ return cy.get(this.titulo)                                 }
    getTituloTexto                               (){ return cy.get(this.tituloTexto)                            }
    getSubTitulo                                 (){ return cy.get(this.subTitulo)                              }    
    getSubTituloTexto                            (){ return cy.get(this.subTituloTexto)                         }
    getBulletIcono                               (){ return cy.get(this.bulletIcono)                            }
    getBulletRecuadro                            (){ return cy.get(this.bulletRecuadro)                         }
    getBulletTexto                               (){ return cy.get(this.bulletTexto)                            }
    getImagenInfo                                (){ return cy.get(this.imagenInfo)                             }
    getDecoInput                                 (){ return cy.get(this.decoInput)                              }
    getDecoInputPrecio                           (){ return cy.get(this.decoInputPrecio)                        }
    getDecoAlMes                                 (){ return cy.get(this.decoAlMes)                              }
    getDecoAlMesTexto                            (){ return cy.get(this.decoAlMesTexto)                         }
    getCantidadDecos                             (){ return cy.get(this.cantidadDecos)                          }    
    getCantidadDecosBotonSacar                   (){ return cy.get(this.cantidadDecosBotonSacar)                }
    getCantidadDecosNumero                       (){ return cy.get(this.cantidadDecosNumero)                    }
    getCantidadDecosBotonAumentar                (){ return cy.get(this.cantidadDecosBotonAumentar)             }
    getBotonPrincipal                            (){ return cy.get(this.botonPrincipalTexto)                    }
    getBotonAgregarDecoInactivo                  (){ return cy.get(this.botonAgregarDecoInactivo)               }
    getBotonAgregarDecoActivo                    (){ return cy.get(this.botonAgregarDecoActivo)                 }
    getBotonContinuarSinDeco                     (){ return cy.get(this.botonContinuarSinDeco)                  }
    getBotonSecundario                           (){ return cy.get(this.botonSecundarioTexto)                   }


    // Métodos de las caracteristicas       
    //Icono de banner       
    getBannerDecoIcono                           (){ return this.bannerDecoIcono                                }  

    //BannerDeco        
    getBannerDecoBorderRadius                    (){ return this.bannerDecoBorderRadius                         }     
    getBannerDecoBorder                          (){ return this.bannerDecoBorder                               } 
    getBannerDecoBackgroundColor                 (){ return this.bannerDecoBackgroundColor                      }  

    //Descripcion - banner      
    getBannerDescripcionTexto                    (){ return this.bannerDescripcionTexto                         }     
    getBannerDescripcionTextoFontSize            (){ return this.bannerDescripcionTextoFontSize                 }
    getBannerDescripcionTextoFontWeight          (){ return this.bannerDescripcionTextoFontWeight               }
    getBannerDescripcionTextoFontStyle           (){ return this.bannerDescripcionTextoFontStyle                }
    getBannerDescripcionTextoColor               (){ return this.bannerDescripcionTextoColor                    }   
    
    //Como se si necesito un deco - banner
    getBannerDecoBotonNecesitoDecoTexto          (){ return this.bannerDecoBotonNecesitoDecoTexto               }     
    getBannerDecoBotonNecesitoDecoTextoFontSize  (){ return this.bannerDecoBotonNecesitoDecoTextoFontSize       }
    getBannerDecoBotonNecesitoDecoTextoFontStyle (){ return this.bannerDecoBotonNecesitoDecoTextoFontStyle      }  
    getBannerDecoBotonNecesitoDecoTextoFontWeight(){ return this.bannerDecoBotonNecesitoDecoTextoFontWeight     }
    getBannerDecoBotonNecesitoDecoTextoColor     (){ return this.bannerDecoBotonNecesitoDecoTextoColor          }  

    //Ideal si tu tv no es smart
    getSmartRecuadroBorderRadius                 (){ return this.smartRecuadroBorderRadius                      }     
    getSmartRecuadroBackGroundColor              (){ return this.smartRecuadroBackGroundColor                   }
    getSmartRecuadroTexto                        (){ return this.smartRecuadroTexto                             }
    getSmartRecuadroTextoFontSize                (){ return this.smartRecuadroTextoFontSize                     }
    getSmartRecuadroTextoFontStyle               (){ return this.smartRecuadroTextoFontStyle                    }
    getSmartRecuadroTextoFontWeight              (){ return this.smartRecuadroTextoFontWeight                   }
    getSmartRecuadroTextoColor                   (){ return this.smartRecuadroTextoColor                        }

    getTituloTextoDescripcion                    (){ return this.tituloTextoDescripcion                         }
    getTituloTextoDescripcionFontSize            (){ return this.tituloTextoDescripcionFontSize                 }
    getTituloTextoDescripcionFontStyle           (){ return this.tituloTextoDescripcionFontStyle                }
    getTituloTextoDescripcionFontWeight          (){ return this.tituloTextoDescripcionFontWeight               }
    getTituloTextoDescripcionColor               (){ return this.tituloTextoDescripcionColor                    }

    //SubTitulo
    getSubTituloMargin                           (){ return this.subTituloMargin                                }
    getSubTituloPadding                          (){ return this.subTituloPadding                               }                      
    getSubTituloBackGroundColor                  (){ return this.subTituloBackGroundColor                       }
    getSubTituloTextoDescripcion                 (){ return this.subTituloTextoDescripcion                      }
    getSubTituloTextoDescripcionFontSize         (){ return this.subTituloTextoDescripcionFontSize              }        
    getSubTituloTextoDescripcionFontStyle        (){ return this.subTituloTextoDescripcionFontStyle             }
    getSubTituloTextoDescripcionFontWeight       (){ return this.subTituloTextoDescripcionFontWeight            }
    getSubTituloTextoDescripcionColor            (){ return this.subTituloTextoDescripcionColor                 }

    //bullet
    getBulletTextoDescripcion                    (){ return this.bulletTextoDescripcion                         }
    getBulletTextoDescripcionDos                 (){ return this.bulletTextoDescripcionDos                      }
    getBulletTextoDescripcionFontSize            (){ return this.bulletTextoDescripcionFontSize                 }
    getBulletTextoDescripcionFontStyle           (){ return this.bulletTextoDescripcionFontStyle                }
    getBulletTextoDescripcionFontWeight          (){ return this.bulletTextoDescripcionFontWeight               }
    getBulletTextoDescripcionColor               (){ return this.bulletTextoDescripcionColor                    }
    
    //Imagen informativa
    getImagenInfoPuesta                          (){ return this.imagenInfoPuesta                               }

     //Seleccionar numero de deco
    getDecoInputColor                            (){ return this.decoInputColor                                 }
    getDecoInputPrecioTexto                      (){ return this.decoInputPrecioTexto                           }
    getDecoInputPrecioTextoFontSize              (){ return this.decoInputPrecioTextoFontSize                   }
    getDecoInputPrecioTextoFontStyle             (){ return this.decoInputPrecioTextoFontStyle                  }
    getDecoInputPrecioTextoFontWeight            (){ return this.decoInputPrecioTextoFontWeight                 }
    getDecoInputPrecioTextoColor                 (){ return this.decoInputPrecioTextoColor                      }

    getDecoAlMesTextoDescripcion                 (){ return this.decoAlMesTextoDescripcion                      }
    getDecoAlMesTextoDescripcionFontSize         (){ return this.decoAlMesTextoDescripcionFontSize              }
    getDecoAlMesTextoDescripcionFontStyle        (){ return this.decoAlMesTextoDescripcionFontStyle             }
    getDecoAlMesTextoDescripcionFontWeight       (){ return this.decoAlMesTextoDescripcionFontWeight            }
    getDecoAlMesTextoDescripcionColor            (){ return this.decoAlMesTextoDescripcionColor                 }

    //Boton Sacar
    getCantidadDecosBotonSacarBakgroundColor     (){ return this.cantidadDecosBotonSacarBakgroundColor          }
    getCantidadDecosBotonSacarBorder             (){ return this.cantidadDecosBotonSacarBorder                  }
    getCantidadDecosBotonSacarBorderRadius       (){ return this.cantidadDecosBotonSacarBorderRadius            }

    //Cantidad de decos (- {x} +)
    getCantidadDecosNumeroFontSize               (){ return this.cantidadDecosNumeroFontSize                    }
    getCantidadDecosNumeroColor                  (){ return this.cantidadDecosNumeroColor                       }
    getCantidadDecosBotonBackGroundColor         (){ return this.cantidadDecosBotonBackGroundColor              }

    getCantidadDecosBotonAumentarBakgroundColor  (){ return this.cantidadDecosBotonAumentarBakgroundColor       }
    getCantidadDecosBotonAumentarBorder          (){ return this.cantidadDecosBotonAumentarBorder               }
    getCantidadDecosBotonAumentarBorderRadius    (){ return this.cantidadDecosBotonAumentarBorderRadius         }



    //Botones agregar o continuar sin deco
    getBotonPrincipalTexto                       (){ return this.botonPrincipalTextoDescripcion                 }
    getBotonPrincipalTextoFontSize               (){ return this.botonPrincipalTextoFontSize                    }
    getBotonPrincipalTextoFontStyle              (){ return this.botonPrincipalTextoFontStyle                   }
    getBotonPrincipalTextoFontWeight             (){ return this.botonPrincipalTextoFontWeight                  }
    getBotonPrincipalTextoColor                  (){ return this.botonPrincipalTextoColor                       }

    getBotonAgregarDecoInactivoBorderRadius      (){ return this.botonAgregarDecoInactivoBorderRadius           }
    getBotonAgregarDecoInactivoBackGroundColor   (){ return this.botonAgregarDecoInactivoBackGroundColor        }

    getBotonAgregarDecoActivoBackGroundColor     (){ return this.botonAgregarDecoActivoBackGroundColor          }

    getBotonSecundarioTextoDescripcion           (){ return this.botonSecundarioTextoDescripcion                           }
    getBotonSecundarioTextoFontSize              (){ return this.botonSecundarioTextoFontSize                   } 
    getBotonSecundarioTextoFontStyle             (){ return this.botonSecundarioTextoFontStyle                  }     
    getBotonSecundarioTextoFontWeight            (){ return this.botonSecundarioTextoFontWeight                 } 
    getBotonSecundarioTextoColor                 (){ return this.botonSecundarioTextoColor                      }
    getBotonContinuarSinDecoBorderRadius         (){ return this.botonContinuarSinDecoBorderRadius              }
    getBotonContinuarSinDecoBorder               (){ return this.botonContinuarSinDecoBorder                    }
}
