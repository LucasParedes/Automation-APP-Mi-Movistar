// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// En tu archivo de configuración de Cypress (por lo general cypress/support/index.js o cypress/support/commands.js)

Cypress.on('uncaught:exception', (err, runnable) => {
    // Permitir que la prueba continúe incluso si hay una excepción no controlada
    return false;
});

Cypress.Commands.add('loginIdp', (ambiente, user, pass) => {
    cy.visit(ambiente)
    cy.get('.f1mibvjw').click({ force: true }) // Ingresar a la APP
    cy.get('.f1fdgj6b').eq(1).click() // Linea Fija/Movil/Fibra
    cy.get('.f1mibvjw.f412tnx').click() // Boton Siguiente
    cy.get('.fcaipju').eq(0).click() // Con DNI
    cy.get('.f1mibvjw.f412tnx').click() // Boton Siguiente
    cy.log('**La url del IDPC corresponde al login por usuario/password**')
    cy.url().should('include', Cypress.env("urlLoginIdpMail"))
    cy.get('#nemail').type(user) // Se escribe el email
    cy.wait(2000)
    cy.get('#npass').type(pass) // Se escribe la pass
    cy.intercept(Cypress.env("requestApiEncrypt")).as('apiEncrypt')
    cy.intercept(Cypress.env("requestApiLineas")).as('apiLineas')
    cy.intercept(Cypress.env("requestApiPerfilado")).as('apiPerfilado')
    cy.intercept(Cypress.env("requestSucces")).as('loginsucces')
    cy.get('#btn-enviar').click() // Boton Enviar
    cy.log('**La pantalla de carga tiene el parámetro email en la url**')
    cy.url().should('include', 'email')
    cy.log('**La Api Encrypt-ani se cargó correctamente**')
    cy.wait('@apiEncrypt')
        .its('response.statusCode')
        .should('eq', 200)
    cy.log('**La Api de líneas se cargó correctamente**')
    cy.wait('@apiLineas')
        .its('response.statusCode')
        .should('eq', 200)
    cy.log('**La Api de Perfilado se cargó correctamente**')
    cy.wait('@apiPerfilado')
        .its('response.statusCode')
        .should('eq', 200)
    cy.log('**El login se realizó con éxito**')
    cy.wait('@loginsucces')
    cy.url().should('include', 'succes')
    cy.get('.f1mibvjw').click() // Se ingresa a la APP
    cy.log('**Se redirigió a la pantalla del Dashboard**')
    cy.url().should('contain', 'consumptions')
    cy.wait(3000)
});

Cypress.Commands.add('irAFlujo', (nombreServicio) => {
    cy.wait(3000)
    const condicion = true;

    condicion
        ? cy.get('.services-card_link__3_Fmv > .fz0oncl').click()
        : cy.get('.services-card_link__2zasT > .fz0oncl').click();

    cy.wait(2000)
    cy.intercept(Cypress.env("requestPackagePlan")).as('apiPackagePlan')
    cy.intercept(Cypress.env("requestSubscription")).as('apiSubscription')
    cy.get('.fodlaap').contains(nombreServicio).click({ force: true })
    cy.wait(3000)
    cy.log('**La Api de Package Plan se cargó correctamente**')
    cy.wait('@apiPackagePlan')
        .its('response.statusCode')
        .should('eq', 200)
});

Cypress.Commands.add('noEntryPoint', (nombreServicio) => {
    cy.wait(3000)
    cy.get('.services-card_link__3_Fmv > .fz0oncl').click()
    cy.wait(2000)
    cy.get('.fodlaap').should('not.contain', nombreServicio);
    cy.wait(2000)
});

Cypress.Commands.add('lineaEnContexto', (text) => {
    cy.wait(1000);
    // Abre la distributiva
    cy.get('.line-selector-container_dropdownController__3kq_8').click();
    // Verificar que la distributiva esté abierta
    cy.get('.line-selector-container_dropdownContent__RoXYz').should('be.visible');
    // Recorre sobre los elementos dentro de la distributiva
    cy.get('.line-selector-container_dropdownContent__RoXYz .fn43ul7 .fodlaap').each(($element) => {
        const textoFormateado = $element.text().replace(/[\s-]|^0+/g, '');
        cy.log('**Texto formateado:**', textoFormateado);
        cy.log('**Texto esperado:**', text);

        // Verifica si el texto formateado incluye el texto esperado
        if (textoFormateado.includes(text)) {
            cy.log('**El texto formateado coincide con el texto esperado. Haciendo clic...**');
            // Hace clic en el elemento que coincide con el texto esperado
            $element.click();
        }
    });
    // Verifica que la distributiva esté cerrada
    cy.get('.line-selector-container_dropdownContent__RoXYz').should('not.be.visible');
});

