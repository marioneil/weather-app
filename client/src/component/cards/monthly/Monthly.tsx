import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../context/WeatherContext";

import axios from "axios";
// import { HourlyAccordions } from "./accordion/HourlyAccordions";
import { Forecast, Forecastday, HourlyWeather } from "../../../types/hourly";
import { BsFillSunFill } from "react-icons/bs";
import { monthlyArr } from "./sandbox";
import { Months } from "./components/dropdowns/Months";
import { Years } from "./components/dropdowns/Years";
import NavBar4 from "../../navbar/NavBar4";
import { MonthlyDay } from "./MonthlyDay";

export const Monthly = () => {
  const [monthlyWeather, setMonthlyWeather] =
    useState<(Forecastday | null)[][]>();
  const { selectedAddress } = useContext(WeatherContext);

  const { selectedMonth, selectedYear } = useContext(WeatherContext);

  useEffect(() => {
    setMonthlyWeather(monthlyArr(selectedMonth, selectedYear));
  }, []);

  const [selectedWeek, setSelectedWeek] = useState(-1);
  const [selectedDay, setSelectedDay] = useState(-1);

  return (
    <>
      <div data-testid="today-card" className="p-3 bg-primary-subtle">
        <div className="card">
          <div className="card-header  bg-primary text-white">
            <p className="m-0">
              <span className="h5">
                {"Monthly Weather - "}
                {`${selectedAddress.name},  ${selectedAddress.region}`}
              </span>
            </p>
          </div>
          <div className="card-header  bg-primary text-white">
            <p className="m-0">
              <span className="m-0"> As of 9:12 am EST</span>
            </p>
          </div>
          <div className="card-header">
            <p className="m-4"></p>
          </div>
          <div className="card-header  ">
            {/* <p className="m-0 d-flex  justify-content-center">

            </p> */}
            <NavBar4></NavBar4>
          </div>
          <div>
            <table className="table table-bordered border-primary border-opacity-50 text-center">
              <thead>
                <tr>
                  <th className="">SUN</th>
                  <th className="">MON</th>
                  <th className="">TUE</th>
                  <th className="">WED</th>
                  <th className="">THU</th>
                  <th className="">FRI</th>
                  <th className="">SAT</th>
                </tr>
              </thead>

              <tbody>
                {monthlyWeather?.map((week, index) => {
                  console.log(week);
                  // const [showDay, setShowDay] = useState(false);
                  if (week.every((day) => day === null)) return null;
                  return (
                    <>
                      <tr key={index}>
                        {week.map((fcastDay, index1) => {
                          return fcastDay ? (
                            <td
                              key={fcastDay.date}
                              className="text-primary"
                              onClick={() => {
                                // closeAll
                                setSelectedWeek(-1);
                                setSelectedWeek(index);
                                setSelectedDay(index1);
                              }}
                            >
                              <p>{Number(fcastDay?.date?.substring(8))}</p>
                              <p>
                                <img src={fcastDay?.day?.condition.icon}></img>
                              </p>
                              <p className="m-0">
                                {fcastDay?.day?.maxtemp_c.toFixed(2)} &#176;C
                              </p>
                              <p className="m-0">
                                {fcastDay?.day?.mintemp_c.toFixed(2)} &#176;C
                              </p>
                            </td>
                          ) : (
                            <td key={index + index1}></td>
                          );
                        })}
                      </tr>
                      <tr
                        className={` ${selectedWeek === index ? "" : "d-none"}`}
                      >
                        <MonthlyDay
                          index={index}
                          setSelectedWeek={setSelectedWeek}
                          forecastDay={week[selectedDay]}
                        ></MonthlyDay>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
