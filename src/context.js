import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    temps: [],
    weatherState: ""
  }
  componentDidMount(){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        let woeid = myJson[0].woeid;
        return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
      })
      .then(function(response){
        return response.json()
      })
      .then((weatherData) => {
        let consolidateWeather = weatherData.consolidated_weather[0];
        this.setState({
          temps: [consolidateWeather.min_temp, consolidateWeather.max_temp],
          weatherState: consolidateWeather.weather_state_abbr
        });
      });
  }
  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
