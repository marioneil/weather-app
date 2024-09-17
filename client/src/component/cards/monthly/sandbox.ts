//https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/#:~:text=A%202D%20array%20is%20also,number%20of%20rows%20and%20columns.

//import { result } from "./result";

//import { data } from "./result";
import { Forecastday } from "../../../types/hourly";
import { forecastDays } from "./result1";
// let result = data.result; // val is "Hello"

//function getWeekOfMonth(date) {
//const newDateObj = convertDate(date);
// let adjustedDate = newDateObj.getDate() + newDateObj.getDay();
// let prefixes = ["0", "1", "2", "3", "4", "5"];
// return parseInt(prefixes[0 | (adjustedDate / 7)]);

// return Math.ceil(newDateObj.getDate() / 7);
//}

function getDayOfWeek(date: string) {
  const newDateObj = convertDate(date);
  let weekDay = newDateObj.getDay();
  if (weekDay > 6) weekDay = 0;

  return weekDay;
}

function convertDate(date: string) {
  var parts = date.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  var mydate = new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );
  // console.log(mydate.toDateString());
  return mydate;
}

export function monthlyArr(month: number, year: number) {
  //s console.log(`monthlyArr(,,,) ${month} - ${year}`);
  //const my2DArray: (Omit<Forecastday, "hour" | "date_epoch"> | null)[][] = [];
  const my2DArray: (Forecastday | null)[][] = [];
  const rows = 6;
  // const columns = 7;

  for (let i = 0; i < rows; i++) {
    my2DArray[i] = [null, null, null, null, null, null, null];
  }

  //  console.log(result.forecast.forecastday[0].date);

  let result = {
    forecast: {
      forecastday: forecastDays(year, month),
    },
  };
  let weekNumber = 0;
  for (let i = 0; i < result.forecast.forecastday.length; i++) {
    const d = result.forecast.forecastday[i].date;
    let dayNumber = getDayOfWeek(d);
    // let weekNumber = getWeekOfMonth(d);

    // console.log(`${weekNumber} - ${weekNumber}`);
    //    console.log(dayNumber);

    if (weekNumber === 5) {
      console.log("eror about to happne");
    }

    my2DArray[weekNumber][dayNumber] = result.forecast.forecastday[i];
    if (dayNumber == 6) {
      weekNumber++;
    }
  }

  //  console.log(my2DArray);

  return my2DArray;
}
