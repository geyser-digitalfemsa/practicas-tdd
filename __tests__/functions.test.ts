import { capitalize, multiply, fibonacci, Calculator } from "../functions";
 
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


// inicio - simulación de dependencia
// Mock
class MyMathMock {
  public add(a:number, b:number): number {
    return a + b;
  }
}

test('Sumar dos números', () => {
  const calculator = new Calculator(new MyMathMock());
  const result = calculator.add(5, 32);
  expect(result).toBe(37);
})
// fin - simulación de dependencia