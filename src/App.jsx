import React, { useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'


function App() {
  const weather = useWeather();
  console.log(weather)

  useEffect(() => {
    weather.getLocation()
  }, [])

  return (
    <>
      <h1>Weather Forecast</h1>
      <div className="center-container">
        <Input />
        <Button value="Check Temperature" onClick={weather.fetchData} />
        <WeatherCard />
        <Button value="Refresh" onClick={() => window.location.reload()} />

      </div>


    </>
  )
}

export default App
