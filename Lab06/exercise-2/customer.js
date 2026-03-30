"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "";
        this.lastName = "";
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();
