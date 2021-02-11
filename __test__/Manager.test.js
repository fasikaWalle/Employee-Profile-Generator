const Manager = require("../lib/Manager");
test("Check manager's object", () => {
  const manager = new Manager(1, "fasika", "fasika@gmail.com", 202);
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.officeNumber).toBeDefined();
});

test("Gets manager's role", () => {
  const manager = new Manager(1, "fasika", "fasika@gmail.com", 202);
  expect(manager.getRole()).toBe(manager.constructor.name);
});
