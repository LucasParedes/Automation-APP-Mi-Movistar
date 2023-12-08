const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportWidthMobile: 375,
  video: false,
  pageLoadTimeout: 90000, // tiempo de carga de la pagina
  defaultCommandTimeout: 35000,  // tiempo para cada comando en Cypress
  requestTimeout: 90000, // tiempo para que una solicitud HTTP se complete.
  chromeWebSecurity: false, //permite realizar peticiones entre dominios diferentes durante las pruebas
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: '../reports/MiMovistar',
      charts: true,
      reportTitle: 'Regresion APP Mi Movistar',
      reportPageTitle: 'Regresion Lucas',
      timestamp: 'dd-mm-yyyy HH:MM:ss',
      reportFilename: 'MiMovistar',
      saveJson: true,
      saveHtml: true
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      return config;
    },
    retries: 2, //Este comando hace que se re ejecute el caso más de 1 vez si algo falló.
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
  env: {
    urlMiMovistar: 'https://app.movistar.com.ar/',
    urlDashboard: 'route?page=consumptions&token=',
    intercept_master: '**app-cert.movistar.com.ar**',

    //Ingreso OTP/IDP
    urlLoginIdpAni: 'login_B',
    urlLoginIdpMail: 'login_A',

    //Para interceptar los servicios
    requestApiEncrypt: '**/encrypt-ani**',
    requestApiPerfilado: '**/profiling/**',
    requestApiLineas: '**/get-lines**',
    requestSucces: '**success**',
    requestPackagePlan: '**package-plan**',
    requestSubscription: '**subscriptions**',
    requestBauGrilla: '**hard-bundle-plans**',
    requestValidacion: '**validations**',
    requestPacks: '**movistar-tv-packs**',

    //Para validar los servicios

    //https://app.movistar.com.ar/api/refresh-token
    endpointApiPackageSubd: 'https://app.movistar.com.ar/',
    endpointApiPackageDom: 'api/',
    endpointApiPackageRuta: 'refresh-token',

    //https://api-app.movistar.com.ar/movistar-fcd-mtv/v1/tv-service/customer-services/5272914032/package-plan
    endpointApiPackageSubd: 'https://api-app.movistar.com.ar/',
    endpointApiPackageDom: 'movistar-fcd-mtv/',
    endpointApiPackageRuta: 'v1/tv-service/customer-services/',
    endpointApiPackage: '/package-plan',

    //https://api-app.movistar.com.ar/movistar-profiling-facade/profiling/v1/phone-numbers/5272914032
    endpointApiPerfiladoSubd: 'https://api-app.movistar.com.ar/',
    endpointApiPerfiladoDom: 'movistar-profiling-facade/',
    endpointApiPerfiladoRuta: 'profiling/v1/phone-numbers/',

    //https://api-app.movistar.com.ar/movistar-lines-facade/get-lines?documentId=45735121&documentType=DNI&gender=male
    endpointApiLineasSubd: 'https://api-app.movistar.com.ar/',
    endpointApiLineasDom: 'movistar-lines-facade/',
    endpointApiLineasRuta: 'get-lines',
    endpointApiLineasQueryDNI: '?documentId=',
    endpointApiLineasQueryTipoDNI: '&documentType=',
    endpointApiLineasQueryGenero: '&gender=',
  }
});
