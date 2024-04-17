import React from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";
import { Forecastday } from "../../../../types/hourly";

export const HourlyAccordions: React.FC<{ forecastday: Forecastday }> = (
  props
) => {

  const d = new Date();
  let currentHour = d.getHours();

  return (
    <>
      {props.forecastday.hour.map((hour, index) => (
        
        { (index > currentHour) && (
          

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
              index === 0 ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <AccordionDetails hour={hour} />
            </div>
          </div>
        </div>

        )}

        
      ))}
    </>
  );
};
