import React, { useCallback, useState } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";
import { Forecastday } from "../../../../types/hourly";

export const HourlyAccordions: React.FC<{
  forecastday: Forecastday;
  isFirstDay: boolean;
  localTimeEpoch: number;
}> = (props) => {
  const d = new Date();

  const hourlyArray = props.forecastday.hour.filter((hour, index) => {
    const timestamp = hour.time + ":00";
    const current = new Date(Date.parse(timestamp));

    console.log(
      ` timestamp from api - ${timestamp} ; Computed date object- ${current} ; EST time ${d}`
    );

    // const isFirstAccordion = index === 0 && expandAccordion;

    if (props.localTimeEpoch < hour.time_epoch) {
      return true;
    }
    return false;
  });

  return (
    <>
      {hourlyArray.map((hour, index) => {
        // const timestamp = hour.time + ":00";
        // const current = new Date(Date.parse(timestamp));

        // const d = new Date();
        // // const isFirstAccordion = index === 0 && expandAccordion;

        // if (current > d) {
        const isFirstAccordion = index === 0 && props.isFirstDay;
        // isFirst = false;
        // if (isFirst === true) {
        //   setIsFirst(false);
        // }

        console.log(`isFirstAccordion - ${isFirstAccordion} `);
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
      })}
    </>
  );
};
