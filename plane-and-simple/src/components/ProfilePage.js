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


    console.log(cityData)

    console.log(this.props.cities)

    return (
      <div className="profile-container">
        {this.props &&
          <img className="profile-image" src={cityData.images[1].source_url} alt="city-image" />}
        <div className="facts-container">
          <h1 className="city-facts">City Facts</h1>
          <h1 className="country-info"> {cityData.name}, {cityData.country_id}</h1>
          <h1 className="population">Population: {new Intl.NumberFormat().format(cityData.properties[0].value)}</h1>
          <h1 className="country-snippet"> {cityData.snippet} {cityData.intro} </h1>
          <div className="climate-container">
            <h2 className="weather-title">Climate </h2>
            <div className="weather-wrapper">
              <div className="weather-container" >
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[0].toFixed(2)} C
                Min:{cityData.climate.temperature.average_min.months[0].toFixed(2)} C  </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[1].toFixed(2)} C
                 Min: {cityData.climate.temperature.average_min.months[1].toFixed(2)} C</div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[2].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[2].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[3].toFixed(2)} C
                Min:{cityData.climate.temperature.average_min.months[3].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[4].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[4].toFixed(2)} C  </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[5].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[5].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[6].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[6].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[7].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[7].toFixed(2)} C</div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[8].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[8].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[9].toFixed(2)} C
                Min: {cityData.climate.temperature.average_min.months[9].toFixed(2)} C</div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[10].toFixed(2)}C
                Min: {cityData.climate.temperature.average_min.months[10].toFixed(2)} C </div>
                <div className="weather-cell">
                  Max: {cityData.climate.temperature.average_max.months[11].toFixed(2)} C
                 Min: {cityData.climate.temperature.average_min.months[11].toFixed(2)} C </div>
              </div>
            </div>
          </div>

        </div>

      </div >

    )
  }
}

export default ProfilePage;