# Stack Overflow Error in Recursive TypeScript Function

This repository demonstrates a potential stack overflow error in a recursive TypeScript function and provides a solution using iteration.

## Problem

The `printNumbers` function uses recursion to print numbers from 1 to `n`. While this works fine for smaller values of `n`, it can lead to a stack overflow error for very large values of `n` because each recursive call adds a new frame to the call stack.  The call stack has limited size, and exceeding that limit causes a stack overflow.

## Solution

The solution replaces the recursive approach with an iterative one, using a `for` loop. This avoids the recursive calls and prevents the stack overflow error.  Iterative solutions are generally preferred when dealing with large datasets or the potential for deep recursion. 

## Usage

1. Clone the repository.
2. Open `bug.ts` to see the code causing the stack overflow.
3. Open `bugSolution.ts` to see the iterative solution.
4. Compile and run the TypeScript code using a TypeScript compiler (tsc) and a Node.js runtime.