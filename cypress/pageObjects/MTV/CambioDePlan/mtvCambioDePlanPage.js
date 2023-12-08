import ColorData from "../../Color/colorDataPage";
const colorData                                       = new ColorData();

export default class CambioDePlanMtv {

    iconoPlan                                         = '.f16lffg1 undefined undefined > svg';

    // Nombre del plan Actual
    planActual                                        = '.f1eopya9';
    planActualAlignItems                              = 'center';
    planActualJustifyContent                          = 'center';
    planActualGap                                     = '16px';

    planActualTexto                                   = '.f5t2meh';
    planActualTextoValor                              = 'Tenes un plan ';
    planActualTextoColor                              = colorData.getGrey0();
    planActualTextoFontFamily                         = 'Roboto';
    planActualTextoFontSize                           = '18px';
    planActualTextoFontStretch                        = 'normal';
    planActualTextoFontStyle                          = 'normal';
    planActualTextoFontWeight                         = '300';

    // Línea asociado al plan actual de MTV.
    lineaAsociada                                     = '.f1o8r3zd';
    lineaAsociadaAlignItems                           = 'center';
    lineaAsociadaJustifyContent                       = 'center';

    lineaAsociadaTexto                                = '.fjexkk';
    lineaAsociadaTextoValor                           = 'Con la línea';
    lineaAsociadaTextoColor                           = colorData.getGrey0();
    lineaAsociadaTextoFontFamily                      = 'Roboto';
    lineaAsociadaTextoFontSize                        = '16px';
    lineaAsociadaTextoFontStretch                     = 'normal';
    lineaAsociadaTextoFontStyle                       = 'normal';
    lineaAsociadaTextoFontWeight                      = '400';

    // Link para ver el plan actual

    linkPlanActualRecuadro                            = '.f1mibvjw.fy4hndo';
    linkPlanActualRecuadroBackgroundColor             = colorData.getTransparente2();
    linkPlanActualRecuadroBorder                      = 'none';
    linkPlanActualRecuadroPadding                     = '6px 8px';
    linkPlanActualRecuadroAlignItems                  = 'center';
    linkPlanActualRecuadroBorderRadius                = '4px';
    linkPlanActualRecuadroDisplay                     = 'flex';
    linkPlanActualRecuadroJustifyContent              = 'center';

    linkPlanActualTexto                               = '.f1f023gr';
    linkPlanActualTextoValor                          = 'Ver mi plan actual';
    linkPlanActualTextoValorColor                     = colorData.getMovistarBlue();
    linkPlanActualTextoValorFontFamily                = 'Roboto';
    linkPlanActualTextoValorFontSize                  = '14px';
    linkPlanActualTextoValorFontStyle                 = 'normal';
    linkPlanActualTextoValorFontWeight                = '500';
    linkPlanActualTextoValorLetterSpacing             = '0';
    linkPlanActualTextoValorLineHeight                = '20px';
    linkPlanActualTextoValorTextAlign                 = 'center';

    // Texto que se observa entre el plan actual y el plan destino
    textoEstasPorCambiar                              = '.f1yrwjfo';
    textoEstasPorCambiarValor                         = 'Estás por cambiar a';
    textoEstasPorCambiarColor                         = colorData.getGrey1();
    textoEstasPorCambiarFontFamily                    = 'Roboto';
    textoEstasPorCambiarFontSize                      = '16px';
    textoEstasPorCambiarLetterSpacing                 = '0';
    textoEstasPorCambiarLineHeight                    = '24px';
    
    // Componente donde están todos los valores del plan destino
    planDestinoComponente                             = '.f1ffel58';
    planDestinoComponenteAlignItems                   = 'center';
    planDestinoComponenteBackgroundColor              = colorData.getWhite();
    planDestinoComponenteBoxSizing                    = 'border-box';
    planDestinoComponenteDisplay                      = 'flex';
    planDestinoComponenteJustifyContent               = 'space-between';
    planDestinoComponenteMinHeight                    = '64px';

