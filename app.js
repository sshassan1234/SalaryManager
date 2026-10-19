
const employees = [];

const designations = [
  "Manager",
  "General Manager (GM)",
  "Operations Manager",
  "Security Guard",
  "Driver",
  "Bike Rider",
  "MVO / Vigilance Officer",
  "Duty Officer",
  "CCTV Operator",
  "Control Room Operator"
];

function addEmployee(name, designation, salary) {
  if (!name || !designation || !designations.includes(designation)) {
    throw new Error("Please enter a valid name and designation.");
  }

  if (salary === "" || !Number.isFinite(Number(salary)) || Number(salary) < 0) {
    throw new Error("Please enter a valid salary.");
  }

  const employee = {
    id: Date.now() + Math.random(),
    name: name.trim(),
    designation: designation,
    salary: Number(salary),
    attendance: [],
    paidLeave: 0,
    unpaidLeave: 0
  };

  employees.push(employee);
  return employee;
}

function calculateSalary(salary, totalDays, unpaidLeave) {
  if (totalDays <= 0) return 0;

  const leave = Math.min(
    totalDays,
    Math.max(0, Number(unpaidLeave) || 0)
  );

  return Math.round(
    Number(salary) * (totalDays - leave) / totalDays
  );
}

function getEmployeesByDesignation(designation) {
  return employees.filter(
    employee => employee.designation === designation
  );
}

function updateEmployeeSalary(id, newSalary) {
  const employee = employees.find(employee => employee.id === id);

  if (!employee) {
    throw new Error("Employee not found.");
  }

  if (newSalary === "" || !Number.isFinite(Number(newSalary)) || Number(newSalary) < 0) {
    throw new Error("Please enter a valid salary.");
  }

  employee.salary = Number(newSalary);
  return employee;
}
