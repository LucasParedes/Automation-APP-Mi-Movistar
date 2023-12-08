import ColorsData from "../../Color/colorDataPage";
const colorData                               = new ColorsData();


export default class InfoDeco {

    //Icono de banner
    bannerDecoIcono                           = 'svg'

    //BannerDeco
    bannerInfoDeco                            = '.fvwh4y'
    bannerDecoBorder                          = 'solid 1px' + colorData.getGrey3()
    bannerDecoBorderRadius                    = '4px'
    bannerDecoBackgroundColor                 = colorData.getWhite()

    //Descripcion - banner
    bannerDescripcion                         = '.fahh4vp'
    bannerDescripcionTexto                    = 'Intentá descargar la app Movistar TV en tu smart TV para verificar que puedas usar el servicio digital. Si no es compatible, necesitás un deco.'
    bannerDescripcionTextoFontSize            = '14px'
    bannerDescripcionTextoFontWeight          = '400'
    bannerDescripcionTextoFontStyle           = 'normal'
    bannerDescripcionTextoColor               = colorData.getGrey1()

    //¿Como se si necesito un deco? - titulo
    tituloComoSeSiNecesitoDeco                = '.f19b8pvd'
    tituloComoSeSiNecesitoDecoTexto           = '¿Cómo sé si necesito un deco?'
    tituloComoSeSiNecesitoDecoTextoFontSize   = '24px'
    tituloComoSeSiNecesitoDecoTextoFontWeight = '300'
    tituloComoSeSiNecesitoDecoTextoFontStyle  = 'normal'
    tituloComoSeSiNecesitoDecoTextoColor      = colorData.getGrey0()

    //Items de respuestas
    itemsIcono                                = '.f1lf5bli'
    itemsTexto                                = '.f1yrwjfo'
    itemsTextoFontSize                        = '16px'
    itemsTextoFontWeight                      = '400'
    itemsTextoFontStyle                       = 'normal'
    itemsTextoColor                           = colorData.getGrey1()
    itemsTextoUno                             = 'Si tenés una TV LED o LCD con puerto HDMI que no es un smart TV.'
    itemsTextoDos                             = 'Si no encontrás la app Movistar TV en la tienda de aplicaciones de tu smart TV.'
    itemsTextoTres                            = 'Si tenés un dispositivo conectado (consola de juegos, decos genéricos o rooteados, etc.) donde no encuentres la app Movistar TV para descargar.'



    // Métodos  de las clases html de los objetos
    getBannerDecoIcono                              (){ return cy.get(this.bannerDecoIcono)                     }    
    getBannerInfoDeco                               (){ return cy.get(this.bannerInfoDeco)                      }    
    getBannerDescripcion                            (){ return cy.get(this.bannerDescripcion)                   }    
    getTituloComoSeSiNecesitoDeco                   (){ return cy.get(this.tituloComoSeSiNecesitoDeco)          }        
    getItemsIcono                                   (){ return cy.get(this.itemsIcono)                          }
    getItemsTexto                                   (){ return cy.get(this.itemsTexto)                          }

    // Métodos de las caracteristicas               
    //BannerDeco                
    getBannerDecoBorder                             (){ return this.bannerDecoBorder                            }    
    getBannerDecoBorderRadius                       (){ return this.bannerDecoBorderRadius                      }    
    getBannerDecoBackgroundColor                    (){ return this.bannerDecoBackgroundColor                   } 

    //Descripcion - banner              
    getBannerDescripcionTexto                       (){ return this.bannerDescripcionTexto                      }    
    getBannerDescripcionTextoFontSize               (){ return this.bannerDescripcionTextoFontSize              } 
    getBannerDescripcionTextoFontStyle              (){ return this.bannerDescripcionTextoFontStyle             }   
    getBannerDescripcionTextoFontWeight             (){ return this.bannerDescripcionTextoFontWeight            } 
    getBannerDescripcionTextoColor                  (){ return this.bannerDescripcionTextoColor                 }

    //¿Como se si necesito un deco? - titulo
    getTituloComoSeSiNecesitoDecoTexto              (){ return this.tituloComoSeSiNecesitoDecoTexto             }    
    getTituloComoSeSiNecesitoDecoTextoFontSize      (){ return this.tituloComoSeSiNecesitoDecoTextoFontSize     }   
    getTituloComoSeSiNecesitoDecoTextoFontStyle     (){ return this.tituloComoSeSiNecesitoDecoTextoFontStyle    } 
    getTituloComoSeSiNecesitoDecoTextoFontWeight    (){ return this.tituloComoSeSiNecesitoDecoTextoFontWeight   }
    getTituloComoSeSiNecesitoDecoTextoColor         (){ return this.tituloComoSeSiNecesitoDecoTextoColor        }    

    //Items de respuestas
    getItemsTextoFontSize                           (){ return this.itemsTextoFontSize                          }
    getItemsTextoFontStyle                          (){ return this.itemsTextoFontStyle                         }
    getItemsTextoFontWeight                         (){ return this.itemsTextoFontWeight                        }
    getItemsTextoColor                              (){ return this.itemsTextoColor                             }
    getItemsTextoUno                                (){ return this.itemsTextoUno                               }    
    getItemsTextoDos                                (){ return this.itemsTextoDos                               }   
    getItemsTextoTres                               (){ return this.itemsTextoTres                              }
}