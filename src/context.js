import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Results"
  }
  componentDidMount(){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&
      page=1&page_size=10&country=us&f_has_lyrics=1&apikey=af51884ebf5dbcb62e97871ae7b6b800`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
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
