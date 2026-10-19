
const employees = [];

function addEmployee(name, salary) {
  employees.push({
    id: Date.now(),
    name: name,
    salary: Number(salary),
    attendance: [],
    paidLeave: 0,
    unpaidLeave: 0
  });

  return employees;
}

function calculateSalary(salary, totalDays, unpaidLeave) {
  if (totalDays <= 0) return 0;
  return Math.round(
    salary * Math.max(0, totalDays - unpaidLeave) / totalDays
  );
}
