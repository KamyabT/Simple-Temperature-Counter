import React, { Component, useState } from "react";

const Temper = () => {
  const [temperature, setTemperature] = useState(10);

  return (
    <>
      <div className="mainDesign">
        <div className="container">
          <div className="appContainer">
            <div className="tempHolder">
              <span className="temp">{temperature}°C</span>
            </div>
            <div>
              <button
                className="btnMainDesign"
                onClick={() => setTemperature(temperature + 1)}
              >
                +
              </button>
              <button
                className="btnMainDesign"
                onClick={() => setTemperature(temperature - 1)}
              >
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
