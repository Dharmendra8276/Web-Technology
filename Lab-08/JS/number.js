    // Number can be written with or without decimal
// let num1 = 5.56;
// let num2 = 9;

    // extra large and extra small number can be written with exponent
// let num1 = 123e5;
// let num2 = 123e-5;

    //Numbers without a period or exponent notation are accurate up to 15 digits.
// let num1 = 999999999999999;
// let num2 = 9999999999999999;

// document.getElementById('number').innerHTML = num1+ "<br>"+ num2;`


    //If you add two numbers the result will be number
// let num1 = 20;
// let num2 = 60;
// let result = num1+num2;

    //If you add a number and numeric string the result will be a concatenated string
// let num1 = 10;
// let num2 = "20";
// let result = num1+num2;

// document.getElementById('number').innerHTML = num1 +" + "+ num2 +" = "+result;


    // Javascript will convert string to number when dividing and multiplying and subtracting
let x = "100";
let y = "10";
let div = x/y;
let mul = x*y;
let subtract = x-y;

document.getElementById('number').innerHTML = div +"<br>"+mul+"<br>"+subtract;




        // JS number as a object 
let a = 123;
let b = new Number(123);

document.getElementById('number-object').innerHTML = typeof a+"<br>"+typeof b +"<br>"+(a==b)+"<br>"+(a===b);


