const Engineer = require("../lib/engineer");

test("Can instantiate Engineer instance", () => {
  const empTest = new Engineer();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Engineer(name);
  expect(empTest.name).toBe(name);
});

test("Can set id with constructor argument", () => {
  const testValue = 100;
  const empTest = new Engineer("Lola", testValue);
  expect(empTest.id).toBe(testValue);
});

test("Can set email with constructor argument", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Engineer("Lola", 1, testValue);
  expect(empTest.email).toBe(testValue);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Engineer(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get id with getId()", () => {
  const testValue = 100;
  const empTest = new Engineer("Lola", testValue);
  expect(empTest.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Engineer("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const empTest = new Engineer("Lucy", 1, "lucy@lucy.com");
  expect(empTest.getRole()).toBe(testValue);
});