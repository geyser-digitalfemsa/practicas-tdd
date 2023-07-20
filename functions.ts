export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
   
export function multiply(a: number, b: number): number {
    return a * b;
}
   
// Add more functions as needed
export function fibonacci(num: number): number {
    // base numerica
    const sol = [0, 1];
    // suma de los números previos
    for (let index = 2; index<= num; index++) {
        sol[index] = sol[index -1] + sol[index - 2];
    }

    return sol[num];
}