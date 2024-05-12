import React, { useCallback, useState } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";
import { Forecastday } from "../../../../types/hourly";

export const HourlyAccordions: React.FC<{ forecastday: Forecastday }> = (
  props
) => {
  //let isFirst = true;

  const [isFirst, setIsFirst] = useState(true);

  const flip = useCallback(() => {
    setIsFirst(false);
  }, []);

  return (
    <>
      {props.forecastday.hour.map((hour, index) => {
        const timestamp = hour.time + ":00";
        const current = new Date(Date.parse(timestamp));

        const d = new Date();
        // const isFirstAccordion = index === 0 && expandAccordion;

        if (current > d) {
          const isFirstAccordion = isFirst;
          //isFirst = false;
          //setIsFirst(false);
          flip();
          console.log(
            `isFirstAccordion - ${isFirstAccordion} ; isFirst- ${isFirst}`
          );
          return (
            <div key={hour.time_epoch} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={
                    isFirstAccordion
                      ? "accordion-button"
                      : "accordion-button collapsed"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#hour_${hour.time_epoch}`}
                  aria-expanded={isFirstAccordion ? "true" : "false"}
                  aria-controls={`hour_${hour.time_epoch}`}
                >
                  <AccordionHeader hour={hour} />
                </button>
              </h2>
              <div
                id={`hour_${hour.time_epoch}`}
                className={`accordion-collapse collapse${
                  isFirstAccordion ? " show" : ""
                }`}
                data-bs-parent={"#accordion_" + props.forecastday.date_epoch}
              >
                <div className="accordion-body">
                  <AccordionDetails hour={hour} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
