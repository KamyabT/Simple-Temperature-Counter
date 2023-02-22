import React, { Component, useState } from "react";

const Temper = () => {
  const [temperature, setTemperature] = useState(10);
  const [temperaturecolor, setTemperaturecolor] = useState("cold");

  const doIncrement = () => {
    const newTemperature = temperature + 1;
    if (newTemperature >= 15) {
      setTemperaturecolor("hot");
    }
    setTemperature(newTemperature);
  };

  const deCrement = () => {
    const newTemperature = temperature - 1;
    if (newTemperature < 15) {
      setTemperaturecolor("cold");
    }
    setTemperature(temperature - 1);
  };

  return (
    <>
      <div className="mainDesign">
        <div className="container">
          <div className="appContainer">
            <div className={`tempHolder ${temperaturecolor}`}>
              <span className="temp">{temperature}°C</span>
            </div>
            <div>
              <button className="btnMainDesign" onClick={() => doIncrement()}>
                +
              </button>
              <button className="btnMainDesign" onClick={() => deCrement()}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temper;