    // Nombre del plan destino
    planDestinoTexto                                  = '.fodlaap';
    planDestinoTextoDigital                           = 'TV Digital';
    planDestinoTextoMax                               = 'TV Max';
    planDestinoTextoDigitalCombo                      = '';
    planDestinoTextoMaxCombo                          = '';
    planDestinoTextoColor                             = colorData.getGrey0();
    planDestinoTextoFontFamily                        = 'Roboto';
    planDestinoTextoFontSize                          = '16px';
    planDestinoTextoFontStyle                         = 'normal';
    planDestinoTextoFontWeight                        = '400';
    planDestinoTextoLetterSpacing                     = '0';
    planDestinoTextoLineHeight                        = '24px';

    // Componente donde están todos los valores del precio del plan destino
    planDestinoPrecioComponente                       = '.fg4npr8 '
    planDestinoPrecioComponenteAlignItems             = 'flex-end';
    planDestinoPrecioComponenteDisplay                = 'flex';
    planDestinoPrecioComponenteFlexDirection          = 'row';
    planDestinoPrecioComponenteJustifyContent         = 'flex-end';
    planDestinoPrecioComponentePaddingLeft            = '11px';

    // Precio del plan destino
    planDestinoPrecio                                 = '.f1je31sv';
    planDestinoPrecioColor                            = colorData.getGrey0();
    planDestinoPrecioFontFamily                       = 'Roboto';
    planDestinoPrecioFontSize                         = '16px';
    planDestinoPrecioFontStretch                      = 'normal';
    planDestinoPrecioFontStyle                        = 'normal';
    planDestinoPrecioFontWeight                       = '500';
    planDestinoPrecioLetterSpacing                    = 'normal';
    planDestinoPrecioLineHeight                       = '1.5';
    planDestinoPrecioTextAlign                        = 'right';

    // leyenda x mes
    planDestinoPrecioTexto                            = '.f1slk9ve'
    planDestinoPrecioTextoValor                       = 'x mes';
    // Separador
    separador                                         = '.f77qmqm'
    separadorBackgroundColor                          = colorData.getGrey4();
    separadorHeight                                   = '1px';
    separadorMargin                                   = '0 16px';
        

    // Mensaje si perdes el combo
    // Recuadro
    mensajePerderComboRecuadroPrincipal               = '.f10ywxbm'; //  change-plan_alert__5BCmX>div
    mensajePerderComboRecuadroPrincipalPadding        = '0';
    mensajePerderComboRecuadroPrincipalBorder         = '1px solid ' + colorData.getGrey3();
    mensajePerderComboRecuadroPrincipalBorderRadius   = '4px';
    // Recuadro 2
    mensajePerderComboRecuadro                        = '.fvwh4y';
    mensajePerderComboRecuadroBackgroundColor         = colorData.getWhite();
    mensajePerderComboRecuadroBorderRadius            = '4px';
    mensajePerderComboRecuadroPadding                 = '8px';
    // Icono
    mensajePerderComboIcono                           = '.f1pcbrkf > svg';
    // Texto
    mensajePerderComboTexto                           = '.fahh4vp';
    mensajePerderComboTextoValor                      = 'Ya no tendrás acceso a Disney+ y Star+, y perderás los beneficios de ese plan.';
    mensajePerderComboColor                           = colorData.getGrey1();
    mensajePerderComboFontFamily                      = 'Roboto';
    mensajePerderComboFontSize                        = '14px';
    mensajePerderComboFontStyle                       = 'normal';
    mensajePerderComboFontWeight                      = 'normal';
    mensajePerderComboLetterSpacing                   = '0';
    mensajePerderComboLineHeight                      = '20px';

