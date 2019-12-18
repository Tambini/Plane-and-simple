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
          <img classsName="profile-image " src={cityData.images[0].source_url} alt="city-image" />}
        <div className="facts-container">
          <h1>City Facts</h1>
          <h1> Name: {cityData.id} , {cityData.country_id}</h1>
          <h1>Population: {cityData.properties[0].value}</h1>
          <h1> Intro: {cityData.snippet} {cityData.intro} </h1>
          <h1> Climate
            Average-max(by month): Jan {cityData.climate.temperature.average_max.months[0]} C
                                   Feb {cityData.climate.temperature.average_max.months[1]} C
                                   March {cityData.climate.temperature.average_max.months[2]} Celsius
                                   April {cityData.climate.temperature.average_max.months[3]} Celsius
                                   May {cityData.climate.temperature.average_max.months[4]} Celsius
                                   June {cityData.climate.temperature.average_max.months[5]} Celsius
                                   July {cityData.climate.temperature.average_max.months[6]} Celsius
                                   Aug {cityData.climate.temperature.average_max.months[7]} Celsius
                                   Sept {cityData.climate.temperature.average_max.months[8]} Celsius
                                   Oct {cityData.climate.temperature.average_max.months[9]} Celsius
                                   Nov {cityData.climate.temperature.average_max.months[10]} Celsius
                                   Dec {cityData.climate.temperature.average_max.months[11]} Celsius
            </h1>
          
          {/* <h1> Quick Tips:  </h1> */}

        </div>


        {/* <h2>Population = {this.state.population}</h2> */}

      </div>

    )
  }
}

export default ProfilePage;