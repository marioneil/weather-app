import { useContext } from "react";
import { WiDayCloudy } from "react-icons/wi";
import { WeatherContext } from "../../context/WeatherContext";

export const Today = () => {
  const { selectedAddress, currentWeather } = useContext(WeatherContext);

  return (
    <>
      <div data-testid="today-card" className="p-3 bg-primary-subtle">
        <div className="card">
          <div className="card-header  bg-primary text-white">
            <p className="m-0">
              <span className="h5">
                {" "}
                {`${selectedAddress.name},  ${selectedAddress.region}, ${selectedAddress.country} `}
              </span>
              <span> As of 9:12 am EST</span>
            </p>
          </div>
          <div className="card-body bg-info-subtle">
            <div className="d-flex  justify-content-between">
              <div>
                <h2 className="display-1">
                  {/* <strong>28&deg;</strong> */}
                  <strong>
                    {currentWeather?.current.temp_c}&deg; C{", "}
                  </strong>
                </h2>
                <p className="h5">Fair</p>
                <p className="h5">Day 35&deg; &#x2022; Night 27&deg;</p>
              </div>
              <WiDayCloudy size="10em" />
              {/* <img src={currentWeather?.current.condition.icon} /> */}
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
