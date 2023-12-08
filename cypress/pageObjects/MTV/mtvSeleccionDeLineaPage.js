import ColorsData from "../Color/colorDataPage";
const colorData             = new ColorsData();

export default class SeleccionDeLinea {

    //Texto principal
    descripcion             = '.f12rzdkf';
    descripcionTexto        = 'Elegí desde qué cuenta contratar Movistar TV';
    descripcionColor        = colorData.getGrey0();
    descripcionSize         = '18px'
    
    /*
        Dado que la cantidad de línea depende del parque del cliente, los componentes a 
        verificar son los básicos
    */
   // Inicio Línea a seleccionar
    // Recuadro línea ':nth-child(4) > .fmagaco'
    recuadro                = '.fmagaco';
    recuadroPadding         = '16px 0 16px 16px';
    recuadroBorderRadius    = '4px'
    recuadroBorder          = '1px solid ' + colorData.getGrey3();
    recuadroBackgroundColor = colorData.getWhite();
    // Icono con la imagen del produto.
    iconoProducto           = '.fmagaco > .f11rhnrm > :nth-child(1)';
    iconoProductoPadding    = '9px 10px 10px 9px';
    // Promo Recuadro
    promo                   = '.f1r5mb0e';// Hay otra clase que sólo tiene el background .fim09iu
    promoBackgroundColor    = colorData.getPurple();
    // Text de la promo.
    promoText               = '2 MESES DE REGALO';
    promoTextColor          = colorData.getWhite();
    promoTextFontSize       = '12px';
    promoTextFontWeight     = '400';
    promoTextBorderRadius   = '0px 3px 3px';
    promoTextAlignItems     = 'center'
    // Linea
    linea                   = '.fodlaap';
    lineaMargin             = '4px 0 0 16px';
    lineaFontFamily         = 'Roboto';
    lineaFontSize           = '16px';
    lineaFontWeight         = '400';
    lineaFontStretch        = 'normal';
    lineaFontStyle          = 'normal';
    lineaLineHeight         = '1.5';
    lineaLetterSpacing      = 'normal';
    // Plan de la línea
    planLinea               = '.f11wo6nb';
    planLineaFontFamily     = 'Roboto';
    planLineaFontSize       = '14px';
    planLineaFontWeight     = '400';
    planLineaFontStretch    = 'normal';
    planLineaFontStyle      = 'normal';
    planLineaLineHeight     = '1.43';
    planLineaLetterSpacing  = 'normal';
    planLineaColor          = colorData.getGrey1()
    // Icono de selección
    iconoSeleccion          = '.f12w8rj6 > svg';
    iconoSeleccionpadding   = '7px 10px 7px 9px';

    // Métodos  de las clases html de los objetos
    getDescripcion                   (){ return cy.get(this.descripcion)          };
    getRecuadro                      (){ return cy.get(this.recuadro)             };
    getIconoProducto                 (){ return cy.get(this.iconoProducto)        };
    getPromo                         (){ return cy.get(this.promo)                };
    getLinea                         (){ return cy.get(this.linea)                };
    getPlanLinea                     (){ return cy.get(this.planLinea)            };
    getIconoSeleccion                (){ return cy.get(this.iconoSeleccion)       };
    // Métodos de las caracteristicas
    getDescripcionTexto              (){ return this.descripcionTexto             };
    getDescripcionColor              (){ return this.descripcionColor             };
    getDescripcionSize               (){ return this.descripcionSize              };
    getRecuadroPadding               (){ return this.recuadroPadding              };
    getRecuadroBorderRadius          (){ return this.recuadroBorderRadius         };
    getRecuadroBorder                (){ return this.recuadroBorder               };
    getRecuadroBackgroundColor       (){ return this.recuadroBackgroundColor      };
    getIconoProductoPadding          (){ return this.iconoProductoPadding         };
    getPromoBackgroundColor          (){ return this.promoBackgroundColor         };
    getPromoText                     (){ return this.promoText                    };
    getPromoTextColor                (){ return this.promoTextColor               };
    getPromoTextFontSize             (){ return this.promoTextFontSize            };
    getPromoTextFontWeight           (){ return this.promoTextFontWeight          };
    getPromoTextBorderRadius         (){ return this.promoTextBorderRadius        };
    getPromoTextAlignItems           (){ return this.promoTextAlignItems          };
    getLineaMargin                   (){ return this.lineaMargin                  };
    getLineaFontFamily               (){ return this.lineaFontFamily              };
    getLineaFontSize                 (){ return this.lineaFontSize                };
    getLineaFontWeight               (){ return this.lineaFontWeight              };
    getLineaFontStretch              (){ return this.lineaFontStretch             };
    getLineaFontStyle                (){ return this.lineaFontStyle               };
    getLineaLineHeight               (){ return this.lineaLineHeight              };
    getLineaLetterSpacing            (){ return this.lineaLetterSpacing           };
    getPlanLineaFontFamily           (){ return this.planLineaFontFamily          };
    getPlanLineaFontSize             (){ return this.planLineaFontSize            };
    getPlanLineaFontWeight           (){ return this.planLineaFontWeight          };
    getPlanLineaFontStretch          (){ return this.planLineaFontStretch         };
    getPlanLineaFontStyle            (){ return this.planLineaFontStyle           };
    getPlanLineaLineHeight           (){ return this.planLineaLineHeight          };
    getPlanLineaLetterSpacing        (){ return this.planLineaLetterSpacing       };
    getPlanLineaColor                (){ return this.planLineaColor               };
    getIconoSeleccionaPadding        (){ return this.iconoSeleccionPadding        };
};