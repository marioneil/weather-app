import React, { useContext, useState } from "react";
import { WeatherContext } from "../../../../../context/WeatherContext";

export const Years = () => {
  const { selectedYear, setSelectedYear } = useContext(WeatherContext);

  // const [year, setYear] = useState<string | null>(
  //   new Date().getFullYear().toString()
  // );

  const years = ["2024", "2025", "2026", "2027"];

  return (
    <div className="dropdown" id="yearDropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedYear ? selectedYear : "Dropdown button"}
      </button>
      <ul className="dropdown-menu">
        {years.map((item) => (
          <li key={item}>
            <p className="dropdown-item" onClick={() => setSelectedYear(item)}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
