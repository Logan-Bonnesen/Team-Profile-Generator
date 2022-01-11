const Intern = require("../lib/intern");

test("Can instantiate Intern instance", () => {
  const empTest = new Intern();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Intern(name);
  expect(empTest.name).toBe(name);
});

test("Can set id with constructor argument", () => {
  const testValue = 100;
  const empTest = new Intern("Lola", testValue);
  expect(empTest.id).toBe(testValue);
});

test("Can set email with constructor argument", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Intern("Lola", 1, testValue);
  expect(empTest.email).toBe(testValue);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Intern(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get id with getId()", () => {
  const testValue = 100;
  const empTest = new Intern("Lola", testValue);
  expect(empTest.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Intern("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const empTest = new Intern("Lucy", 1, "lucy@lucy.com");
  expect(empTest.getRole()).toBe(testValue);
});