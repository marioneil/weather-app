import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../context/WeatherContext";

import axios from "axios";
import { HourlyAccordions } from "./accordion/HourlyAccordions";

export const Hourly = () => {
  const [responsedata, setResponseData] = useState();
  const { selectedAddress, currentWeather } = useContext(WeatherContext);

  async function getHourlyWeather() {
    const url = `http://localhost:3000/hourly?q=${selectedAddress.lat},${selectedAddress.lon}`;
    try {
      const response = await axios.get(url);
      setResponseData(response.data);
      console.log(
        "forecastDay - " + response.data.forecast.forecastday[0].hour[0].time
      );
      //  const addresses = response.data;
      //   setCurrentWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("in use effect");
    getHourlyWeather();
    console.log(`response ${responsedata}`);
  }, []);

  if (!responsedata) return <>Loading</>;
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
              <p className="m-0"> As of 9:12 am EST</p>
            </p>
          </div>
          <div className="card-body bg-info-subtle">
            <h6>Saturday, March 30 </h6>
            <div className="accordion" id="accordionExample">
              <HourlyAccordions data={responsedata} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
