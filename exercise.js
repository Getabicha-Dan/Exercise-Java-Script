/*
EX. 1- 
Create a variable to store car type, then assign the value BMW to the variable
*/

let carType= 'BMW ';



/*
EX. 2- 
Create a variable, it's value should be the length of your first name (just in number)
Create another variable to store the length of your last name
Create a third variable and give it the sum of the two variables
Then change the value of the third variable to be the product of the first two variables
*/
let firstNameLength=9;
let lastNameLength=10;
let fullNameLength=firstNameLength + lastNameLength;
    fullNameLength=firstNameLength*lastNameLength;
console.log(fullNameLength);





/*
EX. 3-
 create three variables for first name, last name and temp (temporary) name
 assign your last name to your first name variable
 assign your first name to your last name variable
 then by using temp to temporarily store one of the names, switch the content of your first name to your last name
 To do this imagine you have three cups and one of them has juice and the other has water, the third one is empty.
 How would you transfer the juice to the water cup and the water to the juice cup using the third cup as a temporary storage?
 Use the same logic to switch the names from one of the variables to the other
*/

let firstName='Weldekidan';
let lastName='Getabicha';
let tempName;
    tempName=firstName;
    firstName=lastName;
    lastName=tempName;

console.log();


/*If you are all ready, try this exercise..

Write a function that takes a parameter PH value, and the function should check if the PH value is acidic, basic or neutral. If i remember my chemistry correctly, <7 is acidic, 7 is neutral, >7 is basic/alkaline.

let PH =7;
if(PH>7){
    console.log('It is basic')
} else if(PH< 7){
    console.log('It is acidic')
} else{
    console.log('It is neutral')
}*/

