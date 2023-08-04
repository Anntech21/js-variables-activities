/************************ Exercise 1 - Identify Variables ************************/

// Declare Variables Here
let login 
let totalSales
let totalExpenses 
let totalProfits
let customerDemograph
let salesBreakdown
let ageGroup
let adSpent
let Apps
let employees
let upsell
let bundles
let abandantCar
let 18_26
let 27_45
let 45_65
let locations
let boston
let newyork
let california
let notification



/************************ Exercise 2 - Declaring Variables ************************/

// Declare three variables named firstName, lastName, and age. Assign your own values to each variable. 
let firstName = "Anchal";
let lastName = "Jain";
let age = "39";



// Log the variables' values to the console.
console.log ("firstName");
console.log ("lastName");
console.log ("age");





/************************ Exercise 3 - Swapping Variables  ************************/

// Create two variables, a and b, and assign them any values.

let a = "colin";
let b = "catie";

// Swap the values of a and b. You may use a third variable to hold a value so you don't overwrite it. Use reassignment—don't change the previous lines of code!
a = b;
let c = a;
b = c;


// Log the values of a and b before and after the swap.
//log before
console.log ("a");//colin
console.log ("b");//catie
//log after
console.log('Lets Swap! ' + a + ', use to be colin and catie is now ' + b +'.' )//catie use to be colin and catie is now colin



/************************ Exercise 4 - Working with Constants ************************/
.
// Declare a constant variable named PI and set its value to 3.14159. 
const PI = 3.14159

// Then, attempt to reassign a new value to PI. 
PI = 5245

// Observe the error in the console and write a comment here explaining why you can't reassign a constant.
constant is permantant and can not change value