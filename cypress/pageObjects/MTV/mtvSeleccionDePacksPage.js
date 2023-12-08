import ColorsData from "../Color/colorDataPage";
const colorData                     = new ColorsData();

export default class SelecionPacks {

    tituloPantalla                  = '.f12rzdkf'
    tituloPantallaValor             = 'Sumá tu contenido favorito'
    tituloPantallaColor             = colorData.getGrey0();
    tituloPantallafontFamily        = 'Roboto';
    tituloPantallafontSize          = '18px';
    tituloPantallafontStyle         = 'normal';
    tituloPantallafontWeight        = '300';

    // el siguiente valor es para verificar la cantidad de packs configurados.
    cantidadPacks                   = '4'

    imagenPack                      = '.pack-card_imageBanner__1CQ0h'
    imagenPackUrl                   = '.pack-card_container__2q4iw > img'
    altPackFutbol                   = 'ESPN Premium y TNT Sports, disponibles con Pack Fútbol.'
    urlImagenPackFutbol             = 'https://mimovistarapp.movistar.com.ar/documents/289260/314057/banner-pack-futbol.jpg/42719bf4-21aa-529f-0c35-57193baf16e5?t=1680185775594'
    altPrime                        = 'Reacher, disponible en Prime.'
    urlImagenPrime                  = 'https://descubri.movistar.com.ar/documents/289260/314057/MTV_Prime_Citadel+%281%29.jpg/319fa273-6ac7-bd36-29be-4f8317e114f4?t=1686927408396'
    altHbo                          = 'Animales fantásticos: los secretos de Dumbledore, disponible con HBO 8Pack.'
    urlImagenHbo                    = 'https://descubri.movistar.com.ar/documents/289260/314057/MTV_HBO_LaCasaDeldragon_Baja.jpg/69b403d0-beed-8312-7920-b1d24490ef6b?t=1686927143914'
    altParamount                    = 'Topgun Maverik, disponible con Paramount+.'
    urlImagenParamount              = 'https://mimovistarapp.movistar.com.ar/documents/289260/314057/banner-pack-paramount.jpg/12a725ba-fa2f-4c6b-e698-0da7494d0e22?t=1680185879447'

    tituloPack                      = '.f1x8cpur'
    tituloPackFutbol                = 'Pack Fútbol'
    tituloPackPrime                 = 'Prime'
    tituloPackHbo                   = 'HBO 8Pack'
    tituloPackParamount             = 'Paramount+'
    tituloPackFontFamily            = 'Roboto'
    tituloPackFontSize              = '16px'
    tituloPackFontStyle             = 'normal'
    tituloPackFontWeight            = '500' // Negrita
    tituloPackColor                 = colorData.getGrey0()

    descripcionPack                 = '.fahh4vp'
    descripcionPackFutbol           = 'Mirá todo el fútbol local sumando TNT Sports y ESPN Premium a tu grilla.'
    descripcionPackPrime            = 'Beneficio para clientes Movistar, con acceso a la app de streaming Prime.'
    descripcionPackHbo              = 'Mucho más de lo que imaginás, sumando 8 canales premium a tu grilla.'
    descripcionPackParamount        = 'Una montaña de entretenimiento para vos, con acceso a la app de streaming Paramount+.'
    descripcionPackFontFamily       = 'Roboto'
    descripcionPackFontSize         = '14px'
    descripcionPackFontStyle        = 'normal'
    descripcionPackFontWeight       = '400'  // Normal
    descripcionPackColor            = colorData.getGrey1()

    recuadroPrecio                  = '.fd2uecg'
    recuadroPrecioBorder            = '1px solid ' + colorData.getGrey3()
    recuadroPrecioBorderRadius      = '4px'
    recuadroPrecioPadding           = '20px 15px'
    //justify-content = 'space-between'

    precio                          = '.f9ua4yg'
    precioValorPackFutbol           = '$4.390'
    precioValorPackPrime            = '$1.390'
    precioValorPackHbo              = '$1.924'
    precioValorPackParamount        = '$599'
    precioFontFamily                = 'Roboto'
    precioFontSize                  = '18px'
    precioFontStyle                 = 'normal'
    precioFontWeight                = '500' // Negrita
    precioColor                     = colorData.getGrey0()

    precioTexto                     = '.f134yflt'
    precioTextoValor                = 'x mes'
    precioTextoFontFamily           = 'Roboto'
    precioTextoFontSize             = '12px'
    precioTextoColor                = colorData.getGrey1()

    checkBox                        = '.f1qfg8wk'
    //cy.get('[data-testid="left-column"] > :nth-child(1) > .pack-card_content__1NEe8 > .pack-card_price__1VZYy > .fd2uecg > .f1qfg8wk')
    checkBoxIcono                   = '.f1qfg8wk > svg'

    separadorPacksId                = '[data-testid="Separador"]' // data-testid
    separadorPacks                  = '.f1hvsuza'
    separadorPacksBackgroundColor   = colorData.getGrey4()

    // Boton Continuar
    botonContinuar                  = '.f1mibvjw.f412tnx'
    botonContinuarBackgroundColor   = colorData.getMovistarGreen()

    botonContinuarTexto             = '.fj4bzi8'
    botonContinuarTextoValor        = 'Continuar'
    botonContinuarTextoColor        = colorData.getWhite()
    botonContinuarTextoFontFamily   = 'Roboto'
    botonContinuarTextoFontSize     = '16px'
    botonContinuarTextoFontStyle    = 'normal'
    botonContinuarTextoFontWeight   = '500'

