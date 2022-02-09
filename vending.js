/*
This is a vending machine where a user can get the following products:
- Cadbury Chocolate
- Espresso
- Pringles Chips
- Cappuccino
- Cafe Mocha
- Pepsi Can

To start the vending machine install the following JS library: readline-sync
To install readline-sync open command line and enter

npm install readline-sync

run the JS file using "node vending.js"

*/
var readlineSync = require('readline-sync')

console.log("Products available: ")

//items displayed on the command line
var items = [
    ["Cadbury Chocolate","£1",0],
    ["Espresso","£2.90",1],
    ["Pringles Chips","£1.50",2],
    ["Cappuccino","£2.30",3],
    ["Cafe Mocha","£2",4],
    ["Pepsi Can","£1.20",5],
  ]

console.log(items)

//Asking user to enter the item number (i.e 0-5)
var a = readlineSync.question('Enter the item number to choose your product.. ');
console.log(user_input(a));   //goes to the function user_input(a)

//refund is calculated for each item which is (credit entered by the user - Product Price)
function refund_cal(a,b){
  //for item 0
  if(a==0){
    return b - 1;
} else if (a==1){  //for item 1
  return b - 2.90;
} else if (a==2){  //for item 2
  return b - 1.50;
} else if (a==3){  //for item 3
  return b - 2.30;
} else if (a==4){  //for item 4
  return b - 2;
} else if (a==5){  //for item 5
  return b - 1.20;
}



}

function user_input(a){
//Loops assigned for the item number chosen by the user



if (a == 0){
  //if user enters 0 ["Cadbury Chocolate"]
  console.log("You have choosen " + items[0]);
  console.log("Total to be paid is: £1 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: "); //Asking user to add the credit
  credit_input(a,b); // runs function credit_input(a,b)






} else if (a == 1){
  //if user enters 1 ["Espresso"]
  console.log("You have choosen " + items[1]);
  console.log("Total to be paid is: £2.90 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: "); //Asking user to add the credit
  credit_input(a,b); // runs function credit_input(a,b)






} else if (a == 2){
  //if user enters 2 ["Pringles Chips"]
  console.log("You have choosen " + items[2]);
  console.log("Total to be paid is: £1.50 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: "); //Asking user to add the credit
  credit_input(a,b); // runs function credit_input(a,b)






} else if (a == 3){
  //if user enters 3 ["Cappuccino"]
  console.log("You have choosen " + items[3]);
  console.log("Total to be paid is: £2.30 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: "); //Asking user to add the credit
  credit_input(a,b);  // runs function credit_input(a,b)






} else if (a == 4){
  //if user enters 4 ["Cafe Mocha"]
  console.log("You have choosen " + items[4]);
  console.log("Total to be paid is: £2 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: "); //Asking user to add the credit
  credit_input(a,b); // runs function credit_input(a,b)






} else if (a == 5){
  //if user enters 5 ["Pepsi Can"]
  console.log("You have choosen " + items[5]);
  console.log("Total to be paid is: £1.20 " );
  console.log("Your Current Credit is: 0");
  var b = readlineSync.question("Add Credit: ");  //Asking user to add the credit
  credit_input(a,b); // runs function credit_input(a,b)






}





}


//on the basis of credit paid by the user
function credit_input(a,b){

//if user has entered item number 0
if(a == 0){

//if user has given credit less than 1 pound
if(b < 1){
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 1){

//if user has given the exact price
console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 1) {

//if user has entered more than one pound
console.log("Your Current Credit is: " + b);

/*
Asks refund from the user
in the form of Yes and No
*/
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);   //Goes to the function refund_yn(b,refund)



}
} else if(a == 1){           //if user has entered item number 1

//if user has given credit less than 2.90 pounds
if(b < 2.90){
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 2.90){      //if user has given the exact price

console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 2.90) {      //if user has entered more than 2.90 pounds

console.log("Your Current Credit is: " + b);

//Asks refund
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);



}
} else if(a == 2){                 //if user has entered item number 2


if(b < 1.50){        //if user has given credit less than 1.50 pounds
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 1.50){        //if user has given the exact price

console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 1.50) {     //if user has entered more than 1.50 pounds

console.log("Your Current Credit is: " + b);

//Asks refund
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);



}
} else if(a == 3){           //if user has entered item number 3

if(b < 2.30){            //if user has given credit less than 2.30 pounds
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 2.30){        //if user has given the exact price

console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 2.30) {      //if user has entered more than 2.30 pounds

console.log("Your Current Credit is: " + b);

//Asks refund
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);



}
} else if(a == 4){      //if user has entered item number 4

if(b < 2){      //if user has given credit less than 2 pounds
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 2){       //if user has given the exact price

console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 2) {     //if user has entered more than 2 pounds

console.log("Your Current Credit is: " + b);

//Asks refund
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);



}
} else if(a == 5){    //if user has entered item number 5

if(b < 1.20){       //if user has given credit less than 1.20 pounds
console.log("Your Current Credit is: " + b);
console.log("Insufficient Fund");
} else if (b == 1.20){      //if user has given the exact price

console.log("Payment Successful!!... Your Product has been served!");

} else if (b > 1.20) {      //if user has entered more than 1.20 pounds

console.log("Your Current Credit is: " + b);

//Asks refund
var refund = readlineSync.question('Do you want the refund? [Enter Y for Yes/N for No] ');
refund_yn(b,refund);



}
}


}

/*
This function takes the Yes and no output from
the user and show the expected results
*/
function refund_yn(b,refund){

/*
if user enters "Y' or "y" which means yes
the code gives back the remaining credit of the user
if user enters "N' or "n" which means no
the code doesnt give back the remaining credit of the user

The refund for each item is calculated by the function refund_cal(a,b)
*/

if(refund == "Y" || refund == "y"){
//if user enters yes
console.log("Payment Successful!!... Your Product has been served!");
console.log(" Total Refund of" + " " + refund_cal(a,b) + " " + "pound has been given");
} else if(refund == "N" || refund == "n") {
console.log("Payment Successful!!... Your Product has been served!"); // if user enters no
}
}
