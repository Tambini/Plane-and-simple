import React, { Component } from "react";

import { fetchData } from '../services/apiHelper';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input = []  
      image: "",

    }

  }

  componentDidMount = async () => {
    const response = await fetchData()
    let cityImage = response.data.results[0].images[0].sizes.original.url;
  
    console.log(cityImage);
  
    console.log(response.data.results)

    this.setState({
      image: cityImage,
    
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