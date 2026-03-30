"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();
