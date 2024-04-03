import React from "react";
import { BsThermometer } from "react-icons/bs";
export const AccordionDetails = () => {
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
            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>
          </li>
          <li className="d-flex list-group-item justify-content-around">
            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <BsThermometer size={28} />
              <div>
                <p className="m-0">Feels like</p>
                <p className="m-0">6</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
