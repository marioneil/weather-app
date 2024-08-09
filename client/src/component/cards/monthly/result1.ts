export function forecastDays(year: number, month: number) {
  // const numDaysPerMonth = month % 2 === 0 ? 31 : 30;

  //  let numDaysPerMonth = 0;

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  //   if (month === 1) numDaysPerMonth = 28;
  //   else if (month % 2 === 0) numDaysPerMonth = 31;
  //   else numDaysPerMonth = 30;

  const numDaysPerMonth = daysInMonth(month + 1, year);

  var data = [];
  for (var i = 0; i < numDaysPerMonth; i++) {
    data.push(createRandomForecastDay(year, month, i));
  }
  // console.log(data);
  return data;
}

function zeroPad(num: number, places: number) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function createRandomForecastDay(year: number, month: number, day: number) {
  const max_temp = generateRandomMaxTemp();
  const min_temp = generateRandomMinTemp();

  return {
    date: `${year}-${zeroPad(month + 1, 2)}-${zeroPad(day + 1, 2)}`,
    // date_epoch: 1719964800,
    day: {
      maxtemp_c: max_temp,
      //   maxtemp_f: 80.9,
      mintemp_c: min_temp,
      //   mintemp_f: 68.9,
      avgtemp_c: Number(max_temp + min_temp) / 2,
      //   avgtemp_f: 74.8,
      //   maxwind_mph: 15.4,
      //   maxwind_kph: 24.8,
      //   totalprecip_mm: 0,
      //   totalprecip_in: 0,
      //   totalsnow_cm: 0,
      //   avgvis_km: 10,
      //   avgvis_miles: 6,
      //   avghumidity: 53,
      //   daily_will_it_rain: 0,
      //   daily_chance_of_rain: 0,
      //   daily_will_it_snow: 0,
      //   daily_chance_of_snow: 0,
      condition: {
        text: generateRandomCondition().text,
        icon: generateRandomCondition().icon,
        code: generateRandomCondition().code,
      },
      //   uv: 10,
    },
    astro: {
      //   sunrise: "05:30 AM",
      //   sunset: "08:30 PM",
      //   moonrise: "02:55 AM",
      //   moonset: "06:56 PM",
      moon_phase: "Waning Crescent",
      //   moon_illumination: 10,
      //   is_moon_up: 0,
      //   is_sun_up: 1,
    },
  };
}

function generateRandomMaxTemp() {
  const max = 33;
  const min = 27;
  return (Math.random() * (max - min) + min).toFixed(2);
}

function generateRandomMinTemp() {
  const max = 15;
  const min = 11;
  return (Math.random() * (max - min) + min).toFixed(2);
}

function generateRandomCondition() {
  const random = Math.floor(Math.random() * condition.length);
  //console.log(random, condition[random]);

  const dayCondition = condition[random];

  return {
    text: dayCondition.day,
    icon: `//cdn.weatherapi.com/weather/64x64/day/${dayCondition.icon}.png`,
    code: dayCondition.code,
  };
}

const condition = [
  {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: 113,
  },
  {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: 116,
  },
  {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: 119,
  },
  {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: 122,
  },
  {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: 143,
  },
  {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: 176,
  },
  {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: 179,
  },
  {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: 182,
  },
  {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: 185,
  },
  {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: 200,
  },
  {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: 227,
  },
  {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: 230,
  },
  {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: 248,
  },
  {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: 260,
  },
  {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: 263,
  },
  {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: 266,
  },
  {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: 281,
  },
  {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: 284,
  },
  {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: 293,
  },
  {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: 296,
  },
  {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: 299,
  },
  {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: 302,
  },
  {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: 305,
  },
  {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: 308,
  },
  {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: 311,
  },
  {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: 314,
  },
  {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: 317,
  },
  {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: 320,
  },
  {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: 323,
  },
  {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: 326,
  },
  {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: 329,
  },
  {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: 332,
  },
  {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: 335,
  },
  {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: 338,
  },
  {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: 350,
  },
  {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: 353,
  },
  {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: 356,
  },
  {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: 359,
  },
  {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: 362,
  },
  {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: 365,
  },
  {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: 368,
  },
  {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: 371,
  },
  {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: 374,
  },
  {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: 377,
  },
  {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: 386,
  },
  {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: 389,
  },
  {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: 392,
  },
  {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: 395,
  },
];