    // Mensaje genérico de los Packs
    mensajeGenericoTexto                              = '.fahh4vp';
    mensajeGenericoTextoValor                         = 'Si tenés decos o packs premium, seguirán activos. Los dos meses de regalo corresponden si contratás el servicio por primera vez'
    mensajeGenericoTextoColor                         = colorData.getGrey1();
    mensajeGenericoTextoFontFamily                    = 'Roboto';
    mensajeGenericoTextoFontSize                      = '14px';
    mensajeGenericoTextoFontStyle                     = 'normal';
    mensajeGenericoTextoFontWeight                    = 'normal';
    mensajeGenericoTextoLetterSpacing                 = '0';
    mensajeGenericoTextoÑineHeight                    = '20px';

    //Botones 
    seccionBotones                                    = '.f1l4bex5';
    seccionBotonesDisplay                             = 'flex';
    seccionBotonesFlexDirection                       = 'column';
    seccionBotonesHeight                              = '112px';
    seccionBotonesJustifyContent                      = 'space-between';
    seccionBotonesPadding                             = '16px';

    //Boton Principal
    botonPrincipal                                    = '.f1mibvjw.f1ek2a9i';
    botonPrincipalBackGroundColor                     = colorData.getMovistarGreen();
    botonPrincipalBorder                              = 'none';
    botonPrincipalHeight                              = '152px';
    botonPrincipalPadding                             = '0 16px 0 16px';

    botonPrincipalTexto                               = '.fj4bzi8';
    botonPrincipalTextoValor                          = 'Cambiar de plan';
    botonPrincipalTextocolor                          = colorData.getWhite();
    botonPrincipalTextoFontFamily                     = 'Roboto';
    botonPrincipalTextoFontSize                       = '16px';
    botonPrincipalTextoFontStyle                      = 'normal';
    botonPrincipalTextoFontWeight                     = '500';
    botonPrincipalTextoLetterSpacing                  = '0';
    botonPrincipalTextoLineHeight                     = '24px';
    botonPrincipalTextoTextAlign                      = 'center';
    
    //Boton Secundario
    botonSecundario                                   = '.f1mibvjw.f1lvgk8j'
    botonSecundarioBackgroundColor                    = colorData.getTransparente2();
    botonSecundarioBorder                             = 'solid 1.5px';
    botonSecundarioBorderColor                        = colorData.getMovistarGreen();
    botonSecundarioHeight                             = '48px';
    botonSecundarioMinWidth                           = '152px';
    botonSecundarioSpacity                            = '1';
    botonSecundarioPadding                            = '0 16px 0 16px';
    botonSecundarioTransition                         = 'border-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s';
    botonSecundarioAlignItems                         = 'center';
    botonSecundarioBorderRadius                       = '4px';
    botonSecundarioDisplay                            = 'flex';
    botonSecundarioJustifyContent                     = 'center';

    botonSecundarioTexto                              = '.f1jzwu9'
    botonSecundarioTextoValor                         = 'Conservar mi plan actual'
    botonSecundarioTextoColor                         = colorData.getMovistarGreen();
    botonSecundarioTextoontFamily                     = 'Roboto';
    botonSecundarioTextoFontSize                      = '16px';
    botonSecundarioTextoFontStyle                     = 'normal';
    botonSecundarioTextoFontWeight                    = '500';
    botonSecundarioTextoÑetterSpacing                 = '0';
    botonSecundarioTextoÑineHeight                    = '24px';
    botonSecundarioTextoTextAlign                     = 'center';

    
    // Getters

    /// Nombre del plan Actual
    getPlanActual                                      () {return cy.get(this.planActual                                       )};
    getPlanActualAlignItems                            () {return this.planActualAlignItems                                     };
    getPlanActualJustifyContent                        () {return this.planActualJustifyContent                                 };
    getPlanActualGap                                   () {return this.planActualGap                                            };
    getPlanActualTexto                                 () {return cy.get(this.planActualTexto                                  )};
    getPlanActualTextoValor                            () {return this.planActualTextoValor                                     };
    getPlanActualTextoColor                            () {return this.planActualTextoColor                                     };
    getPlanActualTextoFontFamily                       () {return this.planActualTextoFontFamily                                };
    getPlanActualTextoFontSize                         () {return this.planActualTextoFontSize                                  };
    getPlanActualTextoFontStretch                      () {return this.planActualTextoFontStretch                               };
    getPlanActualTextoFontStyle                        () {return this.planActualTextoFontStyle                                 };
    getPlanActualTextoFontWeight                       () {return this.planActualTextoFontWeight                                };

