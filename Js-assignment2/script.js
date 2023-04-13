// Q1 --> Write a logic to print the Fibonacci serious
let num1 = 0 , num2 = 1;
let nextNum = num1 + num2;
console.log(num1) //to write first number
console.log(num2) // to write second number
let limit = +prompt("Enter the limit to find fibonacci series")
for(let i=1; i<limit; i++){
    nextNum = num1 + num2;
    console.log(nextNum) // to write nextnum using loop and so on....
    num1 = num2;
    num2 = nextNum;
}






// Q2 Write a logic to find the factorial of a given a number 
let numberToFindFac = +prompt("Enter the number to find factorial of :")
let fac = 1;
for(let i=1; i<=numberToFindFac; i++){
    fac = fac * i;
}
console.log(fac)










// Q3 Remove all the occurrences of the given character.
let str = 'Hello, my name is Ahmad';
str = str.replace('l', '');
console.log(str);









// Q4 How will you reverse a string
let revStr = "Hello, my name is Ahmad";
let reversedStr = '';
for (let i=revStr.length - 1; i>= 0; i--) {
  reversedStr += revStr[i];
}
console.log(reversedStr); 










// Q5 How will you use getter and setter methods with the help of using objects
let person = {
    firstName : 'Ahmad',
    lastName : 'Owais',
    age : 21,
    get getName(){
        return this.firstName + this.lastName;
    },
    set setName(val){
        this.firstName = val;
        this.lastName = val;
    }
};
console.log(person.getName);
person.val='Muhammad Ahmad';
console.log(person.val);







// Q6-Can you print the first repeating character from the string
let string = prompt("Enter any string with repeated character")
for(let i=0;i<string.length;i++){
    for(let j=1;j<str.length;j++){
        if(string[i]==string[i+j]){
            console.log("The repeating charachter is " + string[i])
        }
    }
}




// Q7 How would you check if the given number is integer or not? 
 let input = +prompt("Enter any number")
if(Number.isInteger(input)){
    console.log(input + " is an integer")
}
else{
    console.log(input + " is not an integer")
}





// Q-8-Write an function that would you allow to call a function like this functionName(param1)(param2)
function sayHello(){
    console.log("Hello, World")
}
function call(input,callback){
    console.log(input)
    callback();
}
let n = 10;
call(n, sayHello);