function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

// But if n is a very large number, it could cause a stack overflow error
printNumbers(1000000); // This could potentially cause a stack overflow error