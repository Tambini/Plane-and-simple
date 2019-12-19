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
          <img classsName="profile-image " src={cityData.images[0].source_url} alt="city-image" />}
        <div className="facts-container">
          <h1>City Facts</h1>
          <h1> Name: {cityData.id} , {cityData.country_id}</h1>
          <h1>Population: {cityData.properties[0].value}</h1>
          <h1> Intro: {cityData.snippet} {cityData.intro} </h1>
          <h2>Climate Average-max(by month )& Average-min (by month</h2>
          <div className="weather-container" >

            <div> Jan {cityData.climate.temperature.average_max.months[0]} C </div>
            <div> Feb {cityData.climate.temperature.average_max.months[1]} C </div>
            <div> March {cityData.climate.temperature.average_max.months[2]} C </div>
            <div> April {cityData.climate.temperature.average_max.months[3]} C </div>
            <div>  May {cityData.climate.temperature.average_max.months[4]} C </div>
            <div> June {cityData.climate.temperature.average_max.months[5]} C </div>
            <div>  July {cityData.climate.temperature.average_max.months[6]} C </div>
            <div>  Aug {cityData.climate.temperature.average_max.months[7]} C </div>
            <div>  Sept {cityData.climate.temperature.average_max.months[8]} C </div>
            <div>  Oct {cityData.climate.temperature.average_max.months[9]} C </div>
            <div>  Nov {cityData.climate.temperature.average_max.months[10]}C  </div>
            <div>  Dec {cityData.climate.temperature.average_max.months[11]} C  </div>







          </div>

          {/* <h1> Quick Tips:  </h1> */}

        </div>


        {/* <h2>Population = {this.state.population}</h2> */}

      </div >

    )
  }
}

export default ProfilePage;