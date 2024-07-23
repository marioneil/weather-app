import React, { useState } from "react";

export const Years = () => {
  const [year, setYear] = useState<string | null>(
    new Date().getFullYear().toString()
  );

  const years = ["2024", "2025", "2026", "2027"];

  return (
    <div className="dropdown" id="yearDropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {year ? year : "Dropdown button"}
      </button>
      <ul className="dropdown-menu">
        {years.map((item) => (
          <li key={item}>
            <p className="dropdown-item" onClick={() => setYear(item)}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
