// ! Take a array of employee object where each object contains properties such as EMP ID, 
// ! EMP Name, EMP Company, EMP salary, & EMP address where EMP address is further having two 
// ! more properties of object such as EMP city, EMP Area print these properties in the form 
//! of the table on the UI by using javascript.

// let userDetails = {
//     EmpId: 1,
//     Empname: "Vaishali",
//     EmpCompany: "Infosys",
//     EmpSalary: "100000",
//     EmpAddress:{
//         EmpCity: "Armoor",
//         EmpArea: "Nizambad",
//     }
// };
// console.log(userDetails);
const empDetails=[
    {empId: "001", empName: "K.Vaishali", empCompany: "TCS", empSalary: "14,00,000", empAddress:{empCity: "Nizambad", empArea: "Armoor"}},
    {empId: "002", empName: "K.Vaibhavi",empCompany: "Osmania", empSalary: "16,00,000",empAddress:{empCity: "Nizambad", empArea: "Armoor"}},
    {empId: "003", empName: "K.Praveen Kumar ",empCompany: "MicroSoft", empSalary: "12,00,000",empAddress:{empCity: "Nizambad", empArea: "Armoor"}}
];
console.log(empDetails);

function makeTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    thead.innerHTML = 
        `<tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Salary</th>
            <th>City</th>
            <th>Area</th>
        </tr>`;

    empDetails.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = 
           `<td>${employee.empId}</td>
            <td>${employee.empName}</td>
            <td>${employee.empCompany}</td>
            <td>${employee.empSalary}</td>
            <td>${employee.empAddress.empCity}</td>
            <td>${employee.empAddress.empArea}</td>`;
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    table.border = "1"; 
    table.style.borderCollapse = "collapse";
    document.body.appendChild(table);
}

makeTable();