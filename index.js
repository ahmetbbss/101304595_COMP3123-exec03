const http = require("http");

// Import Employee Module here
const EmployeeModule = require("./Employee"); // Replace with the actual path to your Employee Module

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === "/Employee") {
            res.writeHead(200, { "Content-Type": "application/json" });
            const allEmployees = EmployeeModule.getAllEmployees();
            res.end(JSON.stringify(allEmployees));
        }

        if (req.url === "/Employee/names") {
            res.writeHead(200, { "Content-Type": "application/json" });
            const sortedNames = EmployeeModule.getSortedEmployeeNames();
            res.end(JSON.stringify(sortedNames));
        }

        if (req.url === "/Employee/totalsalary") {
            res.writeHead(200, { "Content-Type": "application/json" });
            const totalSalary = EmployeeModule.getTotalSalary();
            res.end(JSON.stringify({ total_salary: totalSalary }));
        }
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
