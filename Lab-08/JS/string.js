let str1 = "Hello";
let str2 = "How are you";
let str3 = "My name is dharmendra";


document.getElementById('string').innerHTML = str1+"<br>"+str2+"<br>"+str3;

document.getElementById('string1').innerHTML = str1.length;


        // JS string as a object 
let x = "Dharmendra";
let y = new String("Dharmendra");

document.getElementById('string2').innerHTML = typeof x+"  "+typeof y +"<br>"+(x==y)+"<br>"+(x===y);