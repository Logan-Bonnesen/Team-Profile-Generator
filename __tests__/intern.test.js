const Intern = require("../lib/intern");

test("Can create new Intern", () => {
  const empTest = new Intern();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Intern(name);
  expect(empTest.name).toBe(name);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Intern(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Intern("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});

