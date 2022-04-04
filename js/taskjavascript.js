// JS V2 block-2  Модуль 2 – Массивы и Функции
// Задача 1 Решение ----------------------------------------------
function checkAge(age) {
    if (age >= 18) { // Change this line
      return "You are an adult";
    }
    return "You are a minor";
  }
// Задача 2 Решение ----------------------------------------------
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    } 
     return "Access denied, wrong password!";
    // Change code above this line
  }
  // Задача 3 Решение ----------------------------------------------
  function checkStorage(available, ordered) {
    // Change code below this line
    if (ordered === 0) {
      return "Your order is empty!";
    } 
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    } 
    return "The order is accepted, our manager will contact you";
    // Change code above this line
  }
  // Задача 4 Решение ----------------------------------------------
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];
  // Задача 5 Решение ----------------------------------------------
  const fruits = ["apple", "plum", "pear", "orange"];
  const firstElement = fruits[0];
  const secondElement = fruits[1];
  const lastElement = fruits[fruits.length - 1];
  // Change code below this line
  // Задача 6 Решение ----------------------------------------------
  const fruits = ["apple", "plum", "pear", "orange"];
  fruits[1]="peach";
  fruits[3]="banana";
  // Write your code under this line  
  // Задача 7 Решение ----------------------------------------------
  const fruits = ["apple", "peach", "pear", "banana"];
  const fruitsArrayLength =  fruits.length
  // Change code below this line
  
  // Задача 8 Решение ----------------------------------------------
  const fruits = ["apple", "peach", "pear", "banana"];
  const lastElementIndex = fruits.length - 1
  const lastElement = fruits[lastElementIndex]
  // Change code below this line
  
  // Задача 9 Решение ----------------------------------------------
  function getExtremeElements(array) {
    // Change code below this line
    const a = array.splice(1, array.length - 2)
   return array;
    // Change code above this line
  }
  
  // Задача 10 Решение ----------------------------------------------
  function splitMessage(message, delimeter) {
    let words = message.split(delimeter);
    // Change code below this line
  
    // Change code above this line
    return words;
  }
  // Задача 11 Решение ----------------------------------------------
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 let b = message.split(" ")
   console.log(b)
   let a = b.length;
   console.log(a)
 let price = a * pricePerWord;
 console.log(price);
 return price;
    // Change code above this line
 }
  // Задача 12 Решение ----------------------------------------------
  function makeStringFromArray(array, delimeter) {
    let string = array.join(delimeter);
    return string;
  }
  // Задача 13 Решение ----------------------------------------------
  function slugify(title) {
    // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
    // Change code above this line
  }
  // Задача 14 Решение ----------------------------------------------
  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
  // Change code below this line
  const firstTwoEls = fruits.slice(0, 2);
  const nonExtremeEls = fruits.slice(1, -1);
  const lastThreeEls = fruits.slice(-3);
  // Задача 15 Решение ----------------------------------------------
  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
  const newClients = ['Peach', 'Houston'];
  
  const allClients = oldClients.concat(newClients) ; // Change this line
  // Задача 16 Решение ----------------------------------------------
  function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const allArray = firstArray.concat(secondArray).slice(0, maxLength);

return allArray;
    // Change code above this line
  }
  // Задача 17 Решение ----------------------------------------------
  const start = 3;
  const end = 7;
  
  for (let i = start; i <= end; i += 1 ) { // Change this line
    console.log(i);
  }
  
  // Задача 18 Решение ----------------------------------------------
  function calculateTotal(number) {
    // Change code below this line
    let a = 0
   for (let i= 0; i <= number; i += 1  ){
     a += i;
   }
   return a;
   
     // Change code above this line
   }
  // Задача 19 Решение ----------------------------------------------
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  for (let i = 0; i < fruits.length; i += 1) { // Change this line
    const fruit = fruits[i]; // Change this line
    console.log(fruit);
  }
  // Задача 20 Решение ----------------------------------------------
  function calculateTotalPrice(order) {
    let total = 0;
    for (let i= 0; i < order.length; i += 1){
      total += order[i];
    }
    // Change code below this line
  
    // Change code above this line
    return total;
  }
  // Задача 21 Решение ----------------------------------------------
  function findLongestWord(string) {
    // Change code below this line
  const a = string.split(" ");
  console.log(a);
    let b = 0;
    let c = " ";
  
  for (let i=0; i < a.length; i += 1) {
    console.log(a[i])
     if (a[i].length > b){
      b = a[i].length;
      c = a[i];
  
     }
    
  }
  
    return c;
  
  
    // Change code above this line
  }
  // Задача 22 Решение ----------------------------------------------
  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
  for (let i = min; i <= max; i+=1){
      // console.log(i);
      numbers.push(i)
      
    }
    // Change code above this line
    return numbers;
  }
  
  // Задача 23 Решение ----------------------------------------------
  function filterArray(numbers, value) {
    const a = [];
    if (numbers)
  for (let i=0; i<numbers.length; i++){
    // console.log(numbers[i])
    if (numbers[i] > value) {
      a.push(numbers[i]);
    } 
  }
  return a;
  // console.log(a)
  }
  // Задача 24 Решение ----------------------------------------------
  function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    return fruits.includes(fruit); // Change this line
  }
  
  // Задача 25 Решение ----------------------------------------------
  function getCommonElements(array1, array2) {
    // Change code below this line
    const a = [];
   for (let i = 0; i < array1.length; i++){
    //  console.log(array1[i]);
    //  console.log(array2[i]);
     if (array2.includes(array1[i])){
      a.push(array1[i]);
     }
   }
    return a;
  }
  // Задача 26 Решение ----------------------------------------------
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    // for (let i = 0; i < order.length; i += 1) {
    //   total += order[i];
    // }
    for (const orde of order){
      total += orde; 
    }
    // Change code above this line
    return total;
  }
  // Задача 27 Решение ----------------------------------------------
  function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
   for (const number of numbers){
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
  }
  // Задача 28 Решение ----------------------------------------------
// Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
  // Задача 29 Решение ----------------------------------------------
  function getEvenNumbers(start, end) {
    // Change code below this line
    const a = [];
 for (let i = start; i <= end; i++){
   if(i % 2 === 0){
     a.push(i)
   }
 }
 return a;
 
     // Change code above this line
   }
  // Задача 30 Решение ----------------------------------------------
  const start = 6;
  const end = 27;
  let number;
  
  for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
      number = i;
      break;
  
    }
  }
  
  // Задача 31 Решение ----------------------------------------------
  function findNumber(start, end, divisor) {
    // Change code below this line
    let number;
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        number = i;
       
        return number;
      }
    }
  
    return number;
    // Change code above this line
  }
  // Задача 32 Решение ----------------------------------------------
  function includes(array, value) {
    // Change code below this line
    
  for (let arra of array){
    if (arra === value){
      return true;
    } 
    
   }
   return false;
   
    // Change code above this line
  }