Cypress.Commands.add('validarApiPackagePlan', (endpointPackagePlan, clienteBuilder) => {
    cy.fixture('responsePackagePlan').then((clientsConfig) => {
        // Verificar que clientsConfig.clients sea un array y tenga elementos
        expect(clientsConfig.clients).to.be.an('array').and.to.have.lengthOf.at.least(1);

        // Buscar la configuración del cliente correspondiente según el BUILDER
        const clientConfig = clientsConfig.clients.find(client => client.builder === clienteBuilder);

        // Verificar que la configuración del cliente existe
        expect(clientConfig).to.exist;
        cy.request({
            method: 'GET',
            url: endpointPackagePlan,
            failOnStatusCode: false,
            headers: {
                'Authorization': 'Bearer ' + Cypress.env('accessToken'),
                'Referer': 'https://app.movistar.com.ar/',
            },
        })
            .then((response) => {
                // Verificar que la solicitud fue exitosa (código 2xx)
                expect(response.status).to.eq(200);

                // Itera sobre los datos esperados cliente en el json y realizar las validaciones
                clientConfig.expectedData.forEach(expectedData => {
                    expect(response.body).to.deep.include(expectedData);
                });
            })
    })
});


Cypress.Commands.add('validarSessionStorageMTV', (ruta) => {
    cy.window().its('sessionStorage').invoke('getItem', 'feature-store').then(sessionData => {
        if (sessionData !== null) {
            const parsedData = JSON.parse(sessionData);

            // Validación específica para movistarTvCart
            cy.wrap(parsedData.movistarTvCart).should('deep.equal', {
                actualPlan: ruta !== 'alta'
                    ? {
                        title: parsedData.movistarTvCart.actualPlan.title,
                        plan: {
                            id: parsedData.movistarTvCart.actualPlan.plan.id,
                            subscriptionType: parsedData.movistarTvCart.actualPlan.plan.subscriptionType,
                            hasCombo: parsedData.movistarTvCart.actualPlan.plan.hasCombo,
                            main_package_id: parsedData.movistarTvCart.actualPlan.plan.main_package_id
                        },
                        mtv: parsedData.movistarTvCart.actualPlan.mtv

                    }
                    : {
                        mtv: parsedData.movistarTvCart.actualPlan.mtv,
                        title: parsedData.movistarTvCart.actualPlan.title,
                        plan: {
                            id: parsedData.movistarTvCart.actualPlan.plan.id,
                            subscriptionType: parsedData.movistarTvCart.actualPlan.plan.subscriptionType,
                            hasCombo: parsedData.movistarTvCart.actualPlan.plan.hasCombo,
                            main_package_id: parsedData.movistarTvCart.actualPlan.plan.main_package_id
                        },
                    },
                ...(ruta !== 'alta'
                    ? { packs: parsedData.movistarTvCart.packs }
                    : {
                        packs: parsedData.movistarTvCart.packs.map((pack) => ({
                            price: pack.price,
                            name: pack.name,
                            description: pack.description,
                            imageSrc: pack.imageSrc,
                            subscriptionId: {
                                mobile: pack.subscriptionId.mobile,
                                landline: pack.subscriptionId.landline
                            },
                            altImage: pack.altImage
                        }))
                    }
                ),
                decos: {
                    price: parsedData.movistarTvCart.decos.price,
                    count: parsedData.movistarTvCart.decos.count
                },
                plan: parsedData.movistarTvCart.plan,
                combo: {
                    id: parsedData.movistarTvCart.combo.id,
                    active: parsedData.movistarTvCart.combo.active,
                    title: parsedData.movistarTvCart.combo.title,
                    description: parsedData.movistarTvCart.combo.description,
                    comboInformation: {
                        label: parsedData.movistarTvCart.combo.comboInformation.label,
                        discount: parsedData.movistarTvCart.combo.comboInformation.discount,
                        information: parsedData.movistarTvCart.combo.comboInformation.information
                    },
                    comboAttributes: [
                        {
                            icon: parsedData.movistarTvCart.combo.comboAttributes[0].icon,
                            label: parsedData.movistarTvCart.combo.comboAttributes[0].label
                        },
                        {
                            icon: parsedData.movistarTvCart.combo.comboAttributes[1].icon,
                            label: parsedData.movistarTvCart.combo.comboAttributes[1].label
                        },
                        {
                            icon: parsedData.movistarTvCart.combo.comboAttributes[2].icon,
                            label: parsedData.movistarTvCart.combo.comboAttributes[2].label
                        }
                    ],
                    price: parsedData.movistarTvCart.combo.price,
                    bannerLink: parsedData.movistarTvCart.combo.bannerLink,
                    primaryPackName: {
                        mobile: parsedData.movistarTvCart.combo.primaryPackName.mobile,
                        landline: parsedData.movistarTvCart.combo.primaryPackName.landline
                    }
                },
                service: {
                    id: parsedData.movistarTvCart.service.id,
                    subscriptionType: parsedData.movistarTvCart.service.subscriptionType,
                    networkTechnologyType: parsedData.movistarTvCart.service.networkTechnologyType,
                    ...(parsedData.movistarTvCart.service.multipleLines !== undefined
                        ? { multipleLines: parsedData.movistarTvCart.service.multipleLines }
                        : {})
                },
                offer: parsedData.movistarTvCart.offer,
                ani: parsedData.movistarTvCart.ani,
                email: parsedData.movistarTvCart.email,
                isValidate: parsedData.movistarTvCart.isValidate
            });
        } else {
            cy.log('sessionData no existe');
        }
    });
});

