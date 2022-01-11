const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const empTest = new Employee();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Employee(name);
  expect(empTest.name).toBe(name);
});

test("Can set id with constructor argument", () => {
  const testValue = 100;
  const empTest = new Employee("Lola", testValue);
  expect(empTest.id).toBe(testValue);
});

test("Can set email with constructor argument", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Employee("Lola", 1, testValue);
  expect(empTest.email).toBe(testValue);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Employee(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get id with getId()", () => {
  const testValue = 100;
  const empTest = new Employee("Lola", testValue);
  expect(empTest.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Employee("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const empTest = new Employee("Lucy", 1, "lucy@lucy.com");
  expect(empTest.getRole()).toBe(testValue);
});