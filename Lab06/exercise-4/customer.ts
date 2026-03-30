export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }

    greeter(): void {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }

    GetAge(): void {
        console.log(`${this.firstName} ${this.lastName} is ${this._age} years old.`);
    }
}
