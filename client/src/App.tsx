import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "./customBootstrap.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import { Today } from "./component/cards/Today";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/today" element={<Today />} />
            <Route path="/about" element={<h1>Abbout</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
