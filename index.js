// This is a comment!
console.log('hello world!');
let FirstName = 'Lydia';
let LastName = 'Pauly';
console.log(FirstName, '+', LastName);
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);


let person = {
  firstName: FirstName,
  age : 30
}

console.log(person.firstName)
console.log(person.age)

let selectedColors = ['red', 'blue'];

selectedColors[5] = 'green'

console.log(selectedColors);

function MyFirstFunction(user_name) {
  console.log('Hello', user_name + '!')
}

MyFirstFunction(person['firstName'])

function SquareMyNumber(number) {
  return number * number
}

console.log(SquareMyNumber(9));
