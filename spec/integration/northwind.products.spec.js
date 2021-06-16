const assert = require("assert");
const Service = require("@sap_oss/odata-library").Service;

describe("Northwind public OData API", () => {

    const ENV = require("../support/env.json");
    const API_URL = ENV.integration.northwindApiUrl;

    var service = new Service(API_URL);

    describe("Products Entity Set", () => {

        it("The number of products should be greater than zero", () => {
            return service.init.then(() => {
                return service.Products.count();
            }).then((countOfProducts) => {
                assert(countOfProducts > 999);
            });
        });
    });
});
