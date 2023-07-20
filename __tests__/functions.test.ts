import { capitalize, multiply, fibonacci } from "../functions";
 
test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
 
test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});
 
// Add more test cases for the other functions
test("Fibonacci de un número", () => {
  expect(fibonacci(7)).toBe(13);
  expect(fibonacci(88)).toBe(1100087778366101931);
  expect(fibonacci(31)).toBe(1346269);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(22)).toBe(17711);
});