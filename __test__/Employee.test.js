const Employee = requre("../lib/Employee");

test("Check employee object", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.id).tobeDefined();
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name).tobeDefined();
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email).tobeDefined();
});

test("Gets employee id", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getId()).toBe(employe.id);
});

test("Gets employee name", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getName()).toBe(employe.name);
});

test("Gets employee email", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getEmail()).toBe(employe.email);
});

test("Gets employee role", () => {
  const employee = new Employee(1, "fasika", "fasika@gmail.com");
  expect(employee.getRole()).toBe(employee.constructor.name);
});
