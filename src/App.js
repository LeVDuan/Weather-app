import React, {userState} from "react"
import axios from "axios"
function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>HaNoi</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">70°F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">10%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">15 MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
