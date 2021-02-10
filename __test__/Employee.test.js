const Employee = require("../lib/Employee");

test("Check employee object", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.id).toBeDefined();
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name).toBeDefined();
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email).toBeDefined();
});

test("Gets employee id", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getId()).toBe(employee.id);
});

test("Gets employee name", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getName()).toBe(employee.name);
});

test("Gets employee email", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getEmail()).toBe(employee.email);
});

test("Gets employee role", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getRole()).toBe(employee.constructor.name);
});
