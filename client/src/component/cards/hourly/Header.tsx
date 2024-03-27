import { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";

export const Header = () => {
  const { selectedAddress, currentWeather } = useContext(WeatherContext);

  return (
    <>
      {"HEADER "}
      {`${selectedAddress.name},  ${selectedAddress.region}, ${selectedAddress.country} `}
    </>
  );
};
