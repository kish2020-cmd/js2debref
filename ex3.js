// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;
console.log(celsiusToFahrenheit(151));

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
console.log(fahrenheitToCelsius(59));
/*let d = new Date();
let day = d.getDate();
console.log(day);
let  d1 = new Date();
let time = d1.getTime();
console.log(time);*/
const todaysDate = () =>{
    const todayDate = new Date();
    console.log(`the current date and time is: ${todayDate}`);
}
todaysDate();

 function mygreeting()   {
    console.log('Hello')
 }
 setTimeout(mygreeting, 5000);

