/* import React from "react";

export const WeatherApi = async (cityname) => {
  const responseData = {
    cityName: "",
    date: "",
    weatherSpeed: "",
    weatherCondition: "",
    temperature: "",
    weatherDeg: "",
  };
  const apiKey = "2bf40dfe31e406fd17714f7755749ed0";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;
  await fetch(URL)
    .then((data) => data.json())
    .then((res) => {
      responseData.cityName = res.timezone;
      responseData.date = res.dt;
      responseData.weatherSpeed = res.wind.speed;
      responseData.weatherCondition = res.weather[0].description;
      responseData.temperature = res.main.temp;
      responseData.weatherDeg = res.wind.deg;
    })
    .catch((error) => {
      console.log(error);
    });
  return responseData;
}; */


  // const {
  //   cityName,
  //   date,
  //   temperature,
  //   weatherCondition,
  //   weatherDeg,
  //   WeatherSpeed,
  // } = WeatherApi;

  // Rain
  // Thunderstorm
  // Drizzle
  // Snow
  // Clear
  // Clouds
  // if (info) {
  //   info.weather[0].main = "Drizzle";
  // } else {
  //   return;
  // }