    getTituloPantalla                   (){return cy.get(this.tituloPantalla)          };
    getImagenPack                       (){return cy.get(this.imagenPack)              };
    getImagenPackUrl                    (){return cy.get(this.imagenPackUrl)           };
    getTituloPack                       (){return cy.get(this.tituloPack)              };
    getDescripcionPack                  (){return cy.get(this.descripcionPack)         };
    getRecuadroPrecio                   (){return cy.get(this.recuadroPrecio)          };
    getPrecio                           (){return cy.get(this.precio)                  };
    getPrecioTexto                      (){return cy.get(this.precioTexto)             };
    getCheckBox                         (){return cy.get(this.checkBox)                };
    getCheckBoxIcono                    (){return cy.get(this.checkBoxIcono)           };
    getSeparadorPacksId                 (){return cy.get(this.separadorPacksId)        };
    getSeparadorPacks                   (){return cy.get(this.separadorPacks)          };
    getBotonContinuar                   (){return cy.get(this.botonContinuar)          };
    getBotonContinuarTexto              (){return cy.get(this.botonContinuarTexto)     };

    getTituloPantallaValor              (){return this.tituloPantallaValor             };
    getTituloPantallaColor              (){return this.tituloPantallaColor             };
    getTituloPantallaFontFamily         (){return this.tituloPantallafontFamily        };
    getTituloPantallaFontSize           (){return this.tituloPantallafontSize          };
    getTituloPantallaFontStyle          (){return this.tituloPantallafontStyle         };
    getTituloPantallaFontWeight         (){return this.tituloPantallafontWeight        };
    getCantidadPacks                    (){return this.cantidadPacks                   };
    getAltPackFutbol                    (){return this.altPackFutbol                   };    
    getAltPrime                         (){return this.altPrime                        };
    getAltHbo                           (){return this.altHbo                          };
    getAltParamount                     (){return this.altParamount                    };
    getUrlImagenPackFutbol              (){return this.urlImagenPackFutbol             };
    getUrlImagenPrime                   (){return this.urlImagenPrime                  };
    getUrlImagenHbo                     (){return this.urlImagenHbo                    };
    getUrlImagenParamount               (){return this.urlImagenParamount              };
    getTituloPackFutbol                 (){return this.tituloPackFutbol                };
    getTituloPackPrime                  (){return this.tituloPackPrime                 };
    getTituloPackHbo                    (){return this.tituloPackHbo                   };
    getTituloPackParamount              (){return this.tituloPackParamount             };
    getTituloPackFontFamily             (){return this.tituloPackFontFamily            };
    getTituloPackFontSize               (){return this.tituloPackFontSize              };
    getTituloPackFontStyle              (){return this.tituloPackFontStyle             };
    getTituloPackFontWeight             (){return this.tituloPackFontWeight            };
    getTituloPackColor                  (){return this.tituloPackColor                 };
    getDescripcionPackFutbol            (){return this.descripcionPackFutbol           };
    getDescripcionPackPrime             (){return this.descripcionPackPrime            };
    getDescripcionPackHbo               (){return this.descripcionPackHbo              };
    getDescripcionPackParamount         (){return this.descripcionPackParamount        };
    getDescripcionPackFontFamily        (){return this.descripcionPackFontFamily       };
    getDescripcionPackFontSize          (){return this.descripcionPackFontSize         };
    getDescripcionPackFontStyle         (){return this.descripcionPackFontStyle        };
    getDescripcionPackFontWeight        (){return this.descripcionPackFontWeight       };
    getDescripcionPackColor             (){return this.descripcionPackColor            };
    getRecuadroPrecioBorder             (){return this.recuadroPrecioBorder            };
    getRecuadroPrecioBorderRadius       (){return this.recuadroPrecioBorderRadius      };
    getRecuadroPrecioPadding            (){return this.recuadroPrecioPadding           };
    getPrecioValorPackFutbol            (){return this.precioValorPackFutbol           };
    getPrecioValorPackPrime             (){return this.precioValorPackPrime            };
    getPrecioValorPackHbo               (){return this.precioValorPackHbo              };
    getPrecioValorPackParamount         (){return this.precioValorPackParamount        };
    getPrecioFontFamily                 (){return this.precioFontFamily                };
    getPrecioFontSize                   (){return this.precioFontSize                  };
    getPrecioFontStyle                  (){return this.precioFontStyle                 };
    getPrecioFontWeight                 (){return this.precioFontWeight                };
    getPrecioColor                      (){return this.precioColor                     };
    getPrecioTextoValor                 (){return this.precioTextoValor                };
    getPrecioTextoFontFamily            (){return this.precioTextoFontFamily           };
    getPrecioTextoFontSize              (){return this.precioTextoFontSize             };
    getPrecioTextoColor                 (){return this.precioTextoColor                };
    getSeparadorPacksBackgroundColor    (){return this.separadorPacksBackgroundColor   };
    getBotonContinuarTextoValor         (){return this.botonContinuarTextoValor        };
    getBotonContinuarTextoColor         (){return this.botonContinuarTextoColor        };
    getBotonContinuarTextoFontFamily    (){return this.botonContinuarTextoFontFamily   };
    getBotonContinuarTextoFontSize      (){return this.botonContinuarTextoFontSize     };
    getBotonContinuarTextoFontStyle     (){return this.botonContinuarTextoFontStyle    };
    getBotonContinuarTextoFontWeight    (){return this.botonContinuarTextoFontWeight   };
}