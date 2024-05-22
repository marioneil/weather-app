import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../context/WeatherContext";

import axios from "axios";
import { HourlyAccordions } from "./accordion/HourlyAccordions";
import { HourlyWeather } from "../../../types/hourly";

export const Hourly = () => {
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather>();
  const { selectedAddress } = useContext(WeatherContext);

  async function getHourlyWeather() {
    const url = `http://localhost:3000/hourly?q=${selectedAddress.lat},${selectedAddress.lon}`;
    try {
      const response = await axios.get(url);
      setHourlyWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHourlyWeather();
  }, []);

  if (!hourlyWeather) return <>Loading</>;

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <>
      <div data-testid="today-card" className="p-3 bg-primary-subtle">
        <div className="card">
          <div className="card-header  bg-primary text-white">
            <p className="m-0">
              <span className="h5">
                {"Hourly Weather - "}
                {`${selectedAddress.name},  ${selectedAddress.region}`}
              </span>
              <span className="m-0"> As of 9:12 am EST</span>
            </p>
          </div>
          {hourlyWeather.forecast.forecastday.map((forecastday, index) => (
            <div
              key={forecastday.date_epoch}
              className="card-body bg-info-subtle"
            >
              <h6>
                {formatter.format(
                  new Date(Date.parse(forecastday.date + " 00:00:00"))
                )}{" "}
              </h6>
              <div
                className="accordion"
                id={"accordion_" + forecastday.date_epoch}
              >
                <HourlyAccordions
                  forecastday={forecastday}
                  isFirstDay={index === 0}
                  localTimeEpoch={hourlyWeather.location.localtime_epoch}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
