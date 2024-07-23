import React, { useEffect, useState } from "react";

interface Params {
  currentMonth: number;
  setCurrentMonth: (index: number) => void;
}

export const Months = ({ currentMonth, setCurrentMonth }: Params) => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // var [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  console.log(currentMonth);
  useEffect(() => {
    // setSelectedMonth(currentMonth);
    console.log(currentMonth);
  }, [currentMonth]);

  return (
    <div className="dropdown" id="monthDropdown">
      <button
        className="btn  dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {months[currentMonth]}
      </button>
      <ul className="dropdown-menu">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setCurrentMonth(index);
              }}
            >
              <p className="dropdown-item">{month} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