    getLineaAsociada                                   () {return cy.get(this.lineaAsociada                                    )};
    getLineaAsociadaAlignItems                         () {return this.lineaAsociadaAlignItems                                  };
    getLineaAsociadaJustifyContent                     () {return this.lineaAsociadaJustifyContent                              };
    getLineaAsociadaTexto                              () {return cy.get(this.lineaAsociadaTexto                               )};
    getLineaAsociadaTextoValor                         () {return this.lineaAsociadaTextoValor                                  };
    getLineaAsociadaTextoColor                         () {return this.lineaAsociadaTextoColor                                  };
    getLineaAsociadaTextoFontFamily                    () {return this.lineaAsociadaTextoFontFamily                             };
    getLineaAsociadaTextoFontSize                      () {return this.lineaAsociadaTextoFontSize                               };
    getLineaAsociadaTextoFontStretch                   () {return this.lineaAsociadaTextoFontStretch                            };
    getLineaAsociadaTextoFontStyle                     () {return this.lineaAsociadaTextoFontStyle                              };
    getLineaAsociadaTextoFontWeight                    () {return this.lineaAsociadaTextoFontWeight                             };

    getLinkPlanActualRecuadro                          () {return cy.get(this.linkPlanActualRecuadro                           )};
    getLinkPlanActualRecuadroBackgroundColor           () {return this.linkPlanActualRecuadroBackgroundColor                    };
    getLinkPlanActualRecuadroBorder                    () {return this.linkPlanActualRecuadroBorder                             };
    getLinkPlanActualRecuadroPadding                   () {return this.linkPlanActualRecuadroPadding                            };
    getLinkPlanActualRecuadroAlignItems                () {return this.linkPlanActualRecuadroAlignItems                         };
    getLinkPlanActualRecuadroBorderRadius              () {return this.linkPlanActualRecuadroBorderRadius                       };
    getLinkPlanActualRecuadroDisplay                   () {return this.linkPlanActualRecuadroDisplay                            };
    getLinkPlanActualRecuadroJustifyContent            () {return this.linkPlanActualRecuadroJustifyContent                     };
    getLinkPlanActualTexto                             () {return cy.get(this.linkPlanActualTexto                              )};
    getLinkPlanActualTextoValor                        () {return this.linkPlanActualTextoValor                                 };
    getLinkPlanActualTextoValorColor                   () {return this.linkPlanActualTextoValorColor                            };
    getLinkPlanActualTextoValorFontFamily              () {return this.linkPlanActualTextoValorFontFamily                       };
    getLinkPlanActualTextoValorFontSize                () {return this.linkPlanActualTextoValorFontSize                         };
    getLinkPlanActualTextoValorFontStyle               () {return this.linkPlanActualTextoValorFontStyle                        };
    getLinkPlanActualTextoValorFontWeight              () {return this.linkPlanActualTextoValorFontWeight                       };
    getLinkPlanActualTextoValorLetterSpacing           () {return this.linkPlanActualTextoValorLetterSpacing                    };
    getLinkPlanActualTextoValorLineHeight              () {return this.linkPlanActualTextoValorLineHeight                       };
    getLinkPlanActualTextoValorTextAlign               () {return this.linkPlanActualTextoValorTextAlign                        };

