const Employee = require("../lib/Employee");

test("Can create new Employee", () => {
  const empTest = new Employee();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Employee(name);
  expect(empTest.name).toBe(name);
});


test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Employee(testValue);
  expect(empTest.getName()).toBe(testValue);
});


test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Employee("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