// commands.js
Cypress.Commands.add('verificarPedidoResumen', (opcionesPedido) => {
    cy.get('.f1f1ygnm > .fi0cxuj').invoke('text').then((textoPrecios) => {
        // Obtener los precios del resumen y formatearlos
        const precios = textoPrecios.split('$').filter(Boolean).map(precio => parseFloat(precio.replace(/[.,]/g, '')));

        // Obtener los valores del pedido y formatearlos
        const pedido = opcionesPedido.map(opcion => parseFloat(opcion.replace('$', '').replace(/[.,]/g, '')));

        // Realizar la comparación para cada precio con el array de pedido
        precios.forEach((precio, index) => {
            expect(precio).to.eq(pedido[index]);
        });

        // Sumar los precios del array
        const sumaValores = precios.reduce((total, valor) => total + valor, 0);

        // Obtener el total esperado y formatear para comparar con la sumatoria del array
        cy.get('.fnltr9a').invoke('text').then((totalTexto) => {
            // Formatear el total para la comparación
            const totalFormateado = totalTexto.replace('$', '').replace(/[.,]/g, '');

            // Mostrar el total en el formato "$9.040,10"
            cy.log(`Total formateado: $${(parseFloat(totalFormateado) / 100).toFixed(2).replace('.', ',')}`);

            // Comparar la suma con el total formateado
            expect(sumaValores).to.eq(parseFloat(totalFormateado));
        });
    });
});