    getTextoEstasPorCambiar                            () {return cy.get(this.textoEstasPorCambiar                             )};
    getTextoEstasPorCambiarValor                       () {return this.textoEstasPorCambiarValor                                };
    getTextoEstasPorCambiarColor                       () {return this.textoEstasPorCambiarColor                                };
    getTextoEstasPorCambiarFontFamily                  () {return this.textoEstasPorCambiarFontFamily                           };
    getTextoEstasPorCambiarFontSize                    () {return this.textoEstasPorCambiarFontSize                             };
    getTextoEstasPorCambiarLetterSpacing               () {return this.textoEstasPorCambiarLetterSpacing                        };
    getTextoEstasPorCambiarLineHeight                  () {return this.textoEstasPorCambiarLineHeight                           };

    getPlanDestinoComponente                            () {return cy.get(this.planDestinoComponente                           )};
    getPlanDestinoComponenteAlignItems                  () {return this.planDestinoComponenteAlignItems                         };
    getPlanDestinoComponenteBackgroundColor             () {return this.planDestinoComponenteBackgroundColor                    };
    getPlanDestinoComponenteBoxSizing                   () {return this.planDestinoComponenteBoxSizing                          };
    getPlanDestinoComponenteDisplay                     () {return this.planDestinoComponenteDisplay                            };
    getPlanDestinoComponenteJustifyContent              () {return this.planDestinoComponenteJustifyContent                     };
    getPlanDestinoComponenteMinHeight                   () {return this.planDestinoComponenteMinHeight                          };

    getPlanDestinoTexto                                 () {return cy.get(this.planDestinoTexto                                )};
    getPlanDestinoTextoDigital                          () {return this.planDestinoTextoDigital                                 };
    getPlanDestinoTextoMax                              () {return this.planDestinoTextoMax                                     };
    getPlanDestinoTextoDigitalCombo                     () {return this.planDestinoTextoDigitalCombo                            };
    getPlanDestinoTextoMaxCombo                         () {return this.planDestinoTextoMaxCombo                                };
    getPlanDestinoTextoColor                            () {return this.planDestinoTextoColor                                   };
    getPlanDestinoTextoFontFamily                       () {return this.planDestinoTextoFontFamily                              };
    getPlanDestinoTextoFontSize                         () {return this.planDestinoTextoFontSize                                };
    getPlanDestinoTextoFontStyle                        () {return this.planDestinoTextoFontStyle                               };
    getPlanDestinoTextoFontWeight                       () {return this.planDestinoTextoFontWeight                              };
    getPlanDestinoTextoLetterSpacing                    () {return this.planDestinoTextoLetterSpacing                           };
    getPlanDestinoTextoLineHeight                       () {return this.planDestinoTextoLineHeight                              };

    getPlanDestinoPrecioComponente                      () {return cy.get(this.planDestinoPrecioComponente                     )};
    getPlanDestinoPrecioComponenteAlignItems            () {return this.planDestinoPrecioComponenteAlignItems                   };
    getPlanDestinoPrecioComponenteDisplay               () {return this.planDestinoPrecioComponenteDisplay                      };
    getPlanDestinoPrecioComponenteFlexDirection         () {return this.planDestinoPrecioComponenteFlexDirection                };
    getPlanDestinoPrecioComponenteJustifyContent        () {return this.planDestinoPrecioComponenteJustifyContent               };
    getPlanDestinoPrecioComponentePaddingLeft           () {return this.planDestinoPrecioComponentePaddingLeft                  };

    getPlanDestinoPrecio                                () {return cy.get(this.planDestinoPrecio                               )};
    getPlanDestinoPrecioColor                           () {return this.planDestinoPrecioColor                                  };
    getPlanDestinoPrecioFontFamily                      () {return this.planDestinoPrecioFontFamily                             };
    getPlanDestinoPrecioFontSize                        () {return this.planDestinoPrecioFontSize                               };
    getPlanDestinoPrecioFontStretch                     () {return this.planDestinoPrecioFontStretch                            };
    getPlanDestinoPrecioFontStyle                       () {return this.planDestinoPrecioFontStyle                              };
    getPlanDestinoPrecioFontWeight                      () {return this.planDestinoPrecioFontWeight                             };
    getPlanDestinoPrecioLetterSpacing                   () {return this.planDestinoPrecioLetterSpacing                          };
    getPlanDestinoPrecioLineHeight                      () {return this.planDestinoPrecioLineHeight                             };
    getPlanDestinoPrecioTextAlign                       () {return this.planDestinoPrecioTextAlign                              };

