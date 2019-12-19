import React, { Component } from "react";


class ProfilePage extends Component {

  render() {
    const cityName = this.props.cityName;
    let cityData;

    for (let i = 0; i < this.props.cities.length; i++) {
      if (this.props.cities[i].name === cityName) {
        cityData = this.props.cities[i].data;
      }
    }

    // const weather = this.props.
    //   displayWeather = () => {
    //     for (let i = 0; i < this.props.cities.length; i++) {
    //       return
    //     }
    //   }

    console.log(cityData)

    console.log(this.props.cities)

    return (
      <div className="profile-container">
        {this.props &&
          <img className="profile-image" src={cityData.images[1].source_url} alt="city-image" />}
        <div className="facts-container">
          <h1 className="cit-facts">City Facts</h1>
          <h1 className="country-info"> Name: {cityData.id} , {cityData.country_id}</h1>
          <h1>Population: {cityData.properties[0].value}</h1>
          <h1> Intro: {cityData.snippet} {cityData.intro} </h1>
          <div className="climate-container">
            <h2>Climate </h2>
            <div className="weather-container" >
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[0]} C Min:{cityData.climate.temperature.average_min.months[0]} C  </div>
              <div className="weather-cell"> Max: {cityData.climate.temperature.average_max.months[1]} C Min: {cityData.climate.temperature.average_min.months[1]} C</div>
              <div className="weather-cell"> Max: {cityData.climate.temperature.average_max.months[2]} C Min: {cityData.climate.temperature.average_min.months[2]} C </div>
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[3]} C Min:{cityData.climate.temperature.average_min.months[3]} C </div>
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[4]} C Min: {cityData.climate.temperature.average_min.months[4]} C  </div>
              <div className="weather-cell"> Max: {cityData.climate.temperature.average_max.months[5]} C Min: {cityData.climate.temperature.average_min.months[5]} C </div>
              <div className="weather-cell">   Max: {cityData.climate.temperature.average_max.months[6]} C Min: {cityData.climate.temperature.average_min.months[6]} C </div>
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[7]} C  Min: {cityData.climate.temperature.average_min.months[7]} C</div>
              <div className="weather-cell">   Max: {cityData.climate.temperature.average_max.months[8]} C Min: {cityData.climate.temperature.average_min.months[8]} C </div>
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[9]} C  Min: {cityData.climate.temperature.average_min.months[9]} C</div>
              <div className="weather-cell">  Max: {cityData.climate.temperature.average_max.months[10]}C  Min: {cityData.climate.temperature.average_min.months[10]} C </div>
              <div className="weather-cell">   Max: {cityData.climate.temperature.average_max.months[11]} C Min: {cityData.climate.temperature.average_min.months[11]} C </div>
            </div>
          </div>

        </div>

      </div >

    )
  }
}

export default ProfilePage;