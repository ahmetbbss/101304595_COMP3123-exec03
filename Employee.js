//TODO - Create Employee Module here and export to use in index.js

let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000 }
];

// Function to get all employees
function getAllEmployees() {
    return employees;
}

// Function to get sorted employee names
function getSortedEmployeeNames() {
    const sortedNames = employees.map(employee => `${employee.firstName} ${employee.lastName}`);
    return sortedNames.sort();
}

// Function to get total salary of all employees
function getTotalSalary() {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.Salary, 0);
    return totalSalary;
}

// Export the functions
module.exports = {
    getAllEmployees,
    getSortedEmployeeNames,
    getTotalSalary
};
