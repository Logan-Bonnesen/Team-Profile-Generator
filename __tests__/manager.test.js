const Manager = require("../lib/manager");

test("Can create new Manager", () => {
  const empTest = new Manager();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Manager(name);
  expect(empTest.name).toBe(name);
});


test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Manager(testValue);
  expect(empTest.getName()).toBe(testValue);
});


test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Manager("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});
