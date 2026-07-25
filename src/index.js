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

// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log("hello", i);
// }
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }
// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// let person = {
//   name: "twana",
//   age: 26,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// const colors = ["red", "green", "blue"];
// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// let i = 0;
// while (i <= 10) {
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     console.log("even");

//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let numOne = 1;
// let numTwo = 3;
// function maximum(numOne, numTwo) {
//   let max;
//   let min;
//   if (numOne > numTwo) {
//     max = numOne;
//     min = numTwo;
//     console.log(max);
//   } else if (numOne === numTwo) console.log("equal numbers");
//   else {
//     max = numTwo;
//     min = numOne;
//     console.log(max);
//   }
// }
// maximum(7, 99);

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log(max(8, 7));

// function isLandscape(width, height) {
//   return width > height;
// }
// console.log(isLandscape(13, 1));

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 === 0) return "Fizz";
//   return input;
// }
// const output = fizzBuzz("efe");
// console.log(output);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     // if (i % 2 === 0) console.log(i, "even");
//     // else console.log(i, "odd");
//     // console.log(i % 2 === 0 ? i + " EVEN" : i + " ODD");
//     let type = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, type);
//   }
// }
// showNumbers(10);

// function countTruthy(array) {
//   let count = 0;
//   for (let item of array) {
//     if (item) {
//       count++;
//       console.log(item);
//     }
//   }
//   return count;
// }

// console.log(countTruthy([1, 2, 3, false, undefined, "aa"]));

// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// function showProperties(movie) {
//   for (prop in movie) {
//     if (typeof movie[prop] === "string") console.log(prop, movie[prop]);
//   }
// }
// showProperties(movie);

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0) sum = sum + i;

//   return sum;
// }

// function checkSpeed(speed) {
//   speed = speed / 10;
//   let point = 0;
//   if (speed < 7.5) console.log("ok");
//   if (speed >= 13) {
//     console.log("Licence suspended");
//   }
//   if (speed >= 7.5) {
//     let current = speed - 7;
//     let addp = (current * 10) / 5;

//     point += Math.floor(addp);
//     console.log(point);
//   }
// }
// checkSpeed(800);
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed < speedLimit + kmPerPoint) {
//     console.log("ok");
//     return;
//   }

//   const point = Math.floor((speed - speedLimit) / kmPerPoint);

//   if (point >= 12) console.log("License Suspended");
//   else console.log("Point: ", point);
// }
// showStars(5);
// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// showPrime(20);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;
//   return true;
// }

// const marks = [81, 89, 99];
// function calculateGrade(marks) {
//   let totalMark = 0;
//   for (letitem of marks) totalMark += item;

//   let averageMark = totalMark / marks.length;

//   averageMark = Math.round(averageMark);

//   if (averageMark < 60) return "F";
//   if (averageMark < 70) return "D";
//   if (averageMark < 80) return "C";
//   if (averageMark < 90) return "B";
//   return "A";
// }
// console.log(calculateGrade(marks));

// showPrime(20);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }
// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;

//   return true;
// }
// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       console.log("draw");
//     },
//   };
// }
// const c1 = createCircle(1);
// console.log(c1);
// const c2 = createCircle(2);

// console.log(c2);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const circle = new Circle(1, (d = 3));
// circle.d = d;
// delete circle.radius;
// console.log(circle);

// const circle = {
//   radius: 1,
// };
// circle.color = "yellow";
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;
// console.log(circle);

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);

// let obj = { number: 10 };
// function increase2(obj) {
//   obj.number++;
// }
// increase2(obj);
// console.log(obj);
// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// const circle1 = { ...circle };

// console.log(circle1);

// const message = "This is my first message";
// console.log(message.split(" "));

// const address = {
//   street: "shahidan",
//   city: "koya",
//   zipCode: 99,
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }
// showAddress(address);

// function Address2(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }
// const fac = new Address2("shahidan", "koya", 99);
// console.log(fac);

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }
// const address1 = new Address("shahidan", "koya", 99);
// const address2 = new Address("shahidan", "koya", 99);
// const address3 = address1;

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }
// function areSame(address1, address2) {
//   return address1 === address2;
// }
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// const blogPost = {
//   title: "a",
//   body: "s",
//   author: "dfs",
//   views: 10,
//   comments: [
//     {
//       author: "dsf",
//       body: "sdfdfs",
//     },
//     {
//       author: "dsf",
//       body: "sdfdfs",
//     },
//   ],
//   isLive: false,
// };
// console.log(blogPost);

// function Post(title, author, body) {
//   ((this.title = title),
//     (this.author = author),
//     (this.body = body),
//     (this.comments = []),
//     (this.isLive = false),
//     (this.views = 0));
// }
// const post = new Post("a", "b", "d");
// console.log(post);

