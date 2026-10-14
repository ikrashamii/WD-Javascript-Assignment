// Run with: node index.js

function section(n, title) {
  console.log(`\n===== Program ${n}: ${title} =====`);
}

// 1. Arithmetic operations on two numbers
section(1, "Arithmetic operations");
{
  const a = 20, b = 6;
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
  console.log(`${a} % ${b} = ${a % b}`);
  console.log(`${a} ** ${b} = ${a ** b}`);
}

// 2. Comparison operators
section(2, "Comparison operators");
{
  const a = 10, b = 20;
  console.log(`${a} == ${b}:`, a == b);
  console.log(`${a} === ${b}:`, a === b);
  console.log(`${a} != ${b}:`, a != b);
  console.log(`${a} !== ${b}:`, a !== b);
  console.log(`${a} > ${b}:`, a > b);
  console.log(`${a} < ${b}:`, a < b);
  console.log(`${a} >= ${b}:`, a >= b);
  console.log(`${a} <= ${b}:`, a <= b);
}

// 3. Logical operators (&&, ||, !)
section(3, "Logical operators");
{
  const x = true, y = false;
  console.log("x && y:", x && y);
  console.log("x || y:", x || y);
  console.log("!x:", !x);
  console.log("!y:", !y);
}

// 4. Check whether a number is positive
section(4, "Is the number positive?");
{
  const num = 15;
  if (num > 0) {
    console.log(`${num} is positive`);
  }
}

// 5. Even or odd
section(5, "Even or odd");
{
  const num = 7;
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// 6. Voting eligibility
section(6, "Voting eligibility");
{
  const age = 19;
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// 7. Positive, negative, or zero
section(7, "Positive, negative, or zero");
{
  const num = -5;
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log("The number is zero");
  }
}

// 8. Grade calculator using else-if
section(8, "Grade calculator");
{
  const marks = 82;
  let grade;
  if (marks >= 90) grade = "A+";
  else if (marks >= 80) grade = "A";
  else if (marks >= 70) grade = "B";
  else if (marks >= 60) grade = "C";
  else if (marks >= 50) grade = "D";
  else grade = "F";
  console.log(`Marks: ${marks}, Grade: ${grade}`);
}

// 9. Largest of two numbers
section(9, "Largest of two numbers");
{
  const a = 45, b = 78;
  if (a > b) {
    console.log(`${a} is larger`);
  } else if (b > a) {
    console.log(`${b} is larger`);
  } else {
    console.log("Both numbers are equal");
  }
}

// 10. Leap year
section(10, "Leap year");
{
  const year = 2024;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

// 11. Print numbers 1 to 10
section(11, "Numbers 1 to 10");
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 12. Multiplication table
section(12, "Multiplication table");
{
  const n = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 13. Sum of first N natural numbers
section(13, "Sum of first N natural numbers");
{
  const n = 10;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`Sum of first ${n} natural numbers = ${sum}`);
}

// 14. Even numbers between 1 and 50
section(14, "Even numbers between 1 and 50");
{
  const evens = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) evens.push(i);
  }
  console.log(evens.join(" "));
}

// 15. Count numbers divisible by 3 between 1 and 100
section(15, "Count of numbers divisible by 3 (1-100)");
{
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) count++;
  }
  console.log(`Count = ${count}`);
}

// 16. Largest of three numbers
section(16, "Largest of three numbers");
{
  const a = 12, b = 45, c = 30;
  let largest;
  if (a >= b && a >= c) largest = a;
  else if (b >= a && b >= c) largest = b;
  else largest = c;
  console.log(`Largest of ${a}, ${b}, ${c} is ${largest}`);
}

// 17. Divisible by both 3 and 5
section(17, "Divisible by both 3 and 5");
{
  const num = 45;
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} is divisible by both 3 and 5`);
  } else {
    console.log(`${num} is not divisible by both 3 and 5`);
  }
}

// 18. Factorial using a for loop
section(18, "Factorial");
{
  const n = 5;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(`${n}! = ${fact}`);
}

// 19. Print numbers from 50 to 1
section(19, "Numbers 50 to 1");
{
  const nums = [];
  for (let i = 50; i >= 1; i--) {
    nums.push(i);
  }
  console.log(nums.join(" "));
}

// 20. Sum of odd numbers between 1 and 100
section(20, "Sum of odd numbers (1-100)");
{
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) sum += i;
  }
  console.log(`Sum of odd numbers = ${sum}`);
}
