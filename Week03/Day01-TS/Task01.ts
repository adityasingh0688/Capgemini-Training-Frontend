function add(a: number, b: number): number {
    return a + b;
}
let sum= add(5, 10);
console.log(`Sum: ${sum}`);

//function with return type void
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

logMessage("This is a log message.");

//function with optional parameter
//optional parameter must come after the required parameters,
// and it is denoted by a '?' symbol after the parameter name.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

//function with default parameter
//default parameters dont need to appear after the required parameters,
// and they are denoted by an '=' symbol followed by the default value.
function greetWithDefault(name: string, greeting: string = "Hello"): string
{
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("Aditya"));
console.log(greetWithDefault("Himanshu", "Good evening"));



function overloadedFunction(param: number | string): number | string {
    if (typeof param === "number") {
        return `You passed a number: ${param}`;
    } else {
        return `You passed a string: ${param}`;
    }
}

console.log(overloadedFunction(42));
console.log(overloadedFunction("Hello"));

class car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let myCar = new car("Toyota", "Camry", 2020);
console.log(myCar.getCarInfo());

class Suv extends car {
    isFourWheelDrive: boolean;

    constructor(make: string, model: string, year: number, isFourWheelDrive: boolean) {
        super(make, model, year);
        this.isFourWheelDrive = isFourWheelDrive;
    }

    getSUVInfo(): string {
        return `${this.getCarInfo()} - Four Wheel Drive: ${this.isFourWheelDrive}`;
    }
}

let mySUV = new Suv("Jeep", "Wrangler", 2021, true);
console.log(mySUV.getSUVInfo());    

//access modifiers
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

let myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current Balance: ${myAccount.getBalance()}`);
