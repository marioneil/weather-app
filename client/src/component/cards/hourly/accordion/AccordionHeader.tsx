import { BsFillCloudSunFill } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { BsWind } from "react-icons/bs";

export const AccordionHeader = () => {
  return (
    <div className="d-flex justify-content-around w-100">
      <div>10:00</div>
      <div>1</div>
      <div className="d-flex gap-1 align-items-center">
        <BsFillCloudSunFill />
        <p className="m-0">Partly Cloudy</p>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <BsDroplet />
        <p className="m-0"> 0% </p>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <BsWind />
        <p className="m-0">WNW 22 km/h</p>
      </div>
    </div>
  );
};
