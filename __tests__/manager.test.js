const Manager = require("../lib/manager");

test("Can instantiate Manager instance", () => {
  const empTest = new Manager();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Manager(name);
  expect(empTest.name).toBe(name);
});

test("Can set id with constructor argument", () => {
  const testValue = 100;
  const empTest = new Manager("Lola", testValue);
  expect(empTest.id).toBe(testValue);
});

test("Can set email with constructor argument", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Manager("Lola", 1, testValue);
  expect(empTest.email).toBe(testValue);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Manager(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get id with getId()", () => {
  const testValue = 100;
  const empTest = new Manager("Lola", testValue);
  expect(empTest.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Manager("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const empTest = new Manager("Lucy", 1, "lucy@lucy.com");
  expect(empTest.getRole()).toBe(testValue);
});