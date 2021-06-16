const assert = require("assert");
const Service = require("@sap_oss/odata-library").Service;

describe("Northwind public OData API | Products Entity Set", function () {

    const ENV = require("./support/env.json");
    const API_URL = ENV.integration.northwindApiUrl;

    var service = new Service(API_URL);

    it("The number of products should be greater than zero", function () {
        return service.init.then(() => {
            return service.Products.count();
        }).then((countOfProducts) => {
            assert(countOfProducts > 0);
        });
    });
});
