//  for (var i = 1; i<=10; i++){
//     var namta  = i *13;
//     console.log(i, 'X 13 = ', namta);
//  }
// namtas=========================
// function namtas(number){
//     for (var i = 1; i<=10; i++){
//     var namta  = i * number;
//     var result = console.log(i,'x', number,' =', namta);
//   }
//   return result;
// }
// var myNUmber= 13;
// var total= namtas(myNUmber);


// sumOfArray=================================

// var numbers =[12, 34, 33, 45, 49, 45, 89, 46];
// function sumOfArray (numbers){
// let sum = 0;
// for (let i = 0; i<numbers.length; i++){
//   const index = i;
//   const element =numbers[index];
//   sum = sum + element;
//   console.log(index, element, sum);
// }
// return sum;
// }
//  sumOfArray(numbers);


// inchTOFeet===============================
// function inchTOFeet(number){
//   var result = number / 12;
//   return result;
// }
// var calculate = inchTOFeet(36);
// console.log(calculate);

// is even number====================
// function isEven(number){
//   if(number % 2 == 0){
//     return "this number is even number";
//   }
//   else{
//     return "this number is a odd number";
//   }
// }
// result = isEven(37);
// console.log(result);


// isLeapYear =========================
//  function isLeapYear(year){
//   if((year% 4==0) && (year % 100 !==0) || (year % 400==0)){
//     return "this year is leap year";
//   }
//   else{
//     return "this year is not leap year"
//   }
//  }
//  result = isLeapYear(2026);
//  console.log(result);

// calculate all number of an array========================
// var numbers =[23, 45, 65, 67, 34, 98, 90];
// sum = 0;
// for(var i = 0; i<numbers.length; i++){
//   number = numbers[i];
//   sum = sum +number;
//   console.log( number, sum);
// }

// array theke even number niye sum koro================
// var numbers = [23, 34, 45, 65, 87, 89, 90, 87, 76];
// sum = 0;
// for (var i =0; i<numbers.length; i++){
//   var number = numbers[i];
//   if(number % 2===0){
//     sum = sum +number;
//     console.log(number,sum);
//   }
// }

// array theke odd number er sum=====================

// var numbers = [23, 34, 45, 65, 87, 89, 90, 87, 76];
//  var sum = 0;
// for (var i  =0; i<numbers.length; i++){
//   var number = numbers[i];
//   if (number % 2 !==0){
//     sum = sum + number;
//     console.log(number,sum)
//   }
// }

// calculator factorial ===================
// function factorial(number){
//   var result = 1;
//   for(var i = 1; i<=number; i++){
//     result = result * i;
//   }
//   return result;
// }
// var total = factorial(6);
// console.log(total);

// get largest word from an array================
// var friends =['abbas', 'rakib','masum', 'akash', 'tonmoy', 'shakila'];
// var temp = friends[0];
// for(let i =0; i<friends.length; i++){
//   var element = friends[i];
//   if (element.length>temp.length){
//     temp=element;
//   }
// }
// console.log(temp);


// array theke large number ber korte =======================
// var numbers = [3, 4, 5, 6, 7, 8, 10, 20, 30, 400, 540, 56, 34];
// function largestNumber(numbers){
//   var largest =numbers[0]
//   for(var i =0; i<numbers.length; i++){
//     number = numbers[i];
//     if(number>largest){
//       largest = number;
//     }
//   }
//   return largest;
// }
// var total = largestNumber(numbers);
// console.log(total);


// word reverse=============================
// var myString ="amar sonar bangla ami tomay valobashi";
// function reversWord(str){
//   const words = str.split(" ");
//   const result =[];
//   for (i=words.length-1;i>=0; i--){
//     const element = words[i];
//     result.push(element);
//   }
//   const reversed = result.join(' ');
//   return reversed;
// }
// var total = reversWord(myString);
// console.log(total);

// fibonacci problem===========================
// var fibo = [0,1];
// for (var i = 2; i<25; i++){
//   fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


// duplicate jinis array theke delete korte=================
// var names =['amar', 'sakib', 'rakib', 'amar', 'shakib', 'rakib'];
// function removeDuplicate(names){
//     var uniqueName = []
//     for(var i =0; i<names.length; i++){
//         var name = names[i];
//         if(uniqueName.includes(name)===false){
//             uniqueName.push(name);
//         }
//     }
//     return uniqueName;
// }
// var total = removeDuplicate(names);
// console.log(total);

// foo bar 5 & 3 vivajjo=====================================

//  for (let i = 0; i<=50; i++){
//     if (i % 3===0 && i % 5=== 0){
//         console.log("Foobar");
//     }
//     else if(i % 3 ===0){
//         console.log("foo");
//     }
//     else if (i % 5 ===0){
//         console.log("bar");
//     }
//     else{
//         console.log(i);
//     }
//  }

