// function hello(){
//     console.log("Hello world");
// }

// function printName(){
//     console.log("Web devolopment");
//     console.log("Anas Jawaid");

// }

// function trafficSignal() {
//     let trafic = prompt("Enter the traffic light");
//     if(trafic == "red"){
//         console.log("Stop your car");
//     } else if(trafic == "yellow"){
//        console.log("slow your vehicle");
//     } else if(trafic == "green"){
//         console.log("Go");
//     } 
//     else{
//         console.log("Traffic light is broken");
//     }
// }

// function Cnic(){
//     let age = prompt("Enter Your Age");
//     if(age >= 18){
//         console.log("YOur are valid for cnic");
//     } else{
//         console.log("grow Yourself");
//     }
// }
// Cnic();

// trafficSignal();
// printName();

// hello();


// Practise QS

// create a function that prints a poem

// function peom(){
//    console.log("Twinkle, twinkle, little star,How I wonder what you are!Up above the world so high,Like a diamond in the sky.");
//    console.log("When the blazing sun is gone,When he nothing shines upon,Then you show your little light,Twinkle, twinkle, all the night.");
//    console.log("Then the traveler in the darkThanks you for your tiny spark,How could he see where to go,If you did not twinkle so?");
//    console.log("In the dark blue sky you keep,Often through my curtains peepFor you never shut your eye,Till the sun is in the sky.");
//    console.log("As your bright and tiny sparkLights the traveler in the dark,Though I know not what you are,Twinkle, twinkle, little star.");

// }
// peom();


// Qs create a function to roll a dice & always display the value of the dice (1 to 6)

// function rollDice(){
//     let random = Math.floor(Math.random() * 6) +1;
//     console.log(random);
// }
// rollDice();

//  Functions with arguments

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age},`);
// }

// printInfo("Anas Jawaid","22");

// function sum(a , b){
//     console.log(`the sum of ${a} and ${b} is`, a + b);
// }

// sum(34, 43);
// sum(1000, 2223);
// sum(33234, 23233);
// sum(33444, 43666);

//  Practise qs 
//  create a function that gives us the average of 3 numbers

// function sum(a, b, c){
// let avg = (a+b+c)/3;
// console.log(avg);
// }

// sum(3,3,3);

// QS 4 Create a function that prints the multiplication table of a number

// function table(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// table(3);


//  Return value

// function sum(a, b){
//     console.log("hellow world")
//    return a + b;
   
// }

// let s = sum(3,4);
// console.log(s);

// Qs  create a function the sum of numbers from 1 to n


// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// let s = getSum(10);
// console.log(s);

// Qs Create a function that retuens the concatenation of all string in an array



// let str = ["Anas","Jawaid","Kamboh"];
// function bioData(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result+= str[i];
//     }
//     return result;
// }

// let result1 = bioData(str);
// console.log(result1);

// function block
// let sum = 54;
//  function calSum(a,b){
//     console.log(sum);
//  }

// calSum(sum);

// block Scope

// let age = 23;

// if(age >= 18){
//     let str = "Adult";
  
// }

// console.log(str);

// lexical SCope

// function outerFunction(){
//     let x = 5;
//     let y = 5;
//     let z  = x + y;
//     function innerFunction(){
//         console.log(z);
//         let c = 50;
//     }
//     console.log(c);
//     innerFunction();
// }
// outerFunction();


// Qs  Practise qs

// let greet = "Hello";
// function innerGreet(){
//     let greet = "Assalamualikum";
//     console.log(greet);
//     function innerFunction(){
//         console.log(greet);
//     }
// }

// console.log(greet);
// innerGreet();

//  Functions expression

// let sum = function(a,b,c){
//     return (a+b+c)*2584;
// }
// console.log(sum(10,10,10));

 