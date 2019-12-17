import React, { Component } from "react";

import { fetchData, allCities } from '../services/apiHelper';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      image: "",
    }
  }

  componentDidMount = async () => {
    const citiesData = await allCities()
    console.log(citiesData)

    this.setState({
      cities: citiesData,
    })
  }


  render() {
    // console.log(this.state.cities.map((city, index) => {
    //   return city.data
    // }))
    return (
      this.state.cities.length > 0 ?
        <div className="profile-container">
          {this.state.cities.map((city, index) => {
            return (
              <img key={index} src={city.data.results[0].images[0].sizes.original.url} />
              // <p>{city.data.results[0].images[0]}</p>
            )
          })}
        </div> :
        <p>NOT WORKING</p>
    )
  }
}

export default Landing;