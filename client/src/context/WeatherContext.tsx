import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { CurrentWeather } from "../types/current";
import axios from "axios";

export const WeatherContext = createContext<{
  selectedAddress: any;
  setSelectedAddress: (currentAddress: any) => void;
  currentWeather: null | CurrentWeather;
}>({
  selectedAddress: null,
  setSelectedAddress: () => {
    console.log("function not defined.");
  },
  currentWeather: null,
});

export const WeatherProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState<any>({
    id: 2801268,
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    url: "london-city-of-london-greater-london-united-kingdom",
  });

  const [currentWeather, setCurrentWeather] = useState<null | CurrentWeather>(
    null
  );

  const getCurrentWeather = async () => {
    const url = `http://localhost:3000/current?q=${selectedAddress.lat},${selectedAddress.lon}`;
    try {
      const response = await axios.get(url);
      //  const addresses = response.data;
      setCurrentWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentWeather();
  }, [selectedAddress]);

  return (
    <WeatherContext.Provider
      value={{ selectedAddress, setSelectedAddress, currentWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
//