Cypress.Commands.add('obtenerElToken', () => {
    cy.request({
        method: 'POST',
        url: 'https://app.movistar.com.ar/api/refresh-token',
        headers: {
            'Origin': 'https://app.movistar.com.ar',
        },
        body: {
            user_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJncFRtMFVNaVo5TWtMZzZPQ2FXNVNWRE5lYVNZc1BxcUpOcHJ0b2c2M2k0In0.eyJleHAiOjE3MzMzMzQ3MDgsImlhdCI6MTcwMTc5ODcwOSwiYXV0aF90aW1lIjoxNzAxNzk4NzA4LCJqdGkiOiIzYzY5MGYwNS1hNzAyLTRlZjctOGE1Zi0wM2Y2ZTJjMzBlOGEiLCJpc3MiOiJodHRwczovL2FwcC1zc28ubW92aXN0YXIuY29tLmFyL2F1dGgvcmVhbG1zL21vdmlzdGFyLXByb2QiLCJhdWQiOlsiYnJva2VyIiwiYWNjb3VudCJdLCJzdWIiOiI0MGM4MGFlYy1lMmYxLTQzMmUtODAzZS1iZWU0OTRlNmJjM2QiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtaU1vdmlzdGFyd2ViIiwibm9uY2UiOiJiNjk2OWJmMy00OTM1LTQ3NzctYWM3Ni1kNDk2ZTc5NzU1OGIiLCJzZXNzaW9uX3N0YXRlIjoiZmVjNjA0ZGYtNTE0Zi00MzRlLWFhNjYtMDY1YzBiNWUwYThjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2FwcC5tb3Zpc3Rhci5jb20uYXIiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW1vdmlzdGFyLXByb2QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJicm9rZXIiOnsicm9sZXMiOlsicmVhZC10b2tlbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyIsInNpZCI6ImZlYzYwNGRmLTUxNGYtNDM0ZS1hYTY2LTA2NWMwYjVlMGE4YyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW5kZXIiOiJNIiwiZG9jVHlwZSI6IkQiLCJuYW1lIjoiNDU3MzUxMjEgNDU3MzUxMjEiLCJkb2N1bWVudElEIjoiNDU3MzUxMjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiInaWRwLXByb2QuNDU3MzUxMjEuW10gbHVjYXNtcjc2MEBnbWFpbC5jb20nIiwiZ2l2ZW5fbmFtZSI6IjQ1NzM1MTIxIiwiZmFtaWx5X25hbWUiOiI0NTczNTEyMSIsImVtYWlsIjoiYXBwLXNzb0Btb3Zpc3Rhci5jb20uYXIiLCJhY3JfaWRwX21vdmkiOiIzIn0.IGiy9EQ3zaxYEBJi-pYjtp89yixFCaEL8VPttAnMBwwloPx7b70G9MFBLIIdSUeZ_zhozRsWLIJqTHBF_Ay7Cab5A1le3dOaHPFCyHEzRE_YfY8uJrc-JmgtwqI9BBwRUGec9sO-dni0UBGZ3J4cMAP8a6LZqenD6xvQvJQukz7HRlRr_UBZcDApRRTRg7Re2sSNPYDjRGpKvAHUCULvbGTTAqafB2qRZrzowwWAGTK6kcGWptTyvI4hEvZDhDhB6EraGnoqMZ_OzMxzNkGqnukM5-Xtp03oBZf7PRvGS4Q_365I5zw2_Tctakwr6JS8pasArrEHliV7TzBYBS6SCQ",
            access_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXR3NYdDBwN0NURWNFNkZ1c2FCQWNSRlNhaVFqNjFkaFdMdkM3bVJtcUd3In0.eyJleHAiOjE3MDE5MDY4MjcsImlhdCI6MTcwMTkwNTkyNywianRpIjoiYjQ4ZGYzNzItNWEwYS00MzFkLWJiMDYtZTk4ZTgxZWNiOWVkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1tb3Zpc3Rhci1zc28tc2VydmljZS5hcHBzLm9jcHByb2QuY3V5b3JoLnRjbG91ZC5hci9hdXRoL3JlYWxtcy9tb3Zpc3Rhci1wcm9kIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjExNjhiZmM1LWIyNDYtNDg3ZC1hMWU2LTc2NjA3OTgzY2MxNSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjI1MDQ1ZDZkIiwic2Vzc2lvbl9zdGF0ZSI6IjkyZjVlNGNiLTE2OGItNDgyNS1hM2M4LTA4ODZiMzUwNDQ0YyIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiOTJmNWU0Y2ItMTY4Yi00ODI1LWEzYzgtMDg4NmIzNTA0NDRjIiwiY2xpZW50SWQiOiIyNTA0NWQ2ZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjEwLjE2Ni40NC41MCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0yNTA0NWQ2ZCIsImNsaWVudEFkZHJlc3MiOiIxMC4xNjYuNDQuNTAifQ.LtRZXuS_I_cyBEO04IQx523hHpAF_uDtnYLmPx3tRXAmZZ5ClSAkv8jsHjsvQvMDnpFNfwG3cTlAVPdDVGFAVHux7YYW1Vm7Zpv9R3cmIWiIG2flMcQqmiEaIh5i-_gDOy9hJpIHpxaSV4III-2f0-Pyg3tuftI48MajCd9g9wfGyEXskkbexdi1BKZBqS5xudSM-JKUki7R8-eZqhk865oBcC45S5i8ggxax_X8kddPBaRVWKko7-6UoVfjNZU2g682ePlggsqhJX_hOHTHJY4MhncI8EoYxZmr4S9x2ipsA_Ag3f91yMkTGg_n2FDviX6Tovux1-6Pmg129aqHvQ"
        }

    }).then((response) => {
        expect(response.status).to.eq(200);
        const accessToken = response.body.access_token;

        // Almacena el token en el contexto de Cypress para que pueda ser usado en otros archivos
        Cypress.env('accessToken', accessToken);
    });
});


