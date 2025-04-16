import React from "react";
import { useWeather } from "../context/Weather";

const WeatherCard = () => {
    const whether = useWeather();
  return (
    
    <div className="card">
        <img src={whether?.data?.current?.condition?.icon} alt="" />
        <h3>{whether?.data?.current?.temp_c}°C</h3>
        <h5>{whether?.data?.location?.name}, {whether?.data?.location?.region}, {whether?.data?.location?.country}</h5>
    </div>

  );
};

export default WeatherCard;
