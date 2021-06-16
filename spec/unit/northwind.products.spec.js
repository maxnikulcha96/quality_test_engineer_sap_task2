const Service = require("@sap_oss/odata-library").Service;

describe("Products Entity Set", () => {

    var northwindApiUrl = "https://services.odata.org/V2/OData/OData.svc/";
    var service = new Service(northwindApiUrl);

    it("The number of products should be greater than zero", () => {
        return service.init.then(() => {
            return service.Products.count();
        }).then((countOfProducts) => {
            expect(countOfProducts).toBeGreaterThan(1111);
        });
    });
});