    getSeparador                                        () {return cy.get(this.separador                                       )};
    getSeparadorBackgroundColor                         () {return this.separadorBackgroundColor                                };
    getSeparadorHeight                                  () {return this.separadorHeight                                         };
    getSeparadorMargin                                  () {return this.separadorMargin                                         };


    getMensajePerderComboRecuadroPrincipal              () {return cy.get(this.mensajePerderComboRecuadroPrincipal             )};
    getMensajePerderComboRecuadroPrincipalPadding       () {return this.mensajePerderComboRecuadroPrincipalPadding              };
    getMensajePerderComboRecuadroPrincipalBorder        () {return this.mensajePerderComboRecuadroPrincipalBorder               };
    getMensajePerderComboRecuadroPrincipalBorderRadius  () {return this.mensajePerderComboRecuadroPrincipalBorderRadius         };

    getMensajePerderComboRecuadro                       () {return cy.get(this.mensajePerderComboRecuadro                      )};
    getMensajePerderComboRecuadroBackgroundColor        () {return this.mensajePerderComboRecuadroBackgroundColor               };
    getMensajePerderComboRecuadroBorderRadius           () {return this.mensajePerderComboRecuadroBorderRadius                  };
    getMensajePerderComboRecuadroPadding                () {return this.mensajePerderComboRecuadroPadding                       };
    
    getMensajePerderComboIcono                          () {return cy.get(this.mensajePerderComboIcono                         )};
    
    getMensajePerderComboTexto                          () {return cy.get(this.mensajePerderComboTexto                         )};
    getMensajePerderComboTextoValor                     () {return this.mensajePerderComboTextoValor                            };
    getMensajePerderComboColor                          () {return this.mensajePerderComboColor                                 };
    getMensajePerderComboFontFamily                     () {return this.mensajePerderComboFontFamily                            };
    getMensajePerderComboFontSize                       () {return this.mensajePerderComboFontSize                              };
    getMensajePerderComboFontStyle                      () {return this.mensajePerderComboFontStyle                             };
    getMensajePerderComboFontWeight                     () {return this.mensajePerderComboFontWeight                            };
    getMensajePerderComboLetterSpacing                  () {return this.mensajePerderComboLetterSpacing                         };
    getMensajePerderComboLineHeight                     () {return this.mensajePerderComboLineHeight                            };

    getMensajeGenericoTexto                             () {return cy.get(this.mensajeGenericoTexto                            )};
    getMensajeGenericoTextoValor                        () {return this.mensajeGenericoTextoValor                               };
    getMensajeGenericoTextoColor                        () {return this.mensajeGenericoTextoColor                               };
    getMensajeGenericoTextoFontFamily                   () {return this.mensajeGenericoTextoFontFamily                          };
    getMensajeGenericoTextoFontSize                     () {return this.mensajeGenericoTextoFontSize                            };
    getMensajeGenericoTextoFontStyle                    () {return this.mensajeGenericoTextoFontStyle                           };
    getMensajeGenericoTextoFontWeight                   () {return this.mensajeGenericoTextoFontWeight                          };
    getMensajeGenericoTextoLetterSpacing                () {return this.mensajeGenericoTextoLetterSpacing                       };
    getMensajeGenericoTextoÑineHeight                   () {return this.mensajeGenericoTextoÑineHeight                          };

    getSeccionBotones                                   () {return cy.get(this.seccionBotones                                  )};
    getSeccionBotonesDisplay                            () {return this.seccionBotonesDisplay                                   };
    getSeccionBotonesFlexDirection                      () {return this.seccionBotonesFlexDirection                             };
    getSeccionBotonesHeight                             () {return this.seccionBotonesHeight                                    };
    getSeccionBotonesJustifyContent                     () {return this.seccionBotonesJustifyContent                            };
    getSeccionBotonesPadding                            () {return this.seccionBotonesPadding                                   };

