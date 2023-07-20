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
});