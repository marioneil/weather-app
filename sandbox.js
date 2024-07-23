//https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/#:~:text=A%202D%20array%20is%20also,number%20of%20rows%20and%20columns.

//import { result } from "./result";

const myModule = require("./result");
let result = myModule.result; // val is "Hello"

//function getWeekOfMonth(date) {
//const newDateObj = convertDate(date);
// let adjustedDate = newDateObj.getDate() + newDateObj.getDay();
// let prefixes = ["0", "1", "2", "3", "4", "5"];
// return parseInt(prefixes[0 | (adjustedDate / 7)]);

// return Math.ceil(newDateObj.getDate() / 7);
//}

function getDayOfWeek(date) {
  const newDateObj = convertDate(date);
  let weekDay = newDateObj.getDay();
  if (weekDay > 6) weekDay = 0;

  return weekDay;
}

function convertDate(date) {
  var parts = date.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  console.log(mydate.toDateString());
  return mydate;
}

const my2DArray = [];
const rows = 5;
const columns = 7;

for (let i = 0; i < rows; i++) {
  my2DArray[i] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
}

console.log(result.forecast.forecastday[0].date);

let weekNumber = 0;
for (let i = 0; i < result.forecast.forecastday.length; i++) {
  const d = result.forecast.forecastday[i].date;
  let dayNumber = getDayOfWeek(d);
  // let weekNumber = getWeekOfMonth(d);

  console.log(weekNumber);
  console.log(dayNumber);

  my2DArray[weekNumber][dayNumber] = result.forecast.forecastday[i];
  if (dayNumber == 6) {
    weekNumber++;
  }
}

console.log(my2DArray);
