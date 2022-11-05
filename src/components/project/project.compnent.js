import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import {
  Mainconsty,
  Topconsty,
  Bottomconsty,
  Topleft,
  Topmid,
  Topright,
  Containerdiv,
  MainTopMid,
} from "./project.styles";
import { WeatherApi } from "../../utils/weatherApi";
import { useEffect } from "react";
import {
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherSnow,
} from "react-icons/ti";

const apiKey = "2bf40dfe31e406fd17714f7755749ed0";

const Project = () => {
  const current = new Date();
  const Weekday = `${current.getDay()}`;
  const today = `${current.getDate()}`;
  const month = `${current.getMonth()}`;
  const year = `${current.getFullYear()}`;
  const DdMmYy = today + "/" + month + "/" + year;

  const getDayName = (Weekday) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[Weekday];
  };
  const dayName = getDayName(Weekday);

  let [seachTerm, setSeachTerm] = useState("abuja");

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setSeachTerm(inputValue);

    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    getWeatherData(seachTerm);
  };

  const getWeatherData = (seachTerm) => {
    if (seachTerm) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${seachTerm}&appid=${apiKey}`;
      axios.get(URL).then((response) => {
        console.log(response.data);
        setInfo(response.data);
      });
    }
  };

  const [info, setInfo] = useState(null);

  useEffect(() => {
    getWeatherData(seachTerm);
  }, []);

  if (info) {
    return (
    
      <Mainconsty>
        {/* <span>Main box</span> */}
        <MainTopMid>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Write City Name Here!"
          />

          <button className="submit" onClick={handleSubmit}>Submit</button>
        </MainTopMid>
        <Topconsty>
          <Containerdiv>
            <Topleft>
              <h1 className="city">{info.name}</h1>
              <h2>{dayName}</h2>
              <h2>
                {today < 10 ? "0" + today : today}/
                {month < 10 ? "0" + month : month}/{year}
              </h2>
              <h3 className="wind">wind {info.wind.speed}km/h</h3>
            </Topleft>
            <Topmid>
              <h2>
                {info.weather[0].main === "Clear" ? (
                  <div>
                    <TiWeatherPartlySunny size={"8rem"} />
                    <span className="weather">Clear</span>
                  </div>
                ) : info.weather[0].main === "Rain" ? (
                  <div>
                    <TiWeatherShower size={"8rem"} />
                    <span className="weather">Rain</span>
                  </div>
                ) : info.weather[0].main === "Snow" ? (
                  <div>
                    <TiWeatherSnow size={"8rem"} />
                    <span className="weather">Snow</span>
                  </div>
                ) : info.weather[0].main === "Clouds" ? (
                  <>
                    <TiWeatherCloudy size={"8rem"} />
                    <span className="weather">Clouds</span>
                  </>
                ) : info.weather[0].main === "Thunderstorm" ? (
                  <div>
                    <TiWeatherStormy size={"8rem"} />
                    <span className="weather">Thunderstorm</span>
                  </div>
                ) : info.weather[0].main === "Drizzle" ? (
                  <div>
                    <TiWeatherWindyCloudy size={"150px"} />
                    <span className="weather">Drizzle</span>
                  </div>
                ) : (
                  <span>No Data</span>
                )}
              </h2>
            </Topmid>
            <Topright>
              <h3>{info.wind.deg} ⬆ ⬇ </h3>
              <h2 className="deg">{(info.main.temp - 273).toFixed(2)}°</h2>
            </Topright>
          </Containerdiv>
        </Topconsty>
        <Bottomconsty>
          <div className="Bottom-container">
            <span>bottom box</span>
          </div>
        </Bottomconsty>
      </Mainconsty>
    );
  }
  
};

export default Project;
