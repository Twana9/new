// console.log("hello world");
// console.log("i like pezza");
// window.alert("this is an alert");
// window.alert("this ");

// let b = 5;
// let c = 12.5;
// let d = "twana";
// console.log(`your age is ${aa}`);
// console.log(`your age is ${d}`);
// console.log(typeof c);
// console.log(typeof d);
// let online = true;
// console.log(!online);
// let students = 31;

// // let extra = students % 2 == 0;
// // ++students;25
// students -= 1;
// console.log(students);

// let age = window.prompt("tell me about your age?");
// age = Number(age);
// age += 1;
// console.log(age);
// let min = 50;
// let max = 100;
// let num = Math.floor(Math.random() * (max - min)) + min;
// console.log(num);

// let nama = "Twana Koye";

// let firstName = nama.slice(0, nama.indexOf(" "));
// let lastName = nama.slice(nama.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);
// console.log(nama.slice(-2));

// let nama = window.prompt("enter a name");

// nama = nama.trim().charAt(0).toUpperCase() + nama.trim().slice(1).toLowerCase();
// console.log(nama);

// let isHappy = false;
// let uSure = false;

// if (isHappy || !uSure) console.log("understood");
// else console.log("not understood");

// let nama;

// while (nama === "" || nama === null) {
//   nama = window.prompt("enter a name");
// }
// console.log(nama);

// do {
//   nama = window.prompt("Enter a name:");
// } while (nama === "" || nama === null);
// console.log(nama);

/////////////////////////////////////////////////////////////////////////////////////////

// let min = 1;
// let max = 100;

// let running = true;
// let attempts = 0;
// let guess;

// let answer = Math.floor(Math.random() * (max - min + 1)) + min;

// while (running) {
//   guess = window.prompt(`enter a number between ${min} and ${max}`);
//   guess = Number(guess);

//   if (isNaN(guess)) window.alert("Enter a number!");
//   else if (guess < min || guess > max) window.alert("invalid number");
//   else {
//     if (guess > answer) {
//       window.alert(`the number is less than ${guess}`);
//       attempts++;
//     } else if (guess < answer) {
//       window.alert(`the number is greater than ${guess}`);
//       attempts++;
//     } else {
//       window.alert(
//         `Congrats, correct answer ${guess} us tried ${attempts} times`
//       );
//       running = false;
//     }
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// let c = window.prompt(`enter a Temperature in Celicis`);
// c = Number(c);

// function cToK(x) {
//   return x + 273;
// }
// window.alert(cToK(c));

///////////////////////////////////////////////////////////////////////////////////////////////////////

// let fruits = ["apple", "orange", "banana", "cocanat"];

// fruits.unshift("twana");
// fruits.sort().reverse();
// console.log(fruits.indexOf("apple"));

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
// for (let fruit of fruits) {
//   console.log(fruit);
// }

////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// let username = "BroCode";
// console.log([...username].join("-"));

// let fruit = ["apple", "orange", "banana"];
// let vegetables = ["carot", "cucumber", "minst"];

// let foods = [...fruit, ...vegetables, "milk"];
// console.log(foods);
////////////////////////////////////////////////

// console.log('hellow world');

// let name ='twana';

// console.log(name);
// let firstName;

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
//  let name = "twana";
//  let age = 26;
//  let isAproved = false;
//  let firstName = undefined;
//  let selectColor = null;
// let person = {
//     name : 'twana',
//     age: 26
// };
// person.name = 'koys';
// //to select an object propery
// let selection = 'name';
// person[selection] = 'aaa';
// console.log(person);

// let selectedColors = ['red','blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);
// console.log();

// function greet(name, lastName){
//     console.log('hello '+name +' '+ lastName);
// }
// greet('twana', 'koya');
// greet('koya', 'twana');

// function square(number){
//     console.log('hi')

//     return number * number

// }

// console.log(square(2))

// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y);

// // console.log(x++);
// // console.log(x);

// console.log(--x);

// let x = 1;
// x /= 5;
// console.log(x);

// relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // equality
// console.log(x === 1);
// console.log(x !== 1);

// console.log(1 === 1);
// console.log("1" === 1);
// console.log(1 == 1);
// console.log(true == 1);
// let points = 10;
// console.log(points > 100 ? "gold" : "silver");

// let hasHighIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = hasHighIncome || goodCreditScore;
// console.log("Eligble for loan ", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log("application refused", applicationRefused);
// let userColor = undefined;
// let defaultColor = "blue";

// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let a = "red";
// let b = "blue";

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);
// let houre
//  = 12;
// if (houre >= 6 && houre < 12) console.log("good morning!");
// else if (houre === 12 || houre < 6) console.log("good afternoon!");
// else console.log("good evening!");

// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("Moderator user");
//     break;

//   default:
//     console.log("unknown user");
// }

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log("hello", i);
}
