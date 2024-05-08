import { BsDroplet } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { Hour } from "../../../../types/hourly";

export const AccordionHeader: React.FC<{ hour: Hour }> = ({ hour }) => {
  return (
    <div className="d-flex justify-content-around w-100  align-items-center">
      <div className="w-25">{hour.time.split(" ")[1]}</div>
      <div className="w-25">{hour.temp_c} &#176;C</div>
      <div className="d-flex gap-1 align-items-center w-25">
        {/* <BsFillCloudSunFill /> */}
        <img src={hour.condition.icon} width="25"></img>
        <p className="m-0">{hour.condition.text}</p>
      </div>
      <div className="d-flex gap-1 align-items-center w-25">
        <BsDroplet />
        <p className="m-0"> {hour.chance_of_rain}% </p>
      </div>
      <div className="d-flex gap-1 align-items-center w-25">
        <BsWind />
        <p className="m-0">
          {hour.wind_dir} {hour.wind_kph} kph
        </p>
      </div>
    </div>
  );
};
