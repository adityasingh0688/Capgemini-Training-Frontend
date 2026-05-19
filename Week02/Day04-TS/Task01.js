"use strict";
let counter = 100;
console.log("Counter Value:", counter);
counter += 50;
console.log("Updated Counter:", counter);
function getStudent(id) {
    return {
        studentId: id,
        studentName: `Student-${id}`,
        course: "Computer Science",
        isPlaced: true
    };
}
const student1 = getStudent(101);
console.log("\nStudent Details");
console.log(student1);
let firstName = 'Aditya';
let lastName = "Singh";
let fullName = `${firstName} ${lastName}`;
console.log("\nString Examples");
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);
let isLoggedIn = true;
let hasAdminAccess = false;
console.log("\nBoolean Examples");
console.log("Is Logged In:", isLoggedIn);
console.log("Has Admin Access:", hasAdminAccess);
let employee;
employee = {
    empId: 101,
    empName: "Rahul Sharma",
    designation: "Frontend Developer",
    salary: 45000
};
console.log("\nEmployee Object");
console.log(employee);
let employee2 = {
    empId: 102,
    empName: "Priya Verma",
    designation: "Backend Developer",
    salary: 60000
};
console.log("\nTyped Employee Object");
console.log("Employee Name:", employee2.empName);
console.log("Designation:", employee2.designation);
let vacantPosition;
vacantPosition = {};
console.log("\nVacant Position Object");
console.log(vacantPosition);
let bigNumber = 123456789123456789n;
console.log("\nBigInt Example");
console.log(bigNumber);
