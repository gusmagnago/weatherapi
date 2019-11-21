import React, { Component } from "react";

import axios from "axios";

export default class London extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: []
    };
    this.gettingWeekDay = this.gettingWeekDay.bind(this);
  }

  gettingWeekDay(day) {
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    // let date =
    let dayOfTheWeek = new Date(day);
    let dayName = weekday[dayOfTheWeek.getDay()];
    return dayName;
  }
  componentDidMount() {
    axios.get(`/44418/`).then(res => {
      res.data.consolidated_weather.pop();
      this.setState({ location: res.data.consolidated_weather });
    });
  }

  render() {
    const location = this.state.location;
    return (
      <div className="container">
        <div className="row">
          {location.map(item => (
            <div key={item._id} className="cards shadow">
              <h3>{this.gettingWeekDay(item.applicable_date)}</h3>
              <p>{item.weather_state_name}</p>
              <img
                className="state-img"
                src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}
                alt={item.weather_state_abbr}
              />
              <h2>{item.the_temp.toFixed() + "º"}</h2>
              <div className="other-temps">
                <div>
                  <span>min</span>
                  <p>{item.min_temp.toFixed() + "º"}</p>
                </div>
                <div>
                  <span>max</span>
                  <p>{item.max_temp.toFixed() + "º"}</p>
                </div>
              </div>
              <div className="wind">
                <div>
                  <span>wind speed</span>
                  <p>{item.wind_speed.toFixed()}</p>
                </div>
                <div>
                  <span>wind dir</span>
                  <p>{item.wind_direction_compass}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