// woodCalculator ===============================================
// function woodCalculator (chair, table, bed){
//     const perChair = 3;
//     const perTable = 10;
//     const perBed = 50;
//     const chairWood = perChair * chair;
//     const tableWood = perTable * table;
//     const bedWood = perBed * bed;
//     const totalWoodNeed = chairWood + tableWood + bedWood;
//     return totalWoodNeed;
// }
// var totalWood = woodCalculator(4,5,10);
// console.log(totalWood);

// how to get cheapest price ========================
// const phones =[
//     {name:'samsung', color:'black', price:25000},
//     {name:'motorola', color:'black', price:20000},
//     {name:'oppo', color:'black', price:15000},
//     {name:'symphony', color:'black', price:19000},
//     {name:'iphone', color:'black', price:125000},
//     {name:'huawei', color:'black', price:35000},
//     {name:'redmi', color:'black', price:26000}
// ];

// function cheapestPhone (phones){
//     let cheapest= phones[0];
//     for(let i =0; i<phones.length; i++){
//         const phone = phones[i];
//         if(phone.price<cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const mySelection =cheapestPhone(phones);
// console.log(mySelection);

// calculate the total cost of the productShopping====================
// const shoppingCard = [
//     {name:"shoes", price: 1200},
//     {name:"shirt", price: 1000},
//     {name:"pant", price: 1800},
//     {name:"watch", price: 1700},
//     {name:"glass", price: 1200},
// ];

// function totalCost (products){
//      let sum = 0;
//     for (let i = 0; i<products.length; i++){
//         const product = products[i];
//          sum = sum + product.price;
//     }
//      return sum;
// }
// const expense = totalCost(shoppingCard);
// console.log(expense);

// ticket price ++++++++++++++++++++++++++++++
// function ticketPrice(ticketQuantity){
//     const first100rate =100;
//     const second100rate = 90;
//     const third100rate = 70;
//     if(ticketQuantity<=100){
//       const price = ticketQuantity * first100rate;
//       return price;
//     }
//     else if (ticketQuantity<=200){
//         const first100price = 100* first100rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice =restTicketQuantity * second100rate;
//         const totalPrice = first100price + restTicketPrice;
//         return totalPrice;
//     }
//     else{
//         const first100price =100 * first100rate;
//         const second100Price = 100 * second100rate;
//         const restTicketQuantity = ticketQuantity -200;
//         const restTicketPrice = restTicketQuantity * third100rate;
//         const total = first100price + second100Price +restTicketPrice;
//         return total;
//     }
// }
// const totalCost = ticketPrice(201);
// console.log(totalCost);


// feetToInch============================
// function feetToInch(number){
//     if(typeof(number) === 'number'){
//         const total = number * 12;
//         return total;  
//     }
//     else{
//         return "please enter number"
//     }

// }
//  const myFeet = feetToInch(56);
//  console.log(myFeet);

// centimeter to meter converter =================
// function centimeterToMeter(centimeter){
//     if(typeof(centimeter)==='number'){
//         const result = centimeter* 0.01;
//         return result;
//     }
//     else{
//         return "please enter number"
//     }
// }
// const myNumber = centimeterToMeter(1000);
// console.log(myNumber);


// paperRequirments ===================
// function paperRequirments(num1,num2,num3){
//     const book1 = 100;
//     const book2 = 200;
//     const book3 = 300;
//     const book1page = num1 * book1;
//     const book2page = num2 * book2;
//     const book3page = num3 * book3;
//     const total = book1page + book2page + book3page;
//     return total;
// }
// const pageNeed = paperRequirments(2,3,4);
// console.log(pageNeed);

// array theke sob ceye boro word ber korte hobe=============
// const friends = ['raju', 'kamal', 'jamal', 'arif', 'moazzam', 'rasel', 'shakib'];
// function bestFriend(friends){
//     let result =friends[0]
//     for(let i =0; i<friends.length; i++){
//     const friend = friends[i];
//     if(result.length<friend.length){
//         result = friend;
//     }
// }
// return result;
// }
// const myBestFriend = bestFriend(friends);
// console.log(myBestFriend);

// only positive if you want you break the loop=================
// const numbers = [23, 34, 78, 67, 45, 89, -45, 76, 788,98];
// function stopAtNegative(numbers){
//     let positive = [];
//     for(let i = 0; i < numbers.length; i++){
//         const number  = numbers[i];
//         if(number<-1){
//             break;
//         }
//         positive.push(number);
//     }
//     return positive;
// }
// const myPositive = stopAtNegative(numbers);
// console.log(myPositive);

