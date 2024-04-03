import React from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";

// const EditBio: FC = (props): JSX.Element => {
//   <>
//     {props.bio}
//     <br />
//     {props.open}
//   </>
// };

interface HourlyProps {
  data: any;
}

export const HourlyAccordions: React.FC<HourlyProps> = (props) => {
  console.log("hourlyAccordions- " + props.data);
  return (
    <>
      <div>before</div>
      {JSON.stringify(props.data.forecast.forecastday[0].hour[0].time)}
      <div>after</div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {/* Accordion Item #1 */}
            <AccordionHeader />
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <AccordionDetails />
          </div>
        </div>
      </div>
    </>
  );
};
