// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "./customBootstrap.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import { Today } from "./component/cards/Today";
import { WeatherProvider } from "./context/WeatherContext";
import { Hourly } from "./component/cards/hourly/Hourly";
import { Monthly } from "./component/cards/monthly/Monthly";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/today" />} />
            <Route path="/today" element={<Today />} />
            <Route path="/hourly" element={<Hourly />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/about" element={<h1>Abbout</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
