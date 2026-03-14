"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.GetAge = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this._age, " years old."));
    };
    return Customer;
}());
exports.Customer = Customer;
