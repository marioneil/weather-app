import React from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";
import { Forecastday } from "../../../../types/hourly";

export const HourlyAccordions: React.FC<{ forecastday: Forecastday }> = (
  props
) => {
  const d = new Date();

  return (
    <>
      {props.forecastday.hour.map((hour, index) => {
        const timestamp = hour.time + ":00";
        console.log("timestamp - " + timestamp);
        const current = new Date(Date.parse(timestamp));

        console.log(`current ${current}`);
        const expandAccordion =
          new Date().getDate() === new Date(hour.time.split(" ")[0]).getDate();

        if (current > d)
          return (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#hour_${hour.time_epoch}`}
                  aria-expanded="true"
                  aria-controls={`hour_${hour.time_epoch}`}
                >
                  <AccordionHeader hour={hour} />
                </button>
              </h2>
              <div
                id={`hour_${hour.time_epoch}`}
                className={`accordion-collapse collapse ${
                  index === 0 && expandAccordion ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <AccordionDetails hour={hour} />
                </div>
              </div>
            </div>
          );
      })}
    </>
  );
};
