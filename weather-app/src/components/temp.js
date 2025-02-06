import React, { useEffect, useState } from "react";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("");

  const [tempInfo, setTempInfo] = useState({}); // pasing {} empty objects

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=070d1d6cb51433275fa33741f6caae74`;

      //   let url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=070d1d6cb51433275fa33741f6caae74`;

      const res = await fetch(url);
      const data = await res.json();

      // data destructuring
      const { temp, pressure, humidity } = data.main; // here temp,pressure,humidity,wind,sunrise,sunset these are the key of the object main from data.main

      const { main: weathermood } = data.weather[0]; // data.weather[0] here weather is an object and insde that object there is an array and insode index 0 of that array the main key lies
      // main: weathermood just changing name of main to weathermood

      const { name } = data;

      const { speed } = data.wind;

      const { sunrise, sunset, country } = data.sys;

      const { dt: datetime } = data;
      const { timezone } = data;

      // creating my own object

      const myNewWhetherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        sunrise,
        sunset,
        country,
        datetime,
        timezone,
      };

      setTempInfo(myNewWhetherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    sunrise,
    sunset,
    country,
    datetime,
    timezone,
  } = tempInfo;

  // converting seconds to timr

  let sec = sunset;
  let date = new Date(sec * 1000); // to get milliseconds
  let timestr = `${date.getHours()}:${date.getMinutes()}`;

  let sec1 = sunrise;
  let date1 = new Date(sec1 * 1000); // to get milliseconds
  let timestr1 = `${date1.getHours()}:${date1.getMinutes()}`;

  const datelocation = new Date(datetime * 1000);

  // Get the UTC time
  const utcTime =
    datelocation.getTime() + datelocation.getTimezoneOffset() * 60000;

  // Convert to the local time by adding the timezone offset (in milliseconds)
  const localTime = new Date(utcTime + timezone * 1000);

  useEffect(() => {
    getWeatherInfo();
  }, [searchValue]); // [] empty array means it only renders for the first time since it has no parameter

  return (
    <>
      <div className="weather-card">
        <input
          className="search-bar"
          type="search"
          placeholder="Search city..."
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn" onClick={getWeatherInfo}>
          Search
        </button>

        <div className="weather-info">
          <div className="temp-weather">
            <span>Temperature: {temp}&deg;</span>
            <p>Weather: {weathermood}</p>
            <p>City: {name}</p>
            <p>Country: {country}</p>
            {/* <p>Date/Time : {new Date().toLocaleString()}</p> */}
            <p>Date/Time: {localTime.toString()}</p>
          </div>
        </div>

        <div className="additional-info">
          <div className="info">
            <p>Sunrise: {timestr1} Am</p>
            <p>Sunset: {timestr} pm</p>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure}MM</p>
            <p>Wind: {speed}m/s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
