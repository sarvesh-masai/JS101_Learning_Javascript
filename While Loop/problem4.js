//Print the average of even numbers from 1 to 100 (both included)
let sum = 0;
let count = 0;
let num = 1;
while (num <= 100) {
  if (num % 2 === 0) {
    sum += num;
    count++;
  }
  num++;
}
const average = sum / count;
console.log(average);