import React, { Component } from "react";

import { fetchData } from '../services/apiHelper';

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      snippit: "",
      population: "",
  

    }

  }

  componentDidMount = async () => {
    const response = await fetchData()
    let cityImage = response.data.results[0].images[0].sizes.original.url;
    let citySnippit = response.data.results[0].intro;
    let cityPopulation = response.data.results[0].properties[0].value;
    console.log(cityImage);
    console.log(citySnippit);
    console.log(cityPopulation);
    console.log(response.data.results)

    this.setState({
      image: cityImage,
      snippit: citySnippit,
      population: cityPopulation,
    })

  }

  render() {
    return (
      <div className="profile-container">
        <img src={this.state.image} alt="city-image" />
        <h1> {this.state.snippit}</h1>
        <h2>Population = {this.state.population}</h2>
      </div>
    )
  }
}

export default ProfilePage