Cypress.Commands.add('validarResponsePerfilado1', (res) => {
    expect(res.body).have.property('customer')
    expect(res.body.customer).have.property('id')
    expect(res.body.customer.id).to.have.length.greaterThan(0)
    expect(res.body.customer).have.property('name')
    expect(res.body.customer.name).to.have.length.greaterThan(0)
    expect(res.body.customer).have.property('segment')
    expect(res.body.customer.segment).have.property('code')
    expect(res.body.customer.segment).have.property('description')

    expect(res.body.customer).have.property('subsegment')
    expect(res.body.customer.subsegment).have.property('code')
    expect(res.body.customer.subsegment).have.property('description')
    expect(res.body.customer.subsegment).have.property('description')

    expect(res.body.customer).have.property('business')
    expect(res.body.customer.business).to.have.length.greaterThan(0)

    expect(res.body).have.property('contacts')
    expect(res.body.contacts[0]).have.property('id')
    expect(res.body.contacts[0].id).to.have.length.greaterThan(0)
    expect(res.body.contacts[0]).have.property('name')
    expect(res.body.contacts[0]).have.property('email')
    expect(res.body.contacts[0]).have.property('gender')
    expect(res.body.contacts[0].gender).have.property('code')
    expect(res.body.contacts[0].gender.code).to.have.length.greaterThan(0)
    expect(res.body.contacts[0].gender).have.property('description')
    expect(res.body.contacts[0].gender.description).to.have.length.greaterThan(0)
    expect(res.body.contacts[0]).have.property('identification_document')
    expect(res.body.contacts[0].identification_document).have.property('id')
    expect(res.body.contacts[0].identification_document).have.property('type')
    expect(res.body.contacts[0].identification_document).have.property('country')
    expect(res.body.contacts[0]).have.property('phone_number')
    expect(res.body.contacts[0].phone_number).to.have.length.greaterThan(0)

    expect(res.body).have.property('subscriber')
    expect(res.body.subscriber).have.property('id')
    expect(res.body.subscriber.id).to.have.length.greaterThan(0)
    expect(res.body.subscriber).have.property('type')
    expect(res.body.subscriber.type).to.have.length.greaterThan(0)
    expect(res.body.subscriber).have.property('status')
    expect(res.body.subscriber.status).to.have.length.greaterThan(0)
})

// Comando para validaciones visuales.
Cypress.Commands.add('screenValidator', (screenshotName, ignoreElements) => {
    // Capturas pantalla personalizada.
    let viewPorts = [
        '320x536',  // Resolucion Mobile S
        '375x536',  // Resolucion Mobile M
        '425x536',  // Resolucion Mobile L
        '768x536',  // Resolucion Tablet
        '1025x536', // Resolucion Notebook
        '1920x1080' // Resolucion Desktop
    ]

    let usableViewport
    let viewPortOption

    usableViewport = Array.from(new Set(viewPorts))
    cy.log("Elementos a ignorar: " + ignoreElements)
    for (let i = 0; i <= usableViewport.length - 1; i++) {
        viewPortOption = usableViewport[i].split('x')
        cy.viewport(parseInt(viewPortOption[0]), parseInt(viewPortOption[1]))
        cy.wait(1000)
        cy.document().toMatchImageSnapshot({
            "imageConfig": {
                "createDiffImage": true,
                "threshold": 0.1,
                "thresholdType": "percent"
            },
            "name": screenshotName + " (" + viewPortOption[0] + "x" + viewPortOption[1] + ") - Blackout",
        })
    }
})

