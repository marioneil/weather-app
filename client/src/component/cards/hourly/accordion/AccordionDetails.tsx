import React from "react";
import {
  BsCloudFill,
  BsDropletHalf,
  BsFillCloudSleetFill,
  BsFillSunFill,
  BsThermometer,
  BsThermometerHalf,
  BsWind,
} from "react-icons/bs";
import { Hour } from "../../../../types/hourly";
export const AccordionDetails: React.FC<{ hour: Hour }> = ({ hour }) => {
  return (
    <div>
      <div
        className="card"
        style={
          {
            // width: "18rem"
          }
        }
      >
        <ul className="list-group list-group-flush">
          <li className="d-flex list-group-item justify-content-around">
            <div className="d-flex align-items-center gap-3 w-25">
              <BsThermometerHalf size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">{hour.feelslike_c} &#176;C</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 w-25">
              <BsWind size={28} />
              <div>
                <p className="m-0">Wind</p>
                <p className="m-0">
                  {" "}
                  {hour.wind_dir} {hour.wind_kph} kph
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 w-25">
              <BsDropletHalf size={28} />
              <div>
                <p className="m-0">Humidity</p>
                <p className="m-0">{hour.humidity}%</p>
              </div>
            </div>
          </li>
          <li className="d-flex list-group-item justify-content-around">
            <div className="d-flex align-items-center gap-3 w-25">
              <BsFillSunFill size={28} />
              <div>
                <p className="m-0">UV Index</p>
                <p className="m-0">{hour.uv}</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 w-25">
              <BsCloudFill size={28} />
              <div>
                <p className="m-0">Cloud Cover</p>
                <p className="m-0">{hour.cloud}</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 w-25">
              <BsFillCloudSleetFill size={28} />
              <div>
                <p className="m-0">Precip Amount</p>
                <p className="m-0">{hour.precip_mm}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
