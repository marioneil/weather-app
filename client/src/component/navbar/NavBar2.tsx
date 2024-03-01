import { useContext } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { WeatherContext } from "../../context/WeatherContext";

const NavBar2: React.FC = () => {
  const { selectedAddress, currentWeather } = useContext(WeatherContext);

  return (
    <div className="d-flex bg-primary-subtle">
      <div className="d-flex align-items-center justify-content-center py-2 flex-grow-1 border-end  border-white">
        <div className="flex-shrink-0">
          <TiWeatherCloudy />
        </div>
        <div className="ms-3">
          {currentWeather?.current.temp_c}&deg; C{", "}
          {`${selectedAddress.name},  ${selectedAddress.region}, ${selectedAddress.country} `}
        </div>
      </div>

      <div className="flex-grow-1 ms-3"> </div>
    </div>
  );
};

NavBar2.propTypes = {};

export default NavBar2;
