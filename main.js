const readline = require("readline-sync")

const operator = readline.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply?");
let num1 = readline.question('choose first number: ');
let num2 = readline.question('choose second number: ');
let valueNum1= parseInt(num1);
let valueNum2= parseInt(num2);;

if(operator=='a'){
    console.log(valueNum1 + valueNum2)
}else if(operator=='s'){
    console.log(valueNum1 - valueNum2)
}else if(operator=='m'){
    console.log(valueNum1 * valueNum2)
}else if(operator=='d'){
console.log(valueNum1 / valueNum2)

}