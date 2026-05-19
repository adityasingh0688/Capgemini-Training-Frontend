interface BusinessPartner{
    name:string;
    credit:number;
}

interface Identity{
    id:number;
    name:string;
}

interface Contact{
    email:string;
    phone:number;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let emp1:Employee={
    id:1,
    name:"John Doe",
    email:"john@gmail.com",
    phone:1234567890
};

console.log(emp1);

let cust1:Customer={
    name:"Jane",
    credit:5000,
    email:"jane@gmail.com",
    phone:9876543210
};

console.log(cust1);

type SalesEmployee=BusinessPartner & Identity & Contact;

let salesEmp1:SalesEmployee={
    id:2,
    name:"Aditya Singh",
    credit:3000,
    email:"useradityasingh8@gmail.com",
    phone:9026911656
};

console.log(salesEmp1);



type AlphaNumeric = string | number;
//tyoe guard using typeof
function add(a:AlphaNumeric,b:AlphaNumeric):AlphaNumeric{
    if(typeof a === "string"&& typeof b === "string"){
        return a+b;
    }
    else if(typeof a === "number"&&typeof b === "number"){
        return a+b;
    }
    throw new Error("Invalid Types");
}
console.log(add(10,20));
console.log(add("Hello ","TS"));

// TYPE GUARD USING instanceof
class ProductCustomer{
    isCreditAllowed():boolean{
        return true;
    }
}
class Supplier{
    isInStock():boolean{
        return true;
    }
}

type BusinessEntity =ProductCustomer|Supplier;

function processEntity(entity:BusinessEntity){
    if(entity instanceof ProductCustomer){
        console.log("Processing Customer");
        console.log(entity.isCreditAllowed());
    }
    else if(entity instanceof Supplier){
        console.log("Processing Supplier");
        console.log(entity.isInStock());
    }
}

let customer =new ProductCustomer();
let supplier =new Supplier();
processEntity(customer);
processEntity(supplier);


// TYPE GUARD USING in OPERATOR

function isProductCustomer(
    entity:BusinessEntity):string{
    let message = "";
    if("isCreditAllowed" in entity){
        message ="Processing Customer";
    }
    else if("isInStock" in entity){
        message ="Processing Supplier";
    }
    return message;
}

console.log(isProductCustomer(customer));
console.log(isProductCustomer(supplier));


// USER DEFINED TYPE GUARDS

function isSupplier(
    entity:BusinessEntity
): entity is Supplier{

    return entity instanceof Supplier;
}

function isCustomer(
    entity:BusinessEntity
): entity is ProductCustomer{

    return entity instanceof ProductCustomer;
}

function processEntityWithGuard(
    entity:BusinessEntity
):string{

    let message = "";

    if(isCustomer(entity)){
        message =
        "Processing Customer";
    }

    else if(isSupplier(entity)){
        message =
        "Processing Supplier";
    }

    return message;
}

console.log(
    processEntityWithGuard(customer)
);

console.log(
    processEntityWithGuard(supplier)
);

// TYPE ASSERTIONS

let someValue:any ="This is a string";

let strLength1:number =(someValue as string).length;
console.log(strLength1);
let strLength2:number =(<string>someValue).length;
console.log(strLength2);