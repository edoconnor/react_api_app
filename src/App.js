import React, { useState } from "react";
import axios, { Axios } from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d165339b5bc5a67a68ea36b2a7695185`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
           
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>
        <div className="bottom">
          
          <div className="humidity">
            {data.main ? <p> Humidity: {data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            {data.wind ? <p> Wind: {data.wind.speed.toFixed()} mph</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
