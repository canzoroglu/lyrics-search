import React, { Component } from 'react';
import {Consumer} from "../context";

class Result extends Component {
  render(){
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <h4>Min Temp:</h4>
              <span>{value.temps[0]}</span>
              <h4>Max Temp:</h4>
              <span>{value.temps[1]}</span>
              <p><img src={"https://www.metaweather.com/static/img/weather/"+ value.weatherState +".svg"}
                  className="img-fluid" alt="Weather State"/></p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Result;
