"use strict";
let emp1 = {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    phone: 1234567890
};
console.log(emp1);
let cust1 = {
    name: "Jane",
    credit: 5000,
    email: "jane@gmail.com",
    phone: 9876543210
};
console.log(cust1);
let salesEmp1 = {
    id: 2,
    name: "Aditya Singh",
    credit: 3000,
    email: "useradityasingh8@gmail.com",
    phone: 9026911656
};
console.log(salesEmp1);
//tyoe guard using typeof
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid Types");
}
console.log(add(10, 20));
console.log(add("Hello ", "TS"));
// TYPE GUARD USING instanceof
class ProductCustomer {
    isCreditAllowed() {
        return true;
    }
}
class Supplier {
    isInStock() {
        return true;
    }
}
function processEntity(entity) {
    if (entity instanceof ProductCustomer) {
        console.log("Processing Customer");
        console.log(entity.isCreditAllowed());
    }
    else if (entity instanceof Supplier) {
        console.log("Processing Supplier");
        console.log(entity.isInStock());
    }
}
let customer = new ProductCustomer();
let supplier = new Supplier();
processEntity(customer);
processEntity(supplier);
// TYPE GUARD USING in OPERATOR
function isProductCustomer(entity) {
    let message = "";
    if ("isCreditAllowed" in entity) {
        message = "Processing Customer";
    }
    else if ("isInStock" in entity) {
        message = "Processing Supplier";
    }
    return message;
}
console.log(isProductCustomer(customer));
console.log(isProductCustomer(supplier));
// USER DEFINED TYPE GUARDS
function isSupplier(entity) {
    return entity instanceof Supplier;
}
function isCustomer(entity) {
    return entity instanceof ProductCustomer;
}
function processEntityWithGuard(entity) {
    let message = "";
    if (isCustomer(entity)) {
        message =
            "Processing Customer";
    }
    else if (isSupplier(entity)) {
        message =
            "Processing Supplier";
    }
    return message;
}
console.log(processEntityWithGuard(customer));
console.log(processEntityWithGuard(supplier));
// TYPE ASSERTIONS
let someValue = "This is a string";
let strLength1 = someValue.length;
console.log(strLength1);
let strLength2 = someValue.length;
console.log(strLength2);
