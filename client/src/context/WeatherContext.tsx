import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { CurrentWeather } from "../types/current";
import axios from "axios";

export const WeatherContext = createContext<{
  selectedAddress: any;
  setSelectedAddress: (currentAddress: any) => void;
  currentWeather: null | CurrentWeather;
  selectedMonth: number;
  setSelectedMonth: (currentYear: any) => void;
  selectedYear: number;
  setSelectedYear: (currentYear: any) => void;
}>({
  selectedAddress: null,
  setSelectedAddress: () => {
    console.log("function not defined.");
  },
  currentWeather: null,
  selectedMonth: new Date().getMonth(),
  setSelectedMonth: () => {
    console.log("function not defined.");
  },
  selectedYear: new Date().getFullYear(),
  setSelectedYear: () => {
    console.log("function not defined.");
  },
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

  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  return (
    <WeatherContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        currentWeather,
        selectedMonth,
        setSelectedMonth,
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
//
