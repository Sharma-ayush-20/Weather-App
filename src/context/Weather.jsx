import React, { createContext, useContext, useState } from "react";
import { fetchApi , getCurrentUserLocation } from "../api/fetchapi.js";

//context create
export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherContextProvider = (props) => {

  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    if (!searchCity) return; //  Prevent empty fetch
    try {
      const response = await fetchApi(searchCity);
      setData(response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData(null); // Optional: reset data on error
    }
  };

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
        getCurrentUserLocation(position.coords.latitude, position.coords.longitude)
        .then((data) => setData(data))
    })
  }

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        setSearchCity,
        data,
        fetchData,
        getLocation
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