    getBotonPrincipal                                   () {return cy.get(this.botonPrincipal                                  )};
    getBotonPrincipalBackGroundColor                    () {return this.botonPrincipalBackGroundColor                           };
    getBotonPrincipalBorder                             () {return this.botonPrincipalBorder                                    };
    getBotonPrincipalHeight                             () {return this.botonPrincipalHeight                                    };
    getBotonPrincipalPadding                            () {return this.botonPrincipalPadding                                   };
    getBotonPrincipalTexto                              () {return cy.get(this.botonPrincipalTexto                             )};
    getBotonPrincipalTextoValor                         () {return this.botonPrincipalTextoValor                                };
    getBotonPrincipalTextocolor                         () {return this.botonPrincipalTextocolor                                };
    getBotonPrincipalTextoFontFamily                    () {return this.botonPrincipalTextoFontFamily                           };
    getBotonPrincipalTextoFontSize                      () {return this.botonPrincipalTextoFontSize                             };
    getBotonPrincipalTextoFontStyle                     () {return this.botonPrincipalTextoFontStyle                            };
    getBotonPrincipalTextoFontWeight                    () {return this.botonPrincipalTextoFontWeight                           };
    getBotonPrincipalTextoLetterSpacing                 () {return this.botonPrincipalTextoLetterSpacing                        };
    getBotonPrincipalTextoLineHeight                    () {return this.botonPrincipalTextoLineHeight                           };
    getBotonPrincipalTextoTextAlign                     () {return this.botonPrincipalTextoTextAlign                            };

    getBotonSecundario                                  () {return cy.get(this.botonSecundario                                 )};
    getBotonSecundarioBackgroundColor                   () {return this.botonSecundarioBackgroundColor                          };
    getBotonSecundarioBorder                            () {return this.botonSecundarioBorder                                   };
    getBotonSecundarioBorderColor                       () {return this.botonSecundarioBorderColor                              };
    getBotonSecundarioHeight                            () {return this.botonSecundarioHeight                                   };
    getBotonSecundarioMinWidth                          () {return this.botonSecundarioMinWidth                                 };
    getBotonSecundarioSpacity                           () {return this.botonSecundarioSpacity                                  };
    getBotonSecundarioPadding                           () {return this.botonSecundarioPadding                                  };
    getBotonSecundarioTransition                        () {return this.botonSecundarioTransition                               };
    getBotonSecundarioAlignItems                        () {return this.botonSecundarioAlignItems                               };
    getBotonSecundarioBorderRadius                      () {return this.botonSecundarioBorderRadius                             };
    getBotonSecundarioDisplay                           () {return this.botonSecundarioDisplay                                  };
    getBotonSecundarioJustifyContent                    () {return this.botonSecundarioJustifyContent                           };
    getBotonSecundarioTexto                             () {return cy.get(this.botonSecundarioTexto                            )};
    getBotonSecundarioTextoValor                        () {return this.botonSecundarioTextoValor                               };
    getBotonSecundarioTextoColor                        () {return this.botonSecundarioTextoColor                               };
    getBotonSecundarioTextoontFamily                    () {return this.botonSecundarioTextoontFamily                           };
    getBotonSecundarioTextoFontSize                     () {return this.botonSecundarioTextoFontSize                            };
    getBotonSecundarioTextoFontStyle                    () {return this.botonSecundarioTextoFontStyle                           };
    getBotonSecundarioTextoFontWeight                   () {return this.botonSecundarioTextoFontWeight                          };
    getBotonSecundarioTextoÑetterSpacing                () {return this.botonSecundarioTextoÑetterSpacing                       };
    getBotonSecundarioTextoÑineHeight                   () {return this.botonSecundarioTextoÑineHeight                          };
    getBotonSecundarioTextoTextAlign                    () {return this.botonSecundarioTextoTextAlign                           };

}