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
          <h1> </h1>
          <h1> Name: {cityData.id}</h1>
          <h1>Population: {cityData.properties[0].value}</h1>
          <h1> Quick Tips:  {cityData.snippet}</h1>

        </div>


        {/* <h2>Population = {this.state.population}</h2> */}

      </div>

    )
  }
}

export default ProfilePage;