// const priceRange = [
//   { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
//   { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];
// let restaurants = [
//   {
//     averagePerPerson: 5,
//     name: "arabana",
//   },
//   {
//     averagePerPerson: 15,
//     name: "kntaki",
//   },
// ];
// for (let restaurant of restaurants)
//   if (restaurant.averagePerPerson > 10) console.log(restaurant.name);

// const number = [3, 4];
// number.push(5, 6);
// number.unshift(1, 2);
// number.splice(2, 0, "a", "b");
// console.log(number);

//logistic
//payment
//hr
//marketing
//promoter
//attorney
//economic ( manager, funding)

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1));

// const course = [
//   { id: 0, name: "a" },
//   { id: 1, name: "b" },
// ];
// console.log(course.find((element) => element.name === "b"));

// //End
// const last = numbers.pop();

// //beginning
// const first = numbers.shift();

// const a = numbers.splice(2, 2);

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // numbers = [];
// numbers.length = 0;

// console.log(another);

// console.log(numbers);

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = ["d", ...first, "a", ...second];
// console.log(combined);

// const sliced = combined.slice(2);
// console.log(sliced);

// const number = [1, 2, 3];
// number.forEach((element, index) => console.log(index, element));

// const joined = numbers.join(",");

// console.log(joined);

// const message = "This is my first message";
// const split = message.split(" ");
// console.log(split);
// const combined = split.join("-");
// console.log(combined);

// const numbers = [2, 3, 1];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// // course.sort((a, b) => a.id - b.id);
// course.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
// console.log(course);

// const allPositive = numbers.every((element) => element >= 0);
// console.log(allPositive);
// const somePositive = numbers.some((element) => element >= 0);
// console.log(somePositive);

// console.log(course.filter((n) => n.name.startsWith("r")));
// const mapped = newArr.map((n) => "<li>" + n + "</li>");
// const lists = "<ul>" + mapped.join("") + "</ul>";
// console.log(lists);

// const mapped = numbers
// .filter((n) => n >= 0)
// .map((n) => ({
//     value: n,
//   }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
//   console.log(mapped);

// const result = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
// );
// console.log(result);

const course = [
  // const result = course.reduce((accumulator, currentValue) => {
  //  return accumulator + currentValue.id;
  // }, 0);
  // console.log(result);
  // const numbers = arraFromRange(1, 4);
  // console.log(numbers);

  // function arraFromRange(min, max) {
  //   let range = [];
  //   for (let i = min; i <= max; i++) range.push(i);
  //   return range;
  // }
  { id: 1, name: "js" },
  { id: 0, name: "react js" },
];

// console.log(includes(numbers, 1));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;

//   return false;
// }

// console.log(except(numbers, [1, 2]));

// function except(array, excluded) {
//   for (let except of excluded)
//     while (array.includes(except)) {
//       array.splice(array.indexOf(except), 1);
//     }

//   return array;
// }

// function except(array, excluded) {
//   const output = [];
//   for (let except of array) if (!excluded.includes(except)) output.push(except);

//   return output;
// }

// const result = move(numbers, 1, 1);
// console.log(result);

// function move(array, index, offset) {
//   const posision = index + offset;
//   if (posision >= array.length || posision < 0) {
//     console.error("Invalid Offset");
//     return;
//   }

//   const output = [...array];
//   const spliced = output.splice(index, 1)[0];

//   output.splice(posision, 0, spliced);

//   return output;
// }

// const result = countOccurrences(numbers, 1);
// console.log(result);

// function countOccurrences(array, searchElement) {
//   // let count = 0;
//   // for (let element of array) if (element === searchElement) count++;
//   // return count;
//   return array.reduce(
//     (accumulator, currentValue) =>
//       accumulator + (currentValue === searchElement ? 1 : 0),
//     0,
//   );
// }

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   // let max = array[0];
//   // for (let element of array) if (element > max) max = element;
//   // return max;
//   return array.reduce((acc, cur) => (cur > acc ? cur : acc));
// }

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];
// console.log(sortingMovies(movies));

// function sortingMovies(array) {
//   return array
//     .filter((a) => a.year === 2018 && a.rating >= 4)
//     .sort((a, b) => b.rating - a.rating)
//     .map((a) => a.title);
// }

// const move = function walk() {
//   console.log("walk");
// };
// move();

// function sum() {
//   let sum = 0;
//   for (item of arguments) sum += item;

//   return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 10, 1));

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

const person = {
  firstName: "Twana",
  lastName: "Koye",
  fullName: () => `${person.firstName} ${person.lastName}`,
};
console.log(person.fullName());
