const Engineer = require("../lib/engineer");

test("Can create new Engineer", () => {
  const empTest = new Engineer();
  expect(typeof(empTest)).toBe("object");
});

test("Can set name with constructor arguments", () => {
  const name = "Lucy";
  const empTest = new Engineer(name);
  expect(empTest.name).toBe(name);
});

test("Can get name with getName()", () => {
  const testValue = "Lucy";
  const empTest = new Engineer(testValue);
  expect(empTest.getName()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
  const testValue = "lucy@lucy.com";
  const empTest = new Engineer("Lola", 1, testValue);
  expect(empTest.getEmail()).toBe(testValue);
});
