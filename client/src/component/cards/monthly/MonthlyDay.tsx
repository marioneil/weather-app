import React from "react";

import {
  BsArrowUpRightCircle,
  BsCloudFill,
  BsDropletHalf,
  BsFillCloudSleetFill,
  BsFillSunFill,
  BsGraphUpArrow,
  BsSunrise,
  BsSunset,
  BsThermometerHalf,
  BsWind,
} from "react-icons/bs";
import { Forecastday } from "../../../types/hourly";

interface Params {
  index: number;
  setSelectedWeek: (index: number) => void;
  forecastDay: Forecastday | null;
}

export const MonthlyDay = ({ index, setSelectedWeek, forecastDay }: Params) => {
  return (
    <>
      <td
        colSpan={7}
        id={index.toString()}
        // className={`card ${showDay ? "" : "d-none"}`}
        className="alert alert-warning alert-dismissible fade show w-100"
        // role="alert"
      >
        <div className="d-flex">
          <div className="card-body ">
            <div className="d-flex">Thu 05 | Night</div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="fs-1">{forecastDay?.day.avgtemp_c.toFixed(2)}°</p>
                <img
                  height={64}
                  width={64}
                  src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                ></img>
              </div>
              <div>
                <div className="d-flex gap-3">
                  <BsFillCloudSleetFill size={28} />{" "}
                  <p>{forecastDay?.day.daily_chance_of_rain}% </p>
                </div>
                <div className="d-flex gap-3">
                  <BsWind size={28} />
                  <p>NE {forecastDay?.day.maxwind_kph} km/h</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              A few passing clouds. Low 13C. Winds light and variable.
            </div>
            <div className="border border-2 rounded  border-dark-subtle p-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <BsArrowUpRightCircle />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Record High</span>
                    <span>--</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <BsGraphUpArrow />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Average High</span>
                    <span>{forecastDay?.day.avgtemp_c.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <BsSunrise />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Sunrise</span>
                    <span>{forecastDay?.astro.sunrise}</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <BsSunset />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Sunset</span>
                    <span>{forecastDay?.astro.sunset}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <div className="d-flex">Thu 05 | Night</div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="fs-1">13°</p>
                <img
                  height={64}
                  width={64}
                  src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                ></img>
              </div>
              <div>
                <div className="d-flex gap-3">
                  <BsFillCloudSleetFill size={28} /> <p>6% </p>
                </div>
                <div className="d-flex gap-3">
                  <BsWind size={28} />
                  <p>SSE 9 km/h</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              A few passing clouds. Low 13C. Winds light and variable.
            </div>
            <div className="border border-2 rounded  border-dark-subtle p-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <BsArrowUpRightCircle />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Record Low</span>
                    <span>--</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <BsGraphUpArrow />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Average Low</span>
                    <span>--</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <BsSunrise />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Moonrise</span>
                    <span>--</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <BsSunset />
                  <div className="d-flex  flex-column align-items-start">
                    <span className="lh-1">Moonset</span>
                    <span>--</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn-close"
          // data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => {
            setSelectedWeek(-1);
          }}
        ></button>
      </td>
    </>
  );
};
