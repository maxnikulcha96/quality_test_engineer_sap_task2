const Service = require("@sap_oss/odata-library").Service;
const environment = require("./support/env.json");

describe("Northwind public OData API | Products Entity Set", function () {

    let url = environment.integration.northwindODataUrl;

    let service = new Service({
        url: url
    });

    it("The number of products should be greater than zero", function () {
        return service.init.then(() => {
            return service.Products.count();
        }).then((countOfProducts) => {
            expect(countOfProducts).toBeGreaterThan(0);
        });
    });